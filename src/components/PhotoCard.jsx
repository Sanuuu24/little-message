import React from 'react';
import { motion } from 'framer-motion';

function PhotoCard({ photo }) {
  return (
    <motion.div 
      className="wattpad-photo-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(255, 255, 255, 0.15)" }}
    >
      <div className="wattpad-photo-image-container">
        <img src={photo.src} alt={photo.alt} />
      </div>
      
      <div className="wattpad-photo-content">
        <h3>{photo.alt}</h3>
        <p className="wattpad-photo-caption">{photo.caption}</p>
        {photo.story && (
          <div className="wattpad-photo-story">
            <p>{photo.story}</p>
          </div>
        )}
      </div>
      
      <div className="wattpad-photo-footer">
        <div className="wattpad-photo-date">{photo.date || "Kenangan Indah"}</div>
        <div className="wattpad-photo-decoration">📸</div>
      </div>
    </motion.div>
  );
}

export default PhotoCard;