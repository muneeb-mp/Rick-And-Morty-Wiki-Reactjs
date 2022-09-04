import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import InputGroup from "../components/Filters/Category/InputGroup";

const Episodes = () => {
  const [id, setId] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);

  let { air_date, name } = info;

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    // Immediately Invoked Function Expression
    (async function () {
      const res = await fetch(api);
      const data = await res.json();
      setInfo(data);

      let chars = await Promise.all(
        data.characters.map((char) => {
          return fetch(char).then((res) => res.json());
        })
      );
      setResults(chars);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-4">
        <h1 className="text-center">
          Episode :{" "}
          <span className="text-primary">{name === "" ? "Unknown" : name}</span>
        </h1>
        <h5 className="text-center">
          Air Date : {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-3">
          <h4 className="text-center mb-4">Pick Episodes</h4>
          <InputGroup setId={setId} name="Episode" total={51} />
        </div>
        <div className="col-8">
          <div className="row">
            <Cards results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
