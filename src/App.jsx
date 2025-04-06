import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./App.css";
import NoteCard from "./components/NoteCard";
import PhotoGallery from "./components/PhotoGallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IntroPage from "./components/IntroPage";
import Photo1 from "./assets/img1.jpg";
import Photo2 from "./assets/img2.jpg";
import Photo3 from "./assets/img3.jpg";
import Photo4 from "./assets/img4.jpg";

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
        console.log("Audio tidak dapat diputar:", err);
      });
    }
  };

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((err) => {
          console.log("Autoplay diblokir, menunggu interaksi user...");
        });
      }
    };

    window.addEventListener("click", playAudio);
    return () => window.removeEventListener("click", playAudio);
  }, []);

  const notes = [
    {
      id: 1,
      title: "Pembukaan nich",
      content:
        "Mungkin disini singkat aja soalnya ga banyak yang harus diceritain ya gasih?wkwkwk, Aku mau bilang aja terimakasih banyak udah hadir di hidup aku,dan Udah buat aku jadi diri aku yang sekarang, dan Aku minta maaf kalo selalu dateng terus ke kamu Or bikin kamu risih dengan kehadiran aku. ",
    },
    {
      id: 2,
      title: "Tujuan Bikin ini",
      content:
        "Tujuan aku bikin ini sebenernya buat ngasih tau perasaan aku 3 Tahun ini ke kamu tuh kayak gimana, Dan Mungkin sebagai pesan terakhir yang aku bisa sampe in ke kamu!",
    },
  ];

  const photos = [
    {
      id: 1,
      src: Photo3,
      alt: "Awal mula Negara api menyerang",
      caption: "Inget ga ini kapan? HAHAHA, Ini tuh awal mula aku suka sama kamu padahal di posisi itu aku tahu kamu lagi deket sama fadli, dan Aku baru putus sama someone, Sampe pas foto ini tuh aku sengaja foto nya pengen depan kamu wkwk, Kalo diinget aku dulu masih labil ya sampe bikin surat terus ada scan spotify lagu nya yang boy pablo judul nya 'i <3 u' HAHAHA kocak jir, dan Di posisi ini aku belum sadar kalo aku ga pantes buat kamu, Sampe dengan lantang nya waktu itu nembak kamu HAHAHA. ",
    },
    { 
      id: 2,
      src: Photo2, 
      alt: "Pertengahan Cerita", 
      caption: "Ini dimana aku, dan Kamu udah sibuk sama kehidupan masing-masing, dan Kamu lagi ngejalanin hubungan sama fadli, dan Aku ngejalanin hubungan juga sama julia disini, Ga ada yang bisa diceritain banyak sih dari kondisi ini, Karena aku juga di kondisi ini belum ngerasa impact dari kedatangan kamu ke hidup aku tuh impact nya segede apa. " 
    },
    { 
      id: 3, 
      src: Photo4, 
      alt: "Akhir Semester 1", 
      caption: "Disini aku udah mulai ngerasa impact nya kedatangan kamu ke hidup aku gimana, Aku disini mulai mikirin hal-hal yang seharus nya aku ga pikirin, Selalu ngerasa khawatir ga jelas kadang panik sendiri wkwk, Aku juga mulai jarang sekolah karena malu sama orang orang di sekolah, Termasuk kamu." 
    },
    { 
      id: 4, 
      src: Photo1, alt: "Ujian Praktek Terakhir Kelas 9", 
      caption: "Diposisi ini aku ngerasa gambling, bingung, dan takut, Karena aku denger waktu itu kamu baru putus sama fadli, Dan aku disini mulai ngedeketin kamu lagi (Sebelum di dufan aku nembak kamu wkwk.), Karena aku ngerasa waktu itu kita gabakalan deket lagi, dan Bakalan lostcontact karena bentar lagi mau lulus." 
    },
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
              <h1>A little Message and Summary Of our Story by udin</h1>
              <p>
                Welcome Icung, Dara, Pakrah, Amel, Fachra!,
                <br /> Tiba-tiba banget yak aku bikin ginian wkwkwk.
                <br /> Dibaca Ya! Mungkin agak panjang, Tapi semoga kamu ga
                bosen baca nya!
              </p>
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
              <h2>Selamat Membaca!</h2>
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
