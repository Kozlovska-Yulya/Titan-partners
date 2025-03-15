import React from 'react';
import Image from 'next/image';
import styles from './Tags.module.scss';

interface Tag {
  icon: string;
  label: string;
  href?: string;
}

const tags: Tag[] = [
  {
    icon: '/network.svg',
    label: 'CPA network',
    href: 'https://titanpartners.io/',
  },

  {
    icon: '/igaming.svg',
    label: 'iGaming Platform',
    href: 'https://titanpartners.io/',
  },

  {
    icon: '/consulting.svg',
    label: 'Consulting',
    href: 'https://titanpartners.io/',
  },

  {
    icon: '/rocket.svg',
    label: 'Media Buying Agency',
    href: '#own-media-buying',
  },

  { icon: '/app.svg', label: 'Apps', href: 'https://titanpartners.io/' },

  { icon: '/seo.svg', label: 'SEO Agency', href: '#seo-agency' },
];

const Tags: React.FC = () => {
  return (
    <div className={styles.tags}>
      {tags.map((tag, index) =>
        tag.href ? (
          <a key={index} href={tag.href} className={styles.tags__item}>
            <Image
              src={tag.icon}
              alt={tag.label}
              width={20}
              height={20}
              className={styles.tags__icon}
            />
            <span>{tag.label}</span>
          </a>
        ) : (
          <div key={index} className={styles.tags__item}>
            <Image
              src={tag.icon}
              alt={tag.label}
              width={20}
              height={20}
              className={styles.tags__icon}
            />
            <span>{tag.label}</span>
          </div>
        )
      )}
    </div>
  );
};

export default Tags;
