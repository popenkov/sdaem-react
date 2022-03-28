import React from "react";
import AdsOnMapFilter from "../../components/AdsOnMapFilter/AdsOnMapFilter";
import AdsOnMapResults from "../../components/AdsOnMapResults/AdsOnMapResults";
import YandexMap from "../../components/YandexMap/YandexMap";
import styles from "./AdsOnMap.module.scss";

function AdsOnMap() {
  return (
    <div className={styles.page}>
      <div>
        <AdsOnMapFilter />
        <AdsOnMapResults />
        <YandexMap />
      </div>
    </div>
  );
}

export default AdsOnMap;
