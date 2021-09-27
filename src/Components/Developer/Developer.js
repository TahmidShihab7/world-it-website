import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

import "./Developer.css";

const Developer = (props) => {
  const { name, age, email, gender, picture, salary } = props.developer;
  const element = <FontAwesomeIcon icon={faPlusSquare} />;

  return (
    <div className="dev">
      <div className="dev-info">
        <img className="avatar" src={picture} alt="" />
        <h3>Name: {name}</h3>
        <p>
          <b>Email: </b>
          {email}
        </p>
        <p>
          <b>Age: </b>
          {age}
        </p>
        <p>
          <b>Gender: </b>
          {gender}
        </p>
        <p>
          <b>Salary:</b> ${salary}
        </p>
        <button
          onClick={() => {
            props.handleAddToCart(props.developer);
          }}
          className="hire-me-btn"
        >
          Hire {element}
        </button>
      </div>
    </div>
  );
};

export default Developer;
