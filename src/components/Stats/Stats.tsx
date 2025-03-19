'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Stats.module.scss';

const statsData = [
  { value: '5000+', text: 'websites created', image: '/5000+.png' },
  { value: '30+', text: 'amount of geodata', image: '/30+.png' },
  { value: '20 000+', text: 'attracted players', image: '/20000+.png' },
];

const Stats = () => {
  return (
    <div className={styles.stats}>
      <Image
        src="/decor-left.svg"
        alt="Decor Left"
        width={100}
        height={100}
        className={styles.stats__decorLeft}
        priority
      />
      <Image
        src="/decor-right.svg"
        alt="Decor Right"
        width={100}
        height={100}
        className={styles.stats__decorRight}
        priority
      />
      <div className={styles.stats__container}>
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            className={styles.stats__item}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }}
          >
            <Image
              src={stat.image}
              alt={`Card ${index + 1}`}
              fill
              className={styles.stats__background}
            />

            <div className={styles.stats__content}>
              <motion.span
                className={styles.stats__value}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {stat.value}
              </motion.span>
              <p className={styles.stats__text}>{stat.text}</p>
            </div>

            <Image
              src="/arrow.svg"
              alt="Arrow"
              width={14}
              height={14}
              className={styles.stats__arrow}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
