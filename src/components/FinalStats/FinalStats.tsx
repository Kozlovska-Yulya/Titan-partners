'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './FinalStats.module.scss';

const statsTop = [
  { value: '7000+', text: 'Affiliates', image: '/7000+.png' },
  { value: '10+', text: 'Years iGaming experience', image: '/10+.png' },
  { value: '13+', text: 'Own iGaming brands', image: '/13+.png' },
];

const statsBottom = [
  { value: '19 000 000+', text: "FTD'S", image: '/19000000+.png' },
  {
    value: '100 000 000+',
    text: 'USD Earn our partners',
    image: '/100000000+.png',
  },
];

const FinalStats = () => {
  return (
    <section className={styles.finalStats}>
      <div className={styles.finalStats__top}>
        {statsTop.map((stat, index) => (
          <motion.div
            key={index}
            className={styles.finalStats__card}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }}
          >
            <Image
              src={stat.image}
              alt={`Stat ${index + 1}`}
              width={320}
              height={180}
              className={styles.finalStats__background}
            />
            <div className={styles.finalStats__content}>
              <motion.p className={styles.finalStats__value}>
                {stat.value}
              </motion.p>
              <p className={styles.finalStats__text}>{stat.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.finalStats__bottom}>
        {statsBottom.map((stat, index) => (
          <motion.div
            key={index}
            className={`${styles.finalStats__card} ${styles.large}`}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }}
          >
            <Image
              src={stat.image}
              alt={`Stat ${index + 1}`}
              width={700}
              height={180}
              className={styles.finalStats__background}
            />
            <div className={styles.finalStats__content}>
              <motion.p className={styles.finalStats__value}>
                {stat.value}
              </motion.p>
              <p className={styles.finalStats__text}>{stat.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FinalStats;
