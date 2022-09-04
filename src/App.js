import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";
import CardDetails from "./components/Cards/CardDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:id" element={<CardDetails />} />

        <Route exact path="/episodes" element={<Episodes />} />
        <Route exact path="/episodes/:id" element={<CardDetails />} />

        <Route exact path="/location" element={<Location />} />
        <Route exact path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  const [fetchedData, setFetchedData] = useState([]);
  const { info, results } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    // Immediately Invoked Function Expression
    (async function () {
      const res = await fetch(api);
      const data = await res.json();
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters
              setPageNumber={setPageNumber}
              setStatus={setStatus}
              setGender={setGender}
              setSpecies={setSpecies}
            />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        info={info}
      />
    </div>
  );
};

export default App;
