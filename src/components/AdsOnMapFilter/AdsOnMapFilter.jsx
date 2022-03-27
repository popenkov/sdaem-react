import React from "react";
import styles from "./AdsOnMapFilter.module.scss";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const colourStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = "red";
    return {
      ...styles,
      backgroundColor: isDisabled ? "red" : "blue",
      color: "#FFF",
      cursor: isDisabled ? "not-allowed" : "default",
    };
  },
};

function AdsOnMapFilter() {
  return (
    <div className={styles.filter}>
      AdsOnMapFilter
      <div className={styles.filterContainer}>
        <form className={styles.form}>
          <div>
            <p className={styles.filterLabel}>Город / область</p>
            <Select
              options={options}
              className={styles.filterSelect}
              styles={colourStyles}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdsOnMapFilter;
