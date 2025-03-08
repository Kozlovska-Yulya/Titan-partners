import React from 'react';
import styles from './SocialIcons.module.scss';
import Image from 'next/image';

const socialLinks = [
  { icon: '/instagram.svg', alt: 'Instagram', link: '#' },
  { icon: '/linkedin.svg', alt: 'LinkedIn', link: '#' },
  { icon: '/telegram1.svg', alt: 'Telegram', link: '#' },
];

const SocialIcons: React.FC = () => {
  return (
    <div className={styles.socialIcons}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcons__item}
        >
          <div className={styles.socialIcons__circle}>
            <Image src={social.icon} alt={social.alt} width={40} height={40} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
