import { useState, useEffect } from 'react';
import { RowsPhotoAlbum as PhotoAlbum, type Photo } from 'react-photo-album';
import Lightbox, { type Slide } from 'yet-another-react-lightbox';
import 'react-photo-album/rows.css';
import 'yet-another-react-lightbox/styles.css';
import './App.css';
import { galleryPhotos } from './galleryData';

type PhotoSpec = Photo &
  Slide & {
    title: string;
    description: string;
    author: string;
    plantCommonName: string;
    plantBotanicalName: string;
    artworkYear: string;
    artworkSize: string;
    artworkTechnique: string;
    titleEn: string;
    descriptionEn: string;
    plantCommonNameEn: string;
    artworkTechniqueEn: string;
    contactEmail?: string;
    contactPhone?: string;
    contactWebsite?: string;
    contactSocial?: string;
    contactNote?: string;
    lowSrc: string;
    lowWidth: number;
    lowHeight: number;
  };

function App() {
  const [index, setIndex] = useState(-1);
  const [lang, setLang] = useState<'de' | 'en'>('de');

  const IMAGE_BASE = (import.meta.env as any).VITE_IMAGE_BASE || '';

  function resolveImagePath(pth?: string): string {
    // Always return a string (empty string when no path provided)
    if (!pth) return '';

    // If it's an absolute URL (http(s)://), protocol-relative (//) or other scheme (data:, blob:, mailto:, etc.), return as-is
    if (/^(https?:)?\/\//i.test(pth) || /^[a-z0-9+.-]+:/i.test(pth)) return pth;

    // normalize base without trailing slash
    const base = (IMAGE_BASE || '').replace(/\/+$/, '');

    // If no base configured, return absolute (leading slash) path
    if (!base) return pth.startsWith('/') ? pth : `/${pth}`;

    // If path already begins with the base, avoid double-prefixing
    if (pth.startsWith(base)) return pth;

    return pth.startsWith('/') ? `${base}${pth}` : `${base}/${pth}`;
  }

  // Read image index and language from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // language param
    const urlLang = params.get('lang');
    if (urlLang) {
      const normalized = urlLang.toLowerCase();
      if (normalized === 'en' || normalized === 'de') {
        setLang(normalized as 'de' | 'en');
      } else {
        setLang('de');
      }
    }
    // image index param
    const imageIndex = params.get('image');
    if (imageIndex) {
      const idx = parseInt(imageIndex, 10);
      if (!isNaN(idx) && idx >= 0 && idx < galleryPhotos.length) {
        setIndex(idx);
      }
    }
  }, []);

  // Update URL when index changes (preserve lang)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (index >= 0) {
      params.set('image', index.toString());
    } else {
      params.delete('image');
    }
    // always persist current language
    params.set('lang', lang);
    const query = params.toString();
    if (query) {
      window.history.replaceState(null, '', `?${query}`);
    } else {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [index, lang]);

  // Update URL when language changes (preserve image index)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set('lang', lang);
    if (index >= 0) {
      params.set('image', index.toString());
    }
    const query = params.toString();
    window.history.replaceState(
      null,
      '',
      query ? `?${query}` : window.location.pathname
    );
  }, [lang]);

  const albumPhotos: PhotoSpec[] = JSON.parse(
    JSON.stringify(galleryPhotos)
  ) as PhotoSpec[];
  const lightboxPhotos: PhotoSpec[] = JSON.parse(
    JSON.stringify(galleryPhotos)
  ) as PhotoSpec[];

  // Resolve image URLs according to environment (dev vs production)
  for (const p of lightboxPhotos) {
    p.src = resolveImagePath(p.src);
    p.lowSrc = resolveImagePath(p.lowSrc);

    // Apply language overrides for lightbox content
    if (lang === 'en') {
      p.title = p.titleEn;
      p.description = p.descriptionEn;
      p.plantCommonName = p.plantCommonNameEn;
      p.artworkTechnique = p.artworkTechniqueEn;
    }
  }

  for (const p of albumPhotos) {
    // ensure lowSrc/src are resolved and album uses thumbnails
    p.lowSrc = resolveImagePath(p.lowSrc);
    p.src = p.lowSrc || resolveImagePath(p.src);
    p.width = p.lowWidth;
    p.height = p.lowHeight;
    // Apply language overrides for album content
    if (lang === 'en') {
      p.title = p.titleEn || p.title;
      p.description = p.descriptionEn;
      p.plantCommonName = p.plantCommonNameEn;
      p.artworkTechnique = p.artworkTechniqueEn;
    }
    p.alt = p.title;
  }

  return (
    <div className="app-container">
      <div className="intro">
        <div className="intro__poster">
          <img
            src={resolveImagePath('/src/img/poster.jpeg')}
            height={320}
            alt="VBKD Online Ausstellung 2025"
          />
        </div>
        <div className="intro__text">
          <h3>
            Herzlich willkommen zur Ausstellung „Gefährdete Pflanzen“ des
            Vereins Botanische Kunst Deutschland!
          </h3>
          <p>
            Im Mittelpunkt der diesjährigen Ausstellung stehen Pflanzenarten,
            die zwar als gefährdet gelten, aber nicht unbedingt auf der
            nationalen Roten Liste geführt werden. Einige der hier gezeigten
            Pflanzen sind naheliegend, andere werden Sie überraschen. Es gibt
            viele Gründe, warum eine Pflanze als besorgniserregend gelten kann.
            Dazu gehört die Zerstörung ihres Lebensraums durch großflächige
            Bauvorhaben, sei es für den Wohnungsbau, andere Bauprojekte oder den
            Straßenbau. Der Klimawandel ist ein großes Problem, mit Waldbränden,
            steigenden Temperaturen und Überschwemmungen. Hinzu kommen
            Insektenbefall, tödliche Bakterien, Übernutzung und sogar
            Vandalismus. Interessanterweise bedeutet die Gefährdung einer
            Pflanze an einem Ort – ob in Deutschland oder weltweit – nicht
            zwangsläufig, dass sie auch überall gefährdet ist.
          </p>
          <p>
            Deutschland ist ein gutes Beispiel: Der Gewöhnliche Löwenzahn steht
            in Bayern und Hessen auf der Roten Liste, in anderen Teilen
            Deutschlands jedoch nicht. Manche Pflanzen stehen kurz vor dem
            Aussterben, während andere erst jetzt die Auswirkungen verschiedener
            Probleme zu spüren bekommen.
          </p>
          <p>
            Ein kleiner beruhigender Aspekt ist die bemerkenswerte
            Anpassungsfähigkeit einiger Pflanzen an andere Regionen der Erde.
            Während sich unsere Landmassen durch den Klimawandel verändern und
            manche Pflanzen absterben oder verschwinden, beginnen dieselben
            Pflanzen in Umgebungen, die ihren früheren Lebensräumen ähneln,
            wieder aufzutauchen und zu gedeihen. Leider schreitet die Zerstörung
            unserer Pflanzenwelt so schnell voran, dass wir möglicherweise nicht
            genug Zeit haben, dies noch zu verhindern, selbst angesichts der
            positiven Nachrichten über die Anpassungsfähigkeit der Pflanzen an
            neue Umgebungen.
          </p>
          <p className="intro__eng">
            <strong>
              Welcome to the VBKD 2025 Online Exhibition "Threatened Plants"!
            </strong>{' '}
            This year’s exhibition highlights plant species considered
            threatened even if not on the national Red List, showing both
            expected and surprising examples. Their vulnerability stems from
            habitat destruction through construction and roads, climate change
            with fires, rising temperatures and floods, insect infestations,
            lethal pathogens, overuse and even vandalism. Threat status can be
            highly local: for instance, the common dandelion is red-listed in
            parts of Germany but not elsewhere. While some species are near
            extinction and others are only beginning to feel emerging pressures,
            a modest source of hope lies in the remarkable ability of certain
            plants to adapt and reestablish themselves in new regions resembling
            their former habitats — though the pace of environmental loss may
            outstrip these adaptive successes.
          </p>
        </div>
      </div>
      <div className="gallery-container">
        <PhotoAlbum
          photos={albumPhotos}
          onClick={({ index }) => setIndex(index)}
          spacing={8}
          padding={0}
          targetRowHeight={400}
          render={{
            extras: (_, { photo }) => (
              <div className="gallery-image-title">
                {photo.author} - {photo.title}
              </div>
            ),
          }}
        />
        <Lightbox
          slides={lightboxPhotos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          on={{
            view: ({ index }) => {
              setIndex(index);
            },
          }}
          render={{
            slide: ({ slide }) => (
              <div className="b-content">
                <div className="b-content__pic">
                  <img
                    src={slide.src}
                    alt={lightboxPhotos[index]?.title ?? ''}
                  />
                </div>
                <div className="b-content__info">
                  <div className="b-content__author">
                    {lightboxPhotos[index]?.author}
                  </div>
                  <div>
                    {lightboxPhotos[index]?.contactEmail && (
                      <a
                        className="b-content__meta"
                        href={`mailto:${lightboxPhotos[index]?.contactEmail}`}
                      >
                        {lightboxPhotos[index]?.contactEmail}
                      </a>
                    )}
                    {lightboxPhotos[index]?.contactPhone && (
                      <a
                        className="b-content__meta"
                        href={`tel:${lightboxPhotos[index]?.contactPhone}`}
                      >
                        {lightboxPhotos[index]?.contactPhone}
                      </a>
                    )}
                    {lightboxPhotos[index]?.contactSocial && (
                      <a
                        className="b-content__meta"
                        href={
                          /^https?:\/\//i.test(
                            lightboxPhotos[index]?.contactSocial || ''
                          )
                            ? lightboxPhotos[index]?.contactSocial
                            : (
                                lightboxPhotos[index]?.contactSocial || ''
                              ).startsWith('@')
                            ? `https://instagram.com/${(
                                lightboxPhotos[index]?.contactSocial || ''
                              ).slice(1)}`
                            : `https://instagram.com/${lightboxPhotos[index]?.contactSocial}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {lightboxPhotos[index]?.contactSocial}
                      </a>
                    )}
                    {lightboxPhotos[index]?.contactWebsite && (
                      <a
                        className="b-content__meta"
                        href={
                          /^https?:\/\//i.test(
                            lightboxPhotos[index]?.contactWebsite || ''
                          )
                            ? lightboxPhotos[index]?.contactWebsite
                            : `https://${lightboxPhotos[index]?.contactWebsite}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {lightboxPhotos[index]?.contactWebsite}
                      </a>
                    )}
                    {lightboxPhotos[index]?.contactNote && (
                      <span className="b-content__meta">
                        {lightboxPhotos[index]?.contactNote}
                      </span>
                    )}
                  </div>
                  <div className="b-content__title">
                    {lightboxPhotos[index]?.title}
                  </div>
                  <div>
                    <span className="b-content__meta">
                      {lightboxPhotos[index]?.artworkSize}
                    </span>
                    <span className="b-content__meta">
                      {lightboxPhotos[index]?.artworkYear}
                    </span>
                    <span className="b-content__meta">
                      {lightboxPhotos[index]?.artworkTechnique}
                    </span>
                  </div>
                  <div>
                    <span className="b-content__cn">
                      {lightboxPhotos[index]?.plantCommonName}
                    </span>{' '}
                    <span className="b-content__bn">
                      ({lightboxPhotos[index]?.plantBotanicalName})
                    </span>
                  </div>
                  <div>
                    <button
                      className="b-content__lang-btn"
                      onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
                    >
                      {lang === 'de'
                        ? 'Read in English (automatic translation)'
                        : 'Auf Deutsch lesen'}
                    </button>
                  </div>
                  <div className="b-content__desc">
                    {lightboxPhotos[index]?.description}
                  </div>
                </div>
              </div>
            ),
          }}
        />
      </div>
    </div>
  );
}

export default App;
