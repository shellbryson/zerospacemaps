import React, { useRef, useEffect, useState } from "react";
// import {
//   //RecoilRoot,
//   atom,
//   //selector,
//   useRecoilState,
//   //useRecoilValue,
// } from "recoil";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hlbGxicnlzb24iLCJhIjoiY2tzajQ5NXVyMGdhdzJwbmNnYXJuNHJoeiJ9.uXFj0pmv3_9F1hebVu8CWA";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-3.188267);
  const [lat, setLat] = useState(55.953251);
  const [zoom, setZoom] = useState(9);

  let userLat;
  let userLong;

  // const textState = atom({
  //   key: "textState", // unique ID (with respect to other atoms/selectors)
  //   default: "", // default value (aka initial value)
  // });

  // const onChange = (event) => {
  //   setText(event.target.value);
  // };

  // const [text, setText] = useRecoilState(textState);

  const onChangeLat = (event) => {
    //setText(event.target.value);
  };

  const onChangeLong = (event) => {
    //setText(event.target.value);
  };

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className="zerospace-map">
      <div className="zerospace-meta">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        <input type="text" value={userLat} onChange={onChangeLat} />
        <input type="text" value={userLong} onChange={onChangeLong} />
      </div>
      <div ref={mapContainer} className="zerospace-map__canvas" />
    </div>
  );
}
