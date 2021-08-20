import React, { useRef, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { mapState } from "../store";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hlbGxicnlzb24iLCJhIjoiY2tzajQ5NXVyMGdhdzJwbmNnYXJuNHJoeiJ9.uXFj0pmv3_9F1hebVu8CWA";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-3.188267);
  const [lat, setLat] = useState(55.953251);
  const [zoom, setZoom] = useState(9);

  const [currentMapState, setMapState] = useRecoilState(mapState);

  const onChangeCoords = () => {
    if (!map.current) return; // wait for map to initialize

    map.current.setCenter({
      lng: lng,
      lat: lat,
    });

    setMapState({
      lng: lng,
      lat: lat,
      zoom: map.current.getZoom(),
    });

  };

  const onChangeLng = (e) => {
    setLng(e.target.value);
  };

  const onChangeLat = (e) => {
    setLat(e.target.value);
  };

  const onZoomOut = () => {
    if (!map.current) return; // wait for map to initialize

    let z = map.current.getZoom();
    z = z - 0.1;

    map.current.zoomTo(z);

    setMapState({
      lng: lng,
      lat: lat,
      zoom: map.current.getZoom(),
    });
  };

  const onZoomIn = () => {
    if (!map.current) return; // wait for map to initialize

    let z = map.current.getZoom();
    z = z + 0.1;

    map.current.zoomTo(z);

    setMapState({
      lng: lng,
      lat: lat,
      zoom: map.current.getZoom(),
    });
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

      const _lng = map.current.getCenter().lng.toFixed(6);
      const _lat = map.current.getCenter().lat.toFixed(6);
      //const _zoom = map.current.getZoom().toFixed(2);

      setLng(_lng);
      setLat(_lat);
      //setZoom(_zoom);

      // setMapState({
      //   lng: _lng,
      //   lat: _lat,
      //   zoom: _zoom,
      // });

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
        <button onClick={onChangeCoords}>Go</button>
        <button onClick={onZoomIn}>+</button>
        <button onClick={onZoomOut}>-</button>
      </div>
      <div ref={mapContainer} className="zerospace-map__canvas" />
    </div>
  );
}
