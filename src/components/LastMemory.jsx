import React from 'react';
import { motion } from 'framer-motion';
import './LastMemory.css'; // Kita akan membuat file CSS terpisah untuk styling khusus

function LastMemory() {
  return (
    <motion.div 
      className="last-memory-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="wattpad-card large-card">
        <div className="wattpad-card-header">
          <h3 className="wattpad-card-title">Last Message</h3>
        </div>
        
        <div className="wattpad-card-content long-content">
          <p>
            Lanjut nih ya!, Karena aku udah menghapus foto-foto di dufan dan foto kelulusan kita, Maaf ya karena aku ngehapus semua itu karena aku ngerasa kalo inget masa itu bakalan ngebuat aku bakalan susah ketika dalam proses melupakan kamu. <br />
            <br />
            Mungkin pas akhir kelas 9 aku ngerasa emang seharus nya kita ga ketemu dari awal ya? Maaf kalo aku kurang ya mel waktu itu gabisa menuhin ekspetasi kamu, sampe waktu itu kamu ngerasa excited sendiri karena aku ngajak main,<br />
            <br />
            Tapi nyatanya aku nge cancel itu, Karena aku ngerasa malu saat itu, Materi aku ga kayak anak-anak lain, Yang udah punya privilege bagus, Dan ketika aku ngungkapin perasaan aku yang ketiga kali nya, perasaan aku pun ditolak lagi sama kamu.
          </p>
          
          <p>
            Kelas 10 kita deket lagi dan kamu mulai ngebangun perasaan ke aku, Tapi aku masih kecewa dan ngerasa sakit waktu itu karena kejadian pas akhir kelas 9,
            <br />
            DANNNN, Kita ada plan buat main lagi tapi gajadi-jadi alasan yang sebenernya?, Karena aku masih malu dan ngerasa insecure.
          </p>
          
          <p>
            Selama 3 Tahun ini aku udah ngerasain bahagia yang bener-bener bahagia karena kamu itu gimana, Aku ngerasain Sakit yang bener-bener sakit itu gimana, Aku selalu ngerasa gitu setiap hari nya ketika inget kamu,
            <br />
            Dan, Bodoh nya aku ketika lupa sama kamu, Aku pengen cerita ke seseorang, Dan nyari seseorang yang mirip sama kamu.
          </p>
          
          <p>
            Jujur aku masih inget kamu pernah surprise in birthday ex kamu, Dan aku lihat didepan mata aku, <br />
            <br />
            Aku denger kamu call ditengah malem sama ex kamu, Aku ngelihat dan denger sendiri waktu itu kamu bawel ke ex kamu, Padahal disisi lain orang-orang tau kalo kamu orang nya tertutup, <br />
            <br />
            Aku ngelihat kamu ngasih makanan ke ex kamu, Dan lagi lagi aku ngelihat sendiri waktu itu.
          </p>

          <p>
          Kamu pun terkadang selalu datang ke mimpi aku untuk ngasih tau kalo aku harus jauh dari kamu,<br />
          <br />
          Tapi terkadang di mimpi itu aku jadi seseorang yang kamu butuhkan, Dan diposisi itu aku berharap kalo itu kejadian di dunia nyata, Tapi sampai kapanpun itu gabakalan terjadi.
          </p>
          
          <p>
            Aku berterima kasih karena kamu udah ngasih aku sesuatu pembelajaran dan pengalaman yang sangat berharga, 
            <br />
            Aku berterima kasih karena kamu adalah orang pertama yang ngasih gift birthday ke aku, Dan cuman kamu bahkan orang terdekat aku aja gaada yang ngasih gift birthday ke aku saat itu, <br />
            <br /> 
            Dan, Aku minta maaf karena ga bisa menjadi dream boyfriend kamu, aku cuman seseorang yang bisa ngasih rasa cinta yang tulus, seseorang yang bisa nunjukkin perasaannya aja, <br />
            <br />
            Maaf kalo aku ga bisa ngasih feedback yang kamu inginkan.
          </p>
          
          <p>
            Selama ini aku cuman bisa bermimpi bisa menjadi seseorang yang paling kamu pedulikan, dibutuhkan, dan dicintai sama kamu, <br />    
            <br />
            Aku cuman bisa bikin cerita itu di dalam pikiran, Dan alam bawah sadar aku, Aku berharap bisa menjadi seseorang yang kamu butuhkan ketika kamu sedang kesulitan <br />
            <br />
            Aku berharap bisa menjadi Tempat bercerita kamu ketika kamu ngerasa sedih, <br />
            <br />
            Aku berharap bisa menjadi Rumah disaat kamu kehilangan Rumah, <br />
            <br />
            Aku berharap bisa menjadi seseorang yang bisa ngasih kamu kebahagiaan disaat kebahagiaan itu belum datang ke diri kamu, <br />
            <br />
            Aku berharap bisa memberi pelukan ketika kamu merasa kesepian, <br />
          </p>

          <p>
            Banyak hal yang aku ingin sampaikan ke kamu, Tapi aku ga bisa, Karena aku ngerasa ga ada gunanya lagi, Dan aku ngerasa udah ga ada harapan lagi buat kita, <br />
            <br />
            Dalam proses melupakanmu ini aku juga masih menunggu kamu,<br />
            <br />
            Aku masih belum menjadi orang terdekat kamu, Mungkin kamu yang sekarang pasti lebih private, Bahkan aku gatau selera musik kamu kayak gimana, selera makanan, dan lain-lainnya aku gatau,<br />
            <br />
            Aku berharap seseorang atau laki-laki beruntung yang bisa dapetin hati kamu bisa tau semua sisi kamu, bisa bahagia sama kamu <br />
            <br />
            Dan bisa jadi orang yang kamu butuhkan, <br />
            <br />
            Terimakasih Dan Maaf untuk semua nya.
          </p>
          
          <p className="signature">
            Untuk Dara, Fachra, Icung, Amel, Pakrah<br />
            Dari Pengecut.
          </p>
        </div>
        
        <div className="wattpad-card-footer">
          <div className="wattpad-card-decoration"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default LastMemory;