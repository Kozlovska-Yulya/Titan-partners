'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Partners.module.scss';

const baseLogos = [
  '/indigo.svg',
  '/goto.svg',
  '/indigo.svg',
  '/goto.svg',
  '/indigo.svg',
  '/goto.svg',
  '/indigo.svg',
];

const Partners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = baseLogos.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.partners}>
      <h2 className={styles.partners__title}>Partners</h2>
      <div className={styles.partners__carousel}>
        <div
          className={styles.partners__track}
          style={{
            transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
          }}
        >
          {baseLogos.map((logo, index) => (
            <div key={index} className={styles.partners__item}>
              <Image
                src={logo}
                alt="Partner logo"
                width={97}
                height={26}
                className={styles.partners__logo}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.partners__dots}>
        {baseLogos.map((_, index) => (
          <span
            key={index}
            className={`${styles.partners__dot} ${index === currentIndex ? styles.active : ''}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Partners;
