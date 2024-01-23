import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import styles from 'styles/components/button.module.scss';

const ButtonSlot = (props) => {
  const dataPassed  = props.dataSubmited;
  const [dataSubmited, setDataSubmited] = useState(false);

  useEffect(() => {
    setDataSubmited(dataPassed);
  }, [dataPassed]);
  return (
    <div>
      {
        props.slot1 && 
        <div className={styles['button-1']}>
            <Link className={styles['arrow-button']} href="/signup" as="/signup/index.html">{props.slot1}</Link>
        </div>
      }
      {
        props.slot2 && 
          <div className={`${styles['button-1']} ${styles['centerized-button']}`}>
            <Link className={styles['arrow-button']} href="/signup"> {props.slot2}</Link>
        </div>
      }
      {
        props.slot3 && 
        <div className={styles['button-1']}>
          { dataSubmited 
          ? <><div className={styles['arrow-button--no-arrow']}><span className={styles['spinner']}/></div>  </>
          : <button className={styles['arrow-button']}>{props.slot3}</button>}
          
        </div>
      }
      {
        props.slot4 && 
        <div className={styles['button-1']}>
            <Link className={styles['arrow-button']} href="/" as="/index.html">{props.slot4}</Link>
        </div>
      }
    </div>
  );
};

export default ButtonSlot;