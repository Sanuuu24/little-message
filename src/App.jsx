import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import NoteCard from './components/NoteCard';
import PhotoGallery from './components/PhotoGallery';
import Header from './components/Header';
import Footer from './components/Footer';
import IntroPage from './components/IntroPage';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const audioRef = useRef(null);

  const handleEnter = () => {
    setShowIntro(false);
    // Timer untuk menampilkan konten utama setelah intro hilang
    setTimeout(() => {
      setShowContent(true);
    }, 500);
    
    // Coba putar audio setelah interaksi user
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log('Audio tidak dapat diputar:', err);
      });
    }
  };

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log('Autoplay diblokir, menunggu interaksi user...');
        });
      }
    };

    window.addEventListener("click", playAudio);
    return () => window.removeEventListener("click", playAudio);
  }, []);

  const notes = [
    {
      id: 1,
      title: "Untuk Seseorang yang Spesial",
      content: "Setiap hari bersamamu adalah halaman baru yang indah dalam kisah hidupku. Terima kasih telah menjadi bagian dari perjalanan ini.",
      date: "6 April 2025"
    },
    {
      id: 2,
      title: "Memori Indah",
      content: "Ingatkah saat pertama kali kita bertemu? Saat itu aku tahu kamu adalah seseorang yang akan mengubah hidupku selamanya.",
      date: "5 April 2025"
    },
    {
      id: 3,
      title: "Harapan dan Impian",
      content: "Bersamamu, aku ingin membangun masa depan yang penuh dengan tawa, cinta, dan kebahagiaan. Mari kita wujudkan semua impian kita.",
      date: "4 April 2025"
    }
  ];

  const photos = [
    { id: 1, src: "/api/placeholder/400/300", alt: "Kenangan Bersama 1", caption: "Momen indah bersama" },
    { id: 2, src: "/api/placeholder/400/300", alt: "Kenangan Bersama 2", caption: "Liburan kita" },
    { id: 3, src: "/api/placeholder/400/300", alt: "Kenangan Bersama 3", caption: "Hari spesial" }
  ];

  return (
    <div className="App">
      {/* Musik autoplay */}
      <audio ref={audioRef} src="/background.mp3" loop />

      {showIntro && <IntroPage onEnter={handleEnter} />}

      {!showContent && !showIntro ? (
        <motion.div 
          className="loading-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="loading"  
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            🌑
          </motion.div>
          <p>Loading...</p>
        </motion.div>
      ) : !showIntro ? (
        <>
          <Header />
          <main className="container content">
            <motion.div 
              className="welcome-message"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>Catatan Cinta</h1>
              <p>Selamat datang di ruang kecil penuh cinta ini. Halaman ini dibuat khusus untukmu.</p>
            </motion.div>

            <motion.section 
              className="notes-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <h2>Catatan Untukmu</h2>
              <div className="notes-container">
                {notes.map((note, index) => (
                  <motion.div 
                    key={note.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 * index, duration: 0.8 }}
                  >
                    <NoteCard note={note} />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section 
              className="gallery-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <h2>Kenangan Indah Kita</h2>
              <PhotoGallery photos={photos} />
            </motion.section>
          </main>
          <Footer />
        </>
      ) : null}
    </div>
  );
}

export default App;