import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import AdsOnMapFilter from "../../components/AdsOnMapFilter/AdsOnMapFilter";
import AdsOnMapResults from "../../components/AdsOnMapResults/AdsOnMapResults";
import AdsOnMapShowResult from "../../components/AdsOnMapShowResult/AdsOnMapShowResult";
import YandexMap from "../../components/YandexMap/YandexMap";
import styles from "./AdsOnMap.module.scss";
import { setAdsOnMap } from "../../redux/actions/adsOnMap";

function AdsOnMap() {
  const dispatch = useDispatch();
  const [showResults, setShowResults] = useState(false);

  React.useEffect(() => {
    axios.get("http://localhost:3001/adsOnMapData").then(({ data }) => {
      console.log(data);
      dispatch(setAdsOnMap(data));
    });
  }, []);

  const AdsOnMap = useSelector(({ adsOnMap }) => adsOnMap.adsOnMap);

  return (
    <div className={styles.page}>
      <div>
        <AdsOnMapFilter />
        {/*  <AdsOnMapShowResult state={showResults} setState={setShowResults} /> */}
        <div
          className={!showResults ? styles.zoomBtnsShow : styles.zoomBtnsHide}
        >
          <AdsOnMapShowResult
            state={showResults}
            setState={setShowResults}
            className={styles.showHideBtn}
          />
          <button className={styles.zoomBtn}>+</button>
          <button className={styles.zoomBtn}>-</button>
        </div>
        {showResults ? <AdsOnMapResults AdsOnMapData={AdsOnMap} /> : null}
        <YandexMap AdsOnMapData={AdsOnMap} />
      </div>
    </div>
  );
}

export default AdsOnMap;
