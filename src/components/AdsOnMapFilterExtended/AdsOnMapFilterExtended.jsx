import React, { useRef } from "react";
import styles from "./AdsOnMapFilterExtended.module.scss";
import Select from "react-select";

const roomsOptions = [
  { value: "1", label: "1 комн." },
  { value: "2", label: "2 комн." },
  { value: "3", label: "3 комн." },
  { value: "4", label: "4 комн." },
  { value: "5", label: "5 комн." },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? "#F8F8F8" : "#ffffff",
    color: "#1E2123",
    padding: 10,
  }),
  control: (state) => ({
    width: 200,
    height: 35,
    border: " 2px solid rgba(102, 78, 249, 0.8)",
    background: "#FFFFFF",
    display: "flex",
    borderRadius: "20px",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

function AdsOnMapFilterExtended() {
  const formRef = useRef(null);
  return (
    <div className={styles.filter}>
      <div className={styles.filterContainer}>
        <form className={styles.form} ref={formRef}>
          <div className={styles.formLeft}>
            <div className={styles.selectContainer}>
              <p className={styles.filterLabel}>Город / область</p>
              <Select
                name="region"
                options={roomsOptions}
                styles={customStyles}
                placeholder="Выберите"
                classNamePrefix="react-select"
                className={styles.select}
                onChange={() => {
                  // setTimeout(handleSelect, 0);
                }}
              />
            </div>
          </div>
          <div className={styles.formRight}>
            <div className={styles.formRightTop}>
              <div className={styles.selectContainer}>
                <p className={styles.filterLabel}>Город / область</p>
                <Select
                  name="region"
                  options={roomsOptions}
                  styles={customStyles}
                  placeholder="Выберите"
                  classNamePrefix="react-select"
                  className={styles.select}
                  onChange={() => {
                    // setTimeout(handleSelect, 0);
                  }}
                />
              </div>
              <div className={styles.selectContainer}>
                <p className={styles.filterLabel}>Город / область</p>
                <Select
                  name="region"
                  options={roomsOptions}
                  styles={customStyles}
                  placeholder="Выберите"
                  classNamePrefix="react-select"
                  className={styles.select}
                  onChange={() => {
                    // setTimeout(handleSelect, 0);
                  }}
                />
              </div>
            </div>
            <div className={styles.formRightBottom}>
              <div className={styles.checkboxContainer}>
                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="stove"
                  id="stove"
                />
                <label className={styles.checkboxLabel} htmlFor="stove">
                  Газовая плита
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="oven"
                  id="oven"
                />
                <label className={styles.checkboxLabel} htmlFor="oven">
                  Духовка
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="coffeeMaker"
                  id="coffeeMaker"
                />
                <label className={styles.checkboxLabel} htmlFor="coffeeMaker">
                  Кофеварка
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="microwave"
                  id="microwave"
                />
                <label className={styles.checkboxLabel} htmlFor="microwave">
                  Микроволновая печь
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="dishes"
                  id="dishes"
                />
                <label className={styles.checkboxLabel} htmlFor="dishes">
                  Посуда
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="dishwasher"
                  id="dishwasher"
                />
                <label className={styles.checkboxLabel} htmlFor="dishwasher">
                  Посудомоечная машина
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="stove"
                  id="stove"
                />
                <label className={styles.checkboxLabel} htmlFor="stove">
                  Газовая плита
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="oven"
                  id="oven"
                />
                <label className={styles.checkboxLabel} htmlFor="oven">
                  Духовка
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="coffeeMaker"
                  id="coffeeMaker"
                />
                <label className={styles.checkboxLabel} htmlFor="coffeeMaker">
                  Кофеварка
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="microwave"
                  id="microwave"
                />
                <label className={styles.checkboxLabel} htmlFor="microwave">
                  Микроволновая печь
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="dishes"
                  id="dishes"
                />
                <label className={styles.checkboxLabel} htmlFor="dishes">
                  Посуда
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="dishwasher"
                  id="dishwasher"
                />
                <label className={styles.checkboxLabel} htmlFor="dishwasher">
                  Посудомоечная машина
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="stove"
                  id="stove"
                />
                <label className={styles.checkboxLabel} htmlFor="stove">
                  Газовая плита
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="oven"
                  id="oven"
                />
                <label className={styles.checkboxLabel} htmlFor="oven">
                  Духовка
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="coffeeMaker"
                  id="coffeeMaker"
                />
                <label className={styles.checkboxLabel} htmlFor="coffeeMaker">
                  Кофеварка
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="microwave"
                  id="microwave"
                />
                <label className={styles.checkboxLabel} htmlFor="microwave">
                  Микроволновая печь
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="dishes"
                  id="dishes"
                />
                <label className={styles.checkboxLabel} htmlFor="dishes">
                  Посуда
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="dishwasher"
                  id="dishwasher"
                />
                <label className={styles.checkboxLabel} htmlFor="dishwasher">
                  Посудомоечная машина
                </label>
              </div>
              <div className={styles.checkboxContainer}>
                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="stove"
                  id="stove"
                />
                <label className={styles.checkboxLabel} htmlFor="stove">
                  Газовая плита
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="oven"
                  id="oven"
                />
                <label className={styles.checkboxLabel} htmlFor="oven">
                  Духовка
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="coffeeMaker"
                  id="coffeeMaker"
                />
                <label className={styles.checkboxLabel} htmlFor="coffeeMaker">
                  Кофеварка
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="microwave"
                  id="microwave"
                />
                <label className={styles.checkboxLabel} htmlFor="microwave">
                  Микроволновая печь
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="dishes"
                  id="dishes"
                />
                <label className={styles.checkboxLabel} htmlFor="dishes">
                  Посуда
                </label>

                <input
                  className={styles.customCheckbox}
                  type="checkbox"
                  name="dishwasher"
                  id="dishwasher"
                />
                <label className={styles.checkboxLabel} htmlFor="dishwasher">
                  Посудомоечная машина
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
}

export default AdsOnMapFilterExtended;
