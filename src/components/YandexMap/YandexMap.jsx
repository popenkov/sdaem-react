import React, { useRef } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import styles from "./YandexMap.module.scss";

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 15,
};

const coordinates = [
  [55.684758, 37.738521],
  [57.684758, 39.738521],
];

function YandexMap() {
  const mapRef = useRef(null);
  return (
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
            <Placemark key={coordinate} geometry={coordinate} />
          ))}
        </Map>
      </div>
    </YMaps>
  );
}

export default YandexMap;
