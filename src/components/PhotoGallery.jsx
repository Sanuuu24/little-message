import React from 'react';
import { motion } from 'framer-motion';

function PhotoGallery({ photos }) {
  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => (
        <motion.div 
          key={photo.id} 
          className="photo-item"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 * index, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={photo.src} alt={photo.alt} />
          <p className="photo-caption">{photo.caption}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default PhotoGallery;