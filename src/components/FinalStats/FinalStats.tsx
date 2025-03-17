'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './FinalStats.module.scss';

const stats = [
  { value: '7000+', text: 'Affiliates' },
  { value: '10+', text: 'Affiliates' },
  { value: '13+', text: 'Own igaming brands' },
  { value: '19 000 000+', text: "FTD'S" },
  { value: '100 000 000+', text: 'USD Earn our partners' },
];

const FinalStats = () => {
  return (
    <section className={styles.finalStats}>
      <div className={styles.finalStats__container}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className={styles.finalStats__card}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5, ease: 'easeOut' }}
          >
            <div className={styles.finalStats__content}>
              <motion.p
                className={styles.finalStats__value}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                {stat.value}
              </motion.p>

              <p className={styles.finalStats__text}>{stat.text}</p>

              <Image
                src="/arrow.svg"
                alt="Arrow"
                width={20}
                height={20}
                className={styles.finalStats__arrow}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FinalStats;
