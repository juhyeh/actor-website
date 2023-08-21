"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      {/** Desktop Navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/" className="black_btn">
            HOME
          </Link>
          <Link href="/aboutme" className="black_btn">
            ABOUT ME
          </Link>
          <Link href="/resume" className="black_btn">
            RESUME
          </Link>
          <Link href="/gallery" className="black_btn">
            GALLERY
          </Link>
          <Link href="/press" className="black_btn">
            PRESS
          </Link>
          <Link href="/contact" className="black_btn">
            CONTACT
          </Link>
        </div>
      </div>

      {/** Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image
            src="/next.svg"
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
            onClick={() => setToggleDropdown((prev) => !prev)}
          />
          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href="/"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Home
              </Link>
              <Link
                href="/aboutme"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                About Me
              </Link>
              <Link
                href="/resume"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Resume
              </Link>
              <Link
                href="/gallery"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Gallery
              </Link>
              <Link
                href="/press"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Press
              </Link>
              <Link
                href="/contact"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
