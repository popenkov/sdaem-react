import React, { useRef, useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import AdsOnMapShowResult from "../AdsOnMapShowResult/AdsOnMapShowResult";
import styles from "./YandexMap.module.scss";

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 15,
};

const coordinates = [
  [55.751574, 37.573856],
  [57.684758, 39.738521],
];

function YandexMap({ AdsOnMapData }) {
  console.log("map", AdsOnMapData.ads);
  /*   const coordinates = AdsOnMapData.ads.map((ad) => {
    return ad.coordinates;
  }); */
  const mapRef = useRef(null);
  const [showResults, setShowResults] = useState(false);

  const clickOnMap = (coordinate) => {
    console.log(coordinate);
  };

  return (
    <>
      <YMaps>
        <div className={styles.mapContainer}>
          <Map
            defaultState={mapData}
            className={styles.map}
            instanceRef={(ref) => {
              ref && ref.behaviors.disable("scrollZoom");
            }}
          >
            {coordinates.map((coordinate, id) => (
              <Placemark
                key={coordinate}
                geometry={coordinate}
                onClick={() => clickOnMap(coordinate)}
              />
            ))}
          </Map>
        </div>
      </YMaps>
    </>
  );
}

export default YandexMap;
