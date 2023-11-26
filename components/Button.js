import React from 'react';
import Link from 'next/link';

import styles from 'styles/components/button.module.scss';

const ButtonSlot = ({ slot1, slot2 }) => {
  return (
    <div>
      {slot1 && 
      <div className={styles['button-1']}>
          <Link className={styles['arrow-button']} href="/signup" as="/signup.html"> {slot1}</Link>
      </div>
      }
      {slot2 && 
        <div className={`${styles['button-1']} ${styles['centerized-button']}`}>
        <Link className={styles['arrow-button']} href="/signup"> {slot2}</Link>
      </div>
      }
    </div>
  );
};

export default ButtonSlot;