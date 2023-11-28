import React from 'react';
import Link from 'next/link';

import styles from 'styles/components/button.module.scss';

const ButtonSlot = ({ slot1, slot2, slot3, slot4 }) => {
  return (
    <div>
      {
        slot1 && 
        <div className={styles['button-1']}>
            <Link className={styles['arrow-button']} href="/signup" as="/signup/index.html">{slot1}</Link>
        </div>
      }
      {
        slot2 && 
          <div className={`${styles['button-1']} ${styles['centerized-button']}`}>
            <Link className={styles['arrow-button']} href="/signup"> {slot2}</Link>
        </div>
      }
      {
        slot3 && 
        <div className={styles['button-1']}>
            <button className={styles['arrow-button']}>{slot3}</button>
        </div>
      }
      {
        slot4 && 
        <div className={styles['button-1']}>
            <Link className={styles['arrow-button']} href="/" as="/index.html">{slot4}</Link>
        </div>
      }
    </div>
  );
};

export default ButtonSlot;