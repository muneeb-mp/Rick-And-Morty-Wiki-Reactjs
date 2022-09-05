import React from "react";

const InputGroup = ({ total, name, setId }) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e) => setId(e.target.value)}
        className="form-select"
        id={name}
      >
        <option selected value="1">
          Choose...
        </option>
        {[...Array(total).keys()].map((episodeNo) => {
          return (
            <option value={episodeNo + 1}>
              {name} - {episodeNo + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
