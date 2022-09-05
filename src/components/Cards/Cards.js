import React from "react";
import Status from "./Status";
import Card from "./Card";
import { Link } from "react-router-dom";

const Cards = ({ results, page }) => {
  let display;

  if (results) {
    display = results.map((card) => {
      const { id, name, image, location, status } = card;

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className="col-lg-4 col-md-6 col-12 mb-4 position-relative text-dark"
        >
          <Card name={name} image={image} location={location} />
          <Status status={status} />
        </Link>
      );
    });
  } else {
    display = "No characters found :/";
  }

  return <>{display}</>;
};

export default Cards;
