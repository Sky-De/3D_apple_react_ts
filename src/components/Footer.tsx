import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <>
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="footer_link">Find an Apple Store </span>
            or <span className="footer_link">other retailer </span> near you.
          </p>

          <p className="font-semibold text-gray text-xs">
            Or call/text/telegram/whatsapp +98912 94 950 94
          </p>
        </>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright @ {new Date().getFullYear()} Apple Inc. All rights
            reserved.
          </p>
          <div className="flex gap-2">
            {footerLinks.map((link, i) => (
              <p key={link} className="footer_link">
                {link}{" "}
                {i !== footerLinks.length - 1 && (
                  <span className="text-gray ml-1"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
