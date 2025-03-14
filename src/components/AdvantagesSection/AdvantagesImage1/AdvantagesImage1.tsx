import React from 'react';
import Image from 'next/image';
import styles from './AdvantagesImage1.module.scss';

const AdvantagesImage = () => {
  return (
    <Image
      src="/advantages1.svg"
      alt="For Affiliates"
      width={323}
      height={260}
      className={styles.advantagesImage__img}
      priority
    />
  );
};

export default AdvantagesImage;
