'use client';
import React from 'react';
import styles from './Buttons.module.scss';

const Buttons = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.buttons}>
      <button
        className={styles.buttons__affiliate}
        onClick={() => scrollToSection('for-affiliates')}
      >
        For Affiliate
      </button>
      <button
        className={styles.buttons__advertiser}
        onClick={() => scrollToSection('for-advertisers')}
      >
        For Advertiser
      </button>
    </div>
  );
};

export default Buttons;
