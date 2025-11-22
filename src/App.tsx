import { useState, useEffect } from 'react';
import { RowsPhotoAlbum as PhotoAlbum, type Photo } from 'react-photo-album';
import Lightbox, { type Slide } from 'yet-another-react-lightbox';
import 'react-photo-album/rows.css';
import 'yet-another-react-lightbox/styles.css';
import './App.css';
import svgLogo from './img/VBKD-logo.svg';
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
  const [activeTab, setActiveTab] = useState('home');
  const [index, setIndex] = useState(-1);

  // Read image index from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const imageIndex = params.get('image');
    if (imageIndex) {
      const idx = parseInt(imageIndex, 10);
      if (!isNaN(idx) && idx >= 0 && idx < galleryPhotos.length) {
        setIndex(idx);
      }
    }
  }, []);

  // Update URL when index changes
  useEffect(() => {
    if (index >= 0) {
      const params = new URLSearchParams(window.location.search);
      params.set('image', index.toString());
      window.history.replaceState(null, '', `?${params.toString()}`);
    } else {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [index]);

  const albumPhotos: PhotoSpec[] = JSON.parse(
    JSON.stringify(galleryPhotos)
  ) as PhotoSpec[];
  const lightboxPhotos: PhotoSpec[] = JSON.parse(
    JSON.stringify(galleryPhotos)
  ) as PhotoSpec[];

  for (const p of albumPhotos) {
    p.src = p.lowSrc;
    p.width = p.lowWidth;
    p.height = p.lowHeight;
    p.alt = p.title;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-left">
          <a
            href="https://www.verein-botanischekunst.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={svgLogo} alt="VBKD logo" className="header-logo" />
          </a>
        </div>
        <div className="header-main">
          <h1>VBKD 2025 Online Ausstellung</h1>
          <nav>
            <ul className="nav-menu">
              <li>
                <button
                  className={activeTab === 'home' ? 'active' : ''}
                  onClick={() => setActiveTab('home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className={activeTab === 'about' ? 'active' : ''}
                  onClick={() => setActiveTab('about')}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className={activeTab === 'contact' ? 'active' : ''}
                  onClick={() => setActiveTab('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="main-content">
        {activeTab === 'home' && (
          <section>
            <p>
              Auf dieser Seite präsentiert VBKD in der Online-Ausstellung 2025
              die Kunstwerke seiner Mitglieder.
            </p>
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
                        <div className="b-content__desc">
                          {lightboxPhotos[index]?.description}
                        </div>
                      </div>
                    </div>
                  ),
                }}
              />
            </div>
          </section>
        )}
        {activeTab === 'about' && (
          <section>
            <h2>About Us</h2>
            <p>
              This is the about page content. Replace this with your own
              content.
            </p>
          </section>
        )}
        {activeTab === 'contact' && (
          <section>
            <h2>Contact Us</h2>
            <p>
              This is the contact page content. Replace this with your own
              content.
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
