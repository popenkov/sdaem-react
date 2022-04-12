import React from "react";
import styles from "./AdsOnMapShowResult.module.scss";
import { ReactComponent as ShevronMarker } from "../../assets/svg/shevron-right.svg";

function AdsOnMapShowResult({ state, setState }) {
  const showResults = () => {
    setState(!state);
  };
  return (
    <>
      {!state ? (
        <button onClick={showResults} className={styles.showBtn}>
          <ShevronMarker className={styles.showSvg} />
          Развернуть результаты
        </button>
      ) : (
        <button onClick={showResults} className={styles.hideBtn}>
          <ShevronMarker className={styles.hideSvg} />
          Свернуть результаты
        </button>
      )}
    </>
  );
}

export default AdsOnMapShowResult;
