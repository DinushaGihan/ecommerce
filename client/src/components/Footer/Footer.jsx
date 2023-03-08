import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-light mt-auto py-2" style={{ position: 'fixed', bottom: 0, width: '100%', align: 'center' }}>
      <div className="container text-center">
        <span className="text-muted">Awakaza Delivery © 2023 All Rights Reserved.
          <br />
          Developed by <a href='https://awakaza.com/' target="blank">Team Awakaza</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
