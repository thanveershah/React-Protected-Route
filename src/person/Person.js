import React, { useState } from "react";
import "./Person.css";
import { Link } from "react-router-dom";

const Person = () => {
  const [inputValue, setinputValue] = useState("");
  const [inputArray, setinputArray] = useState([]);
  const [itemExist, setItemExist] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);

  const deletItem = key => {
    inputArray.splice(key, 1);
    setinputArray(inputArray);
  };

  const addItem = () => {
    console.log("test");
    if (inputArray.includes(inputValue)) {
      setItemAdded(false);
      setItemExist(true);
      return false;
    } else {
      inputArray.push(inputValue);
      setItemExist(false);
      setItemAdded(true);
      setinputArray(inputArray);
    }
  };

  return (
    <div className="container">
      {/* <hr />
      <div className="form-inline">
        <input
          type="text"
          className="form-control mr-2"
          value={inputValue}
          onChange={e => setinputValue(e.target.value)}
        />

        <button className="btn btn-primary" onClick={addItem}>
          Add
        </button>
      </div>
      <p className="text-danger">{itemExist ? "Item Already Exist" : " "}</p>
      <p className="text-success">
        {itemAdded ? "Item Added Successfuly" : " "}
      </p>
      <br />

      <ul className="list-group col-3">
        {inputArray.map((value, key) => {
          return (
            <li className="list-group-item items" key={key}>
              <span className="float-left">{value}</span>
              <button
                className="btn btn-danger float-right"
                onClick={() => deletItem(key)}
              >
                X
              </button>
            </li>
          );
        })}
      </ul> */}
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Person;
