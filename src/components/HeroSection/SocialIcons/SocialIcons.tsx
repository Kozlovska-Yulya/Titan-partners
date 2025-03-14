'use client';
import React from 'react';
import Image from 'next/image';
import styles from './SocialIcons.module.scss';

const socialLinks = [
  {
    icon: '/instagram.svg',
    alt: 'Instagram',
    href: 'https://titanpartners.io/',
  },
  { icon: '/linkedin.svg', alt: 'LinkedIn', href: 'https://titanpartners.io/' },
  {
    icon: '/telegram1.svg',
    alt: 'Telegram',
    href: ' https://t.me//titanpartners',
  },
];

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcons__link}
        >
          <Image src={social.icon} alt={social.alt} width={24} height={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
