import React from 'react';

function Footer() {
  return (
    <div className="flex justify-center">
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <aside className="items-center grid-flow-col">
          <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current">
            <path d="M22.672 15.226l-2.432.811..."></path>
          </svg>
          <p>Copyright © 2023 - All rights reserved</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
