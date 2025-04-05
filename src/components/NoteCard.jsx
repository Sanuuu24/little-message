import React, { useState } from 'react';
import { motion } from 'framer-motion';

function NoteCard({ note }) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div className="note-card-container" onClick={handleClick}>
      <motion.div 
        className={`note-card ${isFlipped ? 'flipped' : ''}`}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="note-front">
          <h3>{note.title}</h3>
          <p className="note-date">{note.date}</p>
          <div className="card-decoration">✨</div>
        </div>
        <div className="note-back">
          <p>{note.content}</p>
          <div className="card-decoration-back"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default NoteCard;