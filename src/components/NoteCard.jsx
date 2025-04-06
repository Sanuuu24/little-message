import React, { useState } from 'react';
import { motion } from 'framer-motion';

function NoteCard({ note }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };
  
  return (
    <motion.div 
      className="wattpad-card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(255, 255, 255, 0.15)" }}
    >
      <div className="wattpad-card-header">
        <h3 className="wattpad-card-title">{note.title}</h3>
        <p className="wattpad-card-date">{note.date}</p>
      </div>
      
      <div className="wattpad-card-content">
        <p>{note.content}</p>
        {note.image && (
          <div className="wattpad-card-image-container">
            <img src={note.image} alt={note.title} className="wattpad-card-image" />
          </div>
        )}
      </div>
      
      <div className="wattpad-card-footer">
        <div className="wattpad-card-decoration">✨</div>
      </div>
    </motion.div>
  );
}

export default NoteCard;