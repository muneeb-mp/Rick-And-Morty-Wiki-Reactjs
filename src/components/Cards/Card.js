import React from "react";
import styles from "./Cards.module.scss";

const Card = ({ image, name, location }) => {
  return (
    <>
      <div className={styles.cards}>
        <img src={image} alt="" className={`${styles.img} img-fluid`} />
        <div className={`${styles.p10} content`}>
          <div className="fs-4 fw-bold mb-4 ubuntu">{name}</div>
          <div className="">
            <div className="fs-6">Last Location</div>
            <div className="fs-5">{location.name}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
