import React from "react";
import styles from "./Cards.module.scss";
import Status from "./Status";
import Card from "./Card";

const Cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map((card) => {
      const { id, name, image, location, status } = card;

      return (
        <div className="col-4 mb-4 position-relative" key={id}>
          <Card name={name} image={image} location={location} />
          <Status status={status} />
        </div>
      );
    });
  } else {
    display = "No characters found :/";
  }

  return <>{display}</>;
};

export default Cards;
