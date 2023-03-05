"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { orbitron } from "../fonts";
import navStyles from "../nav.module.css";

export const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const onClick = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isExpanded]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();
  }, []);

  return (
    <>
      <svg
        className={classNames(
          navStyles.menuIcon,
          isExpanded && navStyles.menuIconActive
        )}
        viewBox="0 0 100 80"
        width="40"
        height="40"
        onClick={onClick}
      >
        <rect width="100" height="20"></rect>
        <rect y="30" width="100" height="20"></rect>
        <rect y="60" width="100" height="20"></rect>
      </svg>

      <nav
        className={classNames(
          navStyles.container,
          isExpanded && navStyles.expanded
        )}
      >
        <Link href="/" className={navStyles.logoContainer}>
          <img src="/dean-logo.png" alt="Logo" className={navStyles.logo} />
        </Link>

        <ul className={navStyles.list}>
          <li className={navStyles.item}>
            <Link href="/about" className={classNames(orbitron.className)}>
              About
            </Link>
          </li>
          <li className={navStyles.item}>
            <Link href="/resume" className={classNames(orbitron.className)}>
              Resume
            </Link>
          </li>
          {/* Coming Soon */}
          {/* <li className={navStyles.item}>
          <Link href="/art" className={classNames(orbitron.className)}>
            Art
          </Link>
        </li> */}
          <li className={navStyles.item}>
            <Link href="/blog" className={classNames(orbitron.className)}>
              Blog
            </Link>
          </li>
          <li className={navStyles.item}>
            <Link href="/contact" className={classNames(orbitron.className)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
