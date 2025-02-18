import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-500 p-4">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full flex flex-row items-center justify-around flex-wrap">
          
          <div className="min-w-[200px] h-auto flex flex-col items-center">
            <div className="font-medium text-sm">Community</div>
            <p className="flex items-center my-3">
              <a
                href="https://www.youtube.com/@CodingWithMatin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaYoutube className="opacity-70" />
                <span className="text-sm ml-2">Youtube</span>
              </a>
            </p>
            <p className="flex items-center my-3">
              <a
                href="https://github.com/MatinDeevv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <RxGithubLogo className="opacity-70" />
                <span className="text-sm ml-2">Github</span>
              </a>
            </p>
          </div>
          
          <div className="min-w-[200px] h-auto flex flex-col items-center">
            <div className="font-medium text-sm">Social Media</div>
            <p className="flex items-center my-3">
              <a
                href="https://www.instagram.com/matindeev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <RxInstagramLogo className="opacity-70" />
                <span className="text-sm ml-2">Instagram</span>
              </a>
            </p>
            <p className="flex items-center my-3">
              <a
                href="https://x.com/Matin_Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <RxTwitterLogo className="opacity-70" />
                <span className="text-sm ml-2">Twitter</span>
              </a>
            </p>
          </div>
          
          <div className="min-w-[200px] h-auto flex flex-col items-center">
            <div className="font-medium text-sm">About</div>
            <p className="flex items-center my-3">
              <a
                className="flex items-center"
              >
                <span className="text-sm ml-2">Become Sponsor</span>
              </a>
            </p>
            <p className="flex items-center my-3">
              <a href="mailto:matindeev@gmail.com" className="flex items-center">
                <span className="text-sm ml-2">matindeev@gmail.com</span>
              </a>
            </p>
          </div>
          
        </div>
        <div className="mb-5 text-sm text-center">
          &copy; MatinDev 2024 Inc. All rights reserved. If you copy then fudge you.
        </div>
      </div>
    </div>
  );
};

export default Footer;
