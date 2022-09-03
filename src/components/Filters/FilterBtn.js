import React from "react";

const FilterBtn = ({ name, index, items, task, setPageNumber }) => {
  return (
    <>
      <style jsx>
        {`
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          onClick={() => {
            setPageNumber(1);
            task(items);
          }}
        />
        <label class="btn btn-outline-primary" for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </>
  );
};

export default FilterBtn;
