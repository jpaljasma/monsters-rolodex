import React from "react";
import "./search-box.styles.scss";
import DelayInput from "react-delay-input";
// functional components do not have a state or lifecycle methods
// faster easier better, easier to test.
//
// recommended: always functional components unless state is needed
export const SearchBox = ({ placeholder, handleChange, minLength, delayTimeout }) => (
  <DelayInput
    className="search"
    type="search"
    placeholder={placeholder}
    size="large"
    minLength={minLength || 2}
    delayTimeout={delayTimeout || 300}
    onChange={handleChange}
  />
);
