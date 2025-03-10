'use client';
import React from 'react';
import Image from 'next/image';
import styles from './Stats.module.scss';

const statsData = [
  { value: '5000+', text: 'websites created' },
  { value: '30+', text: 'amount of geodata' },
  { value: '20 000+', text: 'attracted players' },
];

const Stats = () => {
  return (
    <div className={styles.stats}>
      <div className={styles.stats__decorations}>
        <Image
          src="/decor-left.svg"
          alt="Decor Left"
          width={80}
          height={80}
          className={styles.stats__decorLeft}
          priority
        />
        <Image
          src="/decor-right.svg"
          alt="Decor Right"
          width={80}
          height={80}
          className={styles.stats__decorRight}
          priority
        />
      </div>

      {statsData.map((stat, index) => (
        <div key={index} className={styles.stats__item}>
          <div className={styles.stats__content}>
            <span className={styles.stats__value}>{stat.value}</span>
            <p className={styles.stats__text}>{stat.text}</p>
          </div>
          <Image
            src="/arrow.svg"
            alt="Arrow"
            width={14}
            height={14}
            className={styles.stats__arrow}
          />
        </div>
      ))}
    </div>
  );
};

export default Stats;
