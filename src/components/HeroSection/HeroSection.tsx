import React from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSection__imageContainer}>
        <Image
          src="/titanium.svg"
          alt="Titanium Element"
          width={331}
          height={279}
          className={styles.heroSection__image}
        />
      </div>
      <div className={styles.heroSection__content}>
        <h1 className={styles.heroSection__title}>TITAN GROUP</h1>
        <p className={styles.heroSection__subtitle}>
          Ecosystem for <span>iGaming</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
