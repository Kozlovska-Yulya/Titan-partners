import React from 'react';
import Image from 'next/image';
import styles from './AdvantagesImage1.module.scss';

const AdvantagesImage = () => {
  return (
    <div className={styles.advantagesImage}>
      <Image
        src="/advantages1.svg"
        alt="For Affiliates"
        width={323}
        height={260}
        className={styles.advantagesImage__img}
        priority
      />
    </div>
  );
};

export default AdvantagesImage;
