'use client';
import React from 'react';
import Image from 'next/image';
import styles from './MediaBuying.module.scss';

const features = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seismod tempor incididunt ut labore et dolore magna aliqua.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
];

const MediaBuying = () => {
  return (
    <div id="own-media-buying" className={styles.mediaBuying}>
      <Image
        src="/media-buying.svg"
        alt="Media Buying"
        width={824}
        height={343}
        className={styles.mediaBuying__image}
        priority
      />
      <h3 className={styles.mediaBuying__title}>Own media buying</h3>
      <ul className={styles.mediaBuying__list}>
        {features.map((feature, index) => (
          <li key={index} className={styles.mediaBuying__item}>
            <Image
              src="/plus-icon.svg"
              alt="Plus Icon"
              width={50}
              height={50}
              className={styles.mediaBuying__icon}
              priority
            />
            <p className={styles.mediaBuying__text}>{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaBuying;
