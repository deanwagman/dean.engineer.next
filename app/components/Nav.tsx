"use client";

import { useState, useEffect } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { orbitron } from "../fonts";
import navStyles from "../nav.module.css";

import deanLogo from "./dean-logo.png";

const breakPoint = 1200;

export const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const onClick = () => setIsExpanded(!isExpanded);

  const navSpringProps = useSpring({
    transform: `translateX(${isExpanded ? 0 : -100}%)`,
    config: { ...config.gentle, clamp: true },
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > breakPoint) {
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

      <animated.nav
        className={classNames(navStyles.container)}
        style={navSpringProps}
      >
        <Link href="/" className={navStyles.logoContainer}>
          <Image src={deanLogo} alt="Logo" className={navStyles.logo} />
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
          <li className={navStyles.item}>
            <Link href="/art" className={classNames(orbitron.className)}>
              Art
            </Link>
          </li>
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
      </animated.nav>
    </>
  );
};
