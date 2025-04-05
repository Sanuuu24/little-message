import React from 'react';

function Footer() {
  return (
    <footer className="site-footer">
      <p>For Fachra Amelda</p>
      <p className="copyright">© {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;