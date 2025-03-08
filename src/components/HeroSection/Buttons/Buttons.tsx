import React from 'react';
import styles from './Buttons.module.scss';

const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <button
        className={
          styles.buttons__button + ' ' + styles['buttons__button--affiliate']
        }
      >
        For Affiliate
      </button>
      <button
        className={
          styles.buttons__button + ' ' + styles['buttons__button--advertiser']
        }
      >
        For Advertiser
      </button>
    </div>
  );
};

export default Buttons;
