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
    <section id="own-media-buying" className={styles.mediaBuying}>
      <div className={styles.mediaBuying__imageWrapper}>
        <Image
          src="/mediabuy-mobile.svg"
          alt="Media Buying"
          width={824}
          height={343}
          className={`${styles.mediaBuying__image} ${styles.mobileImage}`}
          priority
        />

        <Image
          src="/mediabuy-desktop.svg"
          alt="Media Buying"
          width={1940}
          height={800}
          className={`${styles.mediaBuying__image} ${styles.desktopImage}`}
          priority
        />

        <Image
          src="/decor-small.svg"
          alt="Decoration"
          width={48}
          height={53}
          className={styles.mediaBuying__decorSmall}
          priority
        />

        <Image
          src="/decor-big.svg"
          alt="Big Decoration"
          width={140}
          height={105}
          className={styles.mediaBuying__decorBig}
          priority
        />
      </div>

      <div className={styles.mediaBuying__content}>
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
    </section>
  );
};

export default MediaBuying;
