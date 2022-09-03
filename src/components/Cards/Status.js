import React from "react";
import styles from "./Cards.module.scss";

const Status = ({ status }) => {
  return (
    <>
      {(() => {
        if (status === "Alive") {
          return (
            <div
              className={`${styles.badge} badge bg-success position-absolute`}
            >
              {status}
            </div>
          );
        } else if (status === "Dead") {
          return (
            <div
              className={`${styles.badge} badge bg-danger position-absolute`}
            >
              {status}
            </div>
          );
        } else {
          return (
            <div
              className={`${styles.badge} badge bg-secondary position-absolute`}
            >
              {status}
            </div>
          );
        }
      })()}
    </>
  );
};

export default Status;
