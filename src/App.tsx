import { useState } from 'react'
import { RowsPhotoAlbum as PhotoAlbum, type Photo } from 'react-photo-album'
import Lightbox, { type Slide } from 'yet-another-react-lightbox'
import 'react-photo-album/rows.css'
import 'yet-another-react-lightbox/styles.css'
import './App.css'
import { galleryPhotos } from './galleryData'

type PhotoSpec = Photo & Slide & {
  description: string
}

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [index, setIndex] = useState(-1)
  
  const photos: PhotoSpec[] = galleryPhotos

  return (
    <div className="app-container">
      <header className="app-header">
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
      </header>
      <main className="main-content">
        {activeTab === 'home' && (
          <section>
            <p>Auf dieser Seite präsentiert VBKD in der Online-Ausstellung 2025 die Kunstwerke seiner Mitglieder.</p>
            <div className="gallery-container">
                <PhotoAlbum 
                  photos={photos}
                  onClick={({ index }) => setIndex(index)}
                  spacing={8}
                  padding={0}
                  targetRowHeight={400}
                  render={{
                  extras: (_, { photo, index }) => (
                    <div className="gallery-image-title">{photo.title}</div>
                  ),
                }}
                />
              <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                render={{
                  slide: ({ slide }) => (
                    <div className="lightbox-content">
                      <div className="lightbox-image">
                        <img src={slide.src} alt={(photos[index]).title} />
                      </div>
                      <div className="lightbox-info">
                        <h3>{(photos[index]).title}</h3>
                        <p>{(photos[index]).description}</p>
                      </div>
                    </div>
                  )
                }}
              />
            </div>
          </section>
        )}
        {activeTab === 'about' && (
          <section>
            <h2>About Us</h2>
            <p>This is the about page content. Replace this with your own content.</p>
          </section>
        )}
        {activeTab === 'contact' && (
          <section>
            <h2>Contact Us</h2>
            <p>This is the contact page content. Replace this with your own content.</p>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
