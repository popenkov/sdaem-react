import React, { useRef, useState } from "react";
import styles from "./AdsOnMapFilter.module.scss";
import Select from "react-select";
import cn from "classnames";
import { ReactComponent as SetupIcon } from "../../assets/svg/setup-icon.svg";
import AdsOnMapFilterExtended from "../AdsOnMapFilterExtended/AdsOnMapFilterExtended";

const regionOptions = [
  { value: "Минск", label: "Минск" },
  { value: "Брест", label: "Брест" },
  { value: "Гродно", label: "Гродно" },
];
const roomsAbountOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "#1E2123" : "#664ef9",
    padding: 10,
  }),
  control: () => ({
    width: 200,
    height: 35,
    border: "2px solid #FFFFFF",
    background: "#CED2FE",
    display: "flex",
    borderRadius: "20px",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

const re = /^[0-9\b]+$/;

function AdsOnMapFilter() {
  const formRef = useRef(null);
  const regionRef = useRef(null);
  const roomsRef = useRef(null);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [extendedMenu, setExtendedMenu] = useState(false);

  const extendedMenuhandler = (evt) => {
    evt.preventDefault();
    setExtendedMenu(!extendedMenu);
  };

  const submitForm = () => {
    let data = new FormData(formRef.current);
    const url = "https://jsonplaceholder.typicode.com/posts";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    };
    fetch(url, requestOptions)
      .then((response) => console.log(response))
      .catch((error) => console.log("Form submit error", error));
  };

  const handleSelect = () => {
    submitForm();
  };
  const handleInputFrom = (evt) => {
    evt.preventDefault();
    if (
      re.test(evt.target.value) &&
      Number(evt.target.value) > Number(toValue) &&
      toValue !== ""
    ) {
      setFromValue(toValue);
    } else if (evt.target.value === "" || re.test(evt.target.value)) {
      setFromValue(evt.target.value);
    }
    submitForm();
  };

  const handleInputTo = (evt) => {
    evt.preventDefault();
    if (
      re.test(evt.target.value) &&
      Number(evt.target.value) < Number(fromValue)
    ) {
      setToValue(fromValue);
    } else if (evt.target.value === "" || re.test(evt.target.value)) {
      setToValue(evt.target.value);
    }

    submitForm();
  };

  const resetFormHandler = (evt) => {
    evt.preventDefault();
    regionRef.current.clearValue();
    roomsRef.current.clearValue();
    setFromValue("");
    setToValue("");
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filterContainer}>
        <form className={styles.form} ref={formRef}>
          <div className={styles.selectContainer}>
            <p className={styles.filterLabel}>Город / область</p>
            <Select
              name="region"
              options={regionOptions}
              styles={customStyles}
              ref={regionRef}
              onChange={() => {
                setTimeout(handleSelect, 0);
              }}
            />
          </div>

          <div className={styles.selectContainer}>
            <label className={styles.filterLabel}>Цена за сутки (BYN)</label>

            <div className={styles.filterRanges}>
              <input
                type="text"
                name="priceFrom"
                value={fromValue}
                className={cn([styles.filterRange])}
                onInput={handleInputFrom}
                placeholder="От"
              ></input>
              -
              <input
                type="text"
                name="priceTo"
                value={toValue}
                className={cn([styles.filterRange])}
                onInput={handleInputTo}
                placeholder="До"
              ></input>
            </div>
          </div>

          <div className={styles.selectContainer}>
            <p className={styles.filterLabel}>Количество комнат</p>
            <Select
              name="roomsAmount"
              options={roomsAbountOptions}
              styles={customStyles}
              ref={roomsRef}
              onChange={() => {
                setTimeout(handleSelect, 0);
              }}
            />
          </div>
          <div className={styles.selectContainer}>
            <button
              className={styles.optionsButton}
              onClick={extendedMenuhandler}
            >
              Больше опций
              <SetupIcon className={styles.optionsIcon} />
            </button>
          </div>

          <div className={styles.resultsContainer}>
            <p className={styles.results}>
              Найдено <span className={styles.resultsValue}>34639</span>
            </p>
            <button className={styles.clearButton} onClick={resetFormHandler}>
              Очистить
            </button>
          </div>
        </form>
      </div>

      {extendedMenu ? <AdsOnMapFilterExtended /> : null}
    </div>
  );
}

export default AdsOnMapFilter;
