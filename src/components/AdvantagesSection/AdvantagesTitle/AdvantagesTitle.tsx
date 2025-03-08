import React from 'react';
import styles from './AdvantagesTitle.module.scss';

const AdvantagesTitle = () => {
  return (
    <h2 className={styles.advantagesTitle}>
      Our <span className={styles.advantagesTitle__highlight}>advantages</span>
    </h2>
  );
};

export default AdvantagesTitle;
