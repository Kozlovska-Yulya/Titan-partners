import React from 'react';
import Image from 'next/image';
import styles from './AdvantagesImage2.module.scss';

const AdvantagesImage2 = () => {
  return (
    <Image
      src="/advantages2.svg"
      alt="Second Advantages Image"
      width={388}
      height={247}
      className={styles.advantagesImage2__img}
      priority
    />
  );
};

export default AdvantagesImage2;
