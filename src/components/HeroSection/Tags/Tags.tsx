import React from 'react';
import styles from './Tags.module.scss';
import Image from 'next/image';

interface Tag {
  icon: string;
  label: string;
}

const tags: Tag[] = [
  { icon: '/network.svg', label: 'CPA network' },
  { icon: '/igaming.svg', label: 'iGaming Platform' },
  { icon: '/consulting.svg', label: 'Consulting' },
  { icon: '/rocket.svg', label: 'Media Buying Agency' },
  { icon: '/app.svg', label: 'Apps' },
  { icon: '/seo.svg', label: 'SEO Agency' },
];

const Tags: React.FC = () => {
  return (
    <div className={styles.tags}>
      {tags.map((tag, index) => (
        <div key={index} className={styles['tags__item']}>
          <Image
            src={tag.icon}
            alt={tag.label}
            width={20}
            height={20}
            className={styles['tags__icon']}
          />
          <span className={styles['tags__label']}>{tag.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Tags;
