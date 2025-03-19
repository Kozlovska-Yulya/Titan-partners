'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Discount.module.scss';

const discountData = [
  { percentage: '7%', link: '#', image: '/7-percent-card.png' },
  { percentage: '50%', link: '#', image: '/50-percent-card.png' },
  { percentage: '20%', link: '#', image: '/20-percent-card.png' },
  { percentage: '20%', link: '#', image: '/20-percent-card4.png' },
  { percentage: '100%', link: '#', image: '/100-percent-card.png' },
];

const Discount = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const totalSlides = discountData.length;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isDesktop) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isDesktop]);

  return (
    <section className={styles.discounts}>
      <h2 className={styles.discounts__title}>
        <span>Discount</span> from our partners
      </h2>

      <div
        className={
          isDesktop ? styles.discounts__grid : styles.discounts__carousel
        }
      >
        <div
          className={styles.discounts__track}
          style={
            isDesktop
              ? {}
              : { transform: `translateX(-${currentIndex * 100}%)` }
          }
        >
          {discountData.map((discount, index) => (
            <div key={index} className={styles.discounts__card}>
              <Image
                src={discount.image}
                alt="Discount Card"
                width={250}
                height={350}
                className={styles.discounts__background}
              />

              <div className={styles.discounts__content}>
                <Image
                  src="/mask-group.svg"
                  alt="Partner Logo"
                  width={92}
                  height={25}
                  className={styles.discounts__partner}
                />
                <p className={styles.discounts__percentage}>
                  {discount.percentage}
                </p>
                <a href={discount.link} className={styles.discounts__link}>
                  get a bonus
                  <Image
                    src="/discount-arrow.svg"
                    alt="Arrow"
                    width={8}
                    height={8}
                    className={styles.discounts__arrow}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!isDesktop && (
        <div className={styles.discounts__dots}>
          {discountData.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${styles.discounts__dot} ${index === currentIndex ? styles.active : ''}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Discount;
