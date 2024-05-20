import React, { useState, useEffect } from "react";
import Link from "next/link";
import PropTypes from 'prop-types';

import styles from "styles/components/button.module.scss";

const ButtonSlot = ({slot1, slot2, slot3, slot4, dataPassed}) => {
  const [dataSubmited, setDataSubmited] = useState(false);

  useEffect(() => {
    setDataSubmited(dataPassed);
  }, [dataPassed]);
  return (
    <div>
      {slot1 && (
        <div className={styles["button-1"]}>
          <Link
            className={styles["arrow-button"]}
            href="/signup"
            as="/signup/index.html"
          >
            {slot1}
          </Link>
        </div>
      )}
      {slot2 && (
        <div className={`${styles["button-1"]} ${styles["centerized-button"]}`}>
          <Link
            className={styles["arrow-button"]}
            href="/signup"
          >
            {" "}
            {slot2}
          </Link>
        </div>
      )}
      {slot3 && (
        <div className={styles["button-1"]}>
          {dataSubmited ? (
            <>
              <div className={styles["arrow-button--no-arrow"]}>
                <span className={styles["spinner"]} />
              </div>{" "}
            </>
          ) : (
            <button className={styles["arrow-button"]}>{slot3}</button>
          )}
        </div>
      )}
      {slot4 && (
        <div className={styles["button-1"]}>
          <Link
            className={styles["arrow-button"]}
            href="/"
            as="/index.html"
          >
            {slot4}
          </Link>
        </div>
      )}
    </div>
  );
};
export default ButtonSlot;

ButtonSlot.propTypes = {
  slot1: PropTypes.string,
  slot2: PropTypes.string,
  slot3: PropTypes.string,
  slot4: PropTypes.string,
  dataPassed: PropTypes.bool,
};