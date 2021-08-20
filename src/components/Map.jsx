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

  // const textState = atom({
  //   key: "textState", // unique ID (with respect to other atoms/selectors)
  //   default: "", // default value (aka initial value)
  // });

  // const onChange = (event) => {
  //   setText(event.target.value);
  // };

  // const [text, setText] = useRecoilState(textState);


  const onChangeLng = (event) => {
    if (!map.current) return; // wait for map to initialize

    const v = event.target.value;

    console.log(map.current.getCenter());

    const coord = {
      lng: v,
      lat: map.current.getCenter().lng.toFixed(6),
    };

    map.current.setCenter(coord);
  };

  const onChangeLat = (event) => {
    if (!map.current) return; // wait for map to initialize

    const v = event.target.value;

    console.log(map.current.getCenter());


    const coord = {
      lng: map.current.getCenter().lng.toFixed(6),
      lat: v,
    };

    map.current.setCenter( coord );
  };

  const onZoomOut = () => {
    if (!map.current) return; // wait for map to initialize

    let z = map.current.getZoom();
    z = z - 0.1;

    map.current.zoomTo(z);
  };

  const onZoomIn = () => {
    if (!map.current) return; // wait for map to initialize

    let z = map.current.getZoom();
    z = z + 0.1;

    map.current.zoomTo(z);
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

        <label htmlFor="lng">Long:</label>
        <input id="lng" type="text" value={lng} onChange={onChangeLng} />

        <label htmlFor="lat">Lat:</label>
        <input id="lat" type="text" value={lat} onChange={onChangeLat} />

        <button onMouseDown={onZoomIn}>+</button>
        <button onMouseDown={onZoomOut}>-</button>
      </div>
      <div ref={mapContainer} className="zerospace-map__canvas" />
    </div>
  );
}
