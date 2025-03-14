'use client';
import React from 'react';
import Image from 'next/image';
import styles from './Agency.module.scss';

const agencyFeatures = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seismod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
];

const Agency = () => {
  return (
    <section id="seo-agency" className={styles.agency}>
      <h3 className={styles.agency__title}>Seo Agency</h3>
      <ul className={styles.agency__list}>
        {agencyFeatures.map((feature, index) => (
          <li key={index} className={styles.agency__item}>
            <Image
              src="/plus-icon.svg"
              alt="Plus Icon"
              width={50}
              height={50}
              className={styles.agency__icon}
            />
            <p className={styles.agency__text}>{feature}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Agency;
