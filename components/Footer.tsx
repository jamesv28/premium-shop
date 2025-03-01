import { APP_NAME } from "@/lib/globals";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        {currentYear} {APP_NAME} all rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
