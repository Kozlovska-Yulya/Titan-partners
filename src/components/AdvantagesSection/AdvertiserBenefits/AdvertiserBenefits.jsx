import React from 'react';
import Image from 'next/image';
import styles from './AdvertiserBenefits.module.scss';

const benefits = [
  { icon: '/traffic.svg', text: 'High quality traffic' },
  { icon: '/buying.svg', text: 'Own media buying' },
  { icon: '/anti-fraud.svg', text: 'Powerful anti-fraud system' },
  { icon: '/hr.svg', text: 'HR agency' },
  { icon: '/igaming.svg', text: 'iGaming platform' },
  { icon: '/direct.svg', text: 'Direct integration' },
  { icon: '/payback.svg', text: 'Predictive payback model' },
  { icon: '/consulting.svg', text: 'Consulting' },
];

const AdvertiserBenefits = () => {
  return (
    <div className={styles.advertiserBenefits}>
      <h3 className={styles.advertiserBenefits__title}>For Advertisers</h3>
      <ul className={styles.advertiserBenefits__list}>
        {benefits.map((benefit, index) => (
          <li key={index} className={styles.advertiserBenefits__item}>
            <Image
              src={benefit.icon}
              alt=""
              width={25}
              height={25}
              className={styles.advertiserBenefits__icon}
            />
            <span className={styles.advertiserBenefits__text}>
              {benefit.text}
            </span>
            <Image
              src="/arrow.svg"
              alt="Arrow"
              width={14}
              height={14}
              className={styles.advertiserBenefits__arrow}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdvertiserBenefits;
