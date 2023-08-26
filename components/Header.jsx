"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const pathName = usePathname();

  return (
    <nav class="w-full pb-8 pt-3 top-0">
      {/** Desktop Navigation */}
      <div class="sm:flex hidden justify-center items-center">
        <div class="flex justify-center items-center p-10 gap-[8vw]">
          <Link
            href="/"
            className={pathName == "/" ? "black_underline" : "black_btn"}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className={pathName == "/about" ? "black_underline" : "black_btn"}
          >
            ABOUT
          </Link>
          <Link
            href="/resume"
            className={pathName == "/resume" ? "black_underline" : "black_btn"}
          >
            RESUME
          </Link>
          <Link
            href="/gallery"
            className={pathName == "/gallery" ? "black_underline" : "black_btn"}
          >
            GALLERY
          </Link>
          <Link
            href="/press"
            className={pathName == "/press" ? "black_underline" : "black_btn"}
          >
            PRESS
          </Link>
          <Link
            href="/contact"
            className={pathName == "/contact" ? "black_underline" : "black_btn"}
          >
            CONTACT
          </Link>
        </div>
      </div>

      {/** Mobile Navigation */}
      <div class="sm:hidden flex absolute p-5 top-0 right-0">
        <div class="flex">
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
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
                href="/about"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                About
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
