import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-4 text-center">
      <div className="mb-2">Follow Us</div>
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://www.facebook.com/profile.php?id=61552741977257"
          className="hover:text-gray-400"
        >
          Facebook
        </a>
        <a href="#" className="hover:text-gray-400">Twitter</a>
        <a
          href="https://www.instagram.com/bibek__23/"
          className="hover:text-gray-400"
        >
          Instagram
        </a>
      </div>
      <div>&copy; 2024 GizmoHub. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
