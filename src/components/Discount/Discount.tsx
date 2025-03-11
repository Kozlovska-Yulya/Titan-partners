'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Discount.module.scss';

const discountData = [
  { partner: 'IndiGo', discount: '7%', link: '#' },
  { partner: 'IndiGo', discount: '50%', link: '#' },
  { partner: 'IndiGo', discount: '20%', link: '#' },
  { partner: 'IndiGo', discount: '20%', link: '#' },
  { partner: 'IndiGo', discount: '100%', link: '#' },
];

const extendedData = [...discountData, ...discountData];

const Discount = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === discountData.length ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.discount}>
      <h3 className={styles.discount__title}>
        <span className={styles.discount__highlight}>Discount</span> from our
        partners
      </h3>

      <div className={styles.discount__carousel}>
        <motion.div
          className={styles.discount__track}
          animate={{ x: `-${currentIndex * 100}px` }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {extendedData.map((item, index) => (
            <div key={index} className={styles.discount__card}>
              <Image
                src="/mask-group.svg"
                alt="Partner Logo"
                width={72}
                height={20}
                className={styles.discount__logo}
              />
              <p className={styles.discount__percent}>{item.discount}</p>
              <a href={item.link} className={styles.discount__link}>
                get a bonus
                <Image
                  src="/discount-arrow.svg"
                  alt="Arrow"
                  width={8}
                  height={8}
                  className={styles.discount__arrow}
                />
              </a>
            </div>
          ))}
        </motion.div>
      </div>

      <div className={styles.discount__dots}>
        {discountData.map((_, index) => (
          <span
            key={index}
            className={`${styles.discount__dot} ${index === currentIndex ? styles.active : ''}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Discount;
