import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="site-header">
      <motion.div
        className="header-content"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="logo">
          <img src="/book.svg" alt="Logo Buku" className="book-icon" />
          <h1>Little Message.</h1>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;