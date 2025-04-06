import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Heart, Send, Mail } from 'lucide-react';
import './IntroPage.css';

const IntroPage = ({ onEnter }) => {
  return (
    <motion.div 
      className="intro-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="intro-content">
        <motion.div 
          className="icon-container"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="icon-circle">
            <Mail className="icon-primary" size={40} />
          </div>
          <div className="icon-circle icon-offset-1">
            <MessageCircle className="icon-secondary" size={32} />
          </div>
          <div className="icon-circle icon-offset-2">
            <Heart className="icon-accent" size={24} />
          </div>
          <div className="icon-circle icon-offset-3">
            <Send className="icon-secondary" size={28} />
          </div>
        </motion.div>
        
        <motion.h1 
          className="intro-title"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          A Little Message 
        </motion.h1>
        
        <motion.p 
          className="intro-subtitle"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          for :
          d__a.r_a,
          bubblefiest,
          ffrraml,
          stxrypearl.
        </motion.p>
        
        <motion.button 
          className="intro-button"
          onClick={onEnter}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Masuk
        </motion.button>
      </div>
    </motion.div>
  );
};

export default IntroPage;