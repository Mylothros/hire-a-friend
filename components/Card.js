import React, { useEffect } from "react";
import Image from "next/image";

import styles from "styles/components/card.module.scss";
import product_1 from "public/assets/images/product_1.png";
import product_2 from "public/assets/images/product_2.png";
import product_3 from "public/assets/images/product_3.png";

const Card = ({ slot1, slot2, slot3 }) => {
  return (
    <div>
      {slot1 && (
        <div className={styles["image-container--image"]}>
          <p className={styles["target-paragraph-1"]}>
            <span>
              {slot1.word1}
              <br />
            </span>
            <span>
              {slot1.word2}
              <br />
            </span>
            <span>
              {slot1.word3}
              <br />
            </span>
          </p>
          <Image src={product_1} alt="Card 1" className={styles["img-1"]} />
        </div>
      )}
      {slot2 && (
        <div className={styles["image-container--image"]}>
          <p className={styles["target-paragraph-2"]}>
            <span>
              {slot2.word1}
              <br />
            </span>
            <span>
              {slot2.word2}
              <br />
            </span>
            <span>
              {slot2.word3}
              <br />
            </span>
            <span>
              {slot2.word4}
              <br />
            </span>
            <span>
              {slot2.word5}
              <br />
            </span>
          </p>
          <Image src={product_2} alt="Card 1" className={styles["img-2"]} />
        </div>
      )}
      {slot3 && (
        <div className={styles["image-container--image"]}>
          <p className={styles["target-paragraph-3"]}>
            <span>
              {slot3.word1}
              <br />
            </span>
            <span>{slot3.word2}</span>
            <span>
              {slot3.word3}
              <br />
            </span>
            <span>
              {slot3.word4}
              <br />
            </span>
            <span>
              {slot3.word5}
              <br />
            </span>
            <span>
              {slot3.word6}
              <br />
            </span>
          </p>
          <Image src={product_3} alt="Card 1" className={styles["img-3"]} />
        </div>
      )}
    </div>
  );
};
export default Card;