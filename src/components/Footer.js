import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4 mt-auto">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} RBAC System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
