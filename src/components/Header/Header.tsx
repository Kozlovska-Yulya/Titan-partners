'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__navbar}>
        <Link
          href="https://titanpartners.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/logo.svg"
            alt="Titan Partners Logo"
            width={204}
            height={20}
            className={styles.header__logo}
          />
        </Link>
        <button className={styles.header__burgerButton} onClick={toggleMenu}>
          <Image
            src="/burger.svg"
            alt="Menu"
            width={25}
            height={16}
            className={styles.header__burgerMenu}
          />
        </button>
      </div>

      {isOpen && (
        <div className={styles.header__menu}>
          <button className={styles.header__menuClose} onClick={toggleMenu}>
            <Image
              src="/menu-close.svg"
              alt="Close Menu"
              width={22}
              height={22}
            />
          </button>

          <nav className={styles.header__menuContent}>
            <a
              href="#for-affiliates"
              className={styles.header__menuLink}
              onClick={toggleMenu}
            >
              Affiliates
            </a>
            <a
              href="#for-advertisers"
              className={styles.header__menuLink}
              onClick={toggleMenu}
            >
              Advertisers
            </a>
            <div className={styles.header__menuContact}>
              <Image
                src="/telegram.svg"
                alt="Telegram"
                width={20}
                height={20}
              />
              <a
                href="https://t.me/Titan_partners"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.header__menuLink}
              >
                Contact Us
              </a>
            </div>
            <div className={styles.header__menuButtons}>
              <a
                href="https://panel.titanpartners.io/signup/affiliate"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.header__signUp}
              >
                Sign Up
              </a>
              <a
                href="https://panel.titanpartners.io/login"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.header__login}
              >
                Login
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
