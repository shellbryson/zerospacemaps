import React, { useRef, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import MapGL, { Layer, Marker } from "react-map-gl";

import Sidebar from "./Sidebar";

import { mapState } from "../store";
import { cardsState } from "../store";

export default function Map() {
  const [lat, setLat] = useState(55.953251);
  const [lng, setLng] = useState(-3.188267);
  // const [zoom, setZoom] = useState(9);

  const [viewport, setViewport] = useState({
    latitude: 55.953251,
    longitude: -3.188267,
    zoom: 8,
  });

  const [cards] = useRecoilState(cardsState);

  const onMarkerDragStart = (e) => {};

  const onMarkerDrag = (e) => {};

  const onMarkerDragEnd = (e) => {};

  const markers = cards.map( (card) => (
    <Marker
      key={card.id}
      longitude={card.coords.lng}
      latitude={card.coords.lat}
      draggable
      onDragStart={onMarkerDragStart}
      onDrag={onMarkerDrag}
      onDragEnd={onMarkerDragEnd}
    >
      <img
        src="./logo192.png"
        alt={`Longitude=${card.coords.lng} Latitude=${card.coords.lat}`}
      />
    </Marker>
  ));

  const [currentMapState, setMapState] = useRecoilState(mapState);

  const onChangeCoords = () => {
    // if (!map.current) return; // wait for map to initialize

    // map.current.setCenter({
    //   lng: lng,
    //   lat: lat,
    // });

    setMapState({
      lng: viewport.longitude,
      lat: viewport.latitude,
      zoom: viewport.zoom,
    });

    setViewport({
      ...viewport,
      longitude: parseFloat(lng),
      latitude: parseFloat(lat),
    });
  };

  const onChangeLng = (e) => {
    setLng(e.target.value);
  };

  const onChangeLat = (e) => {
    setLat(e.target.value);
  };

  // const onZoomOut = () => {
  //   if (!map.current) return; // wait for map to initialize

  //   let z = map.current.getZoom();
  //   z = z - 0.1;

  //   map.current.zoomTo(z);

  //   setMapState({
  //     lng: lng,
  //     lat: lat,
  //     zoom: map.current.getZoom(),
  //   });
  // };

  // const onZoomIn = () => {
  //   if (!map.current) return; // wait for map to initialize

  //   let z = map.current.getZoom();
  //   z = z + 0.1;

  //   map.current.zoomTo(z);

  //   setMapState({
  //     lng: lng,
  //     lat: lat,
  //     zoom: map.current.getZoom(),
  //   });
  // };

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: "mapbox://styles/mapbox/streets-v11",
  //     center: [lng, lat],
  //     zoom: zoom,
  //   });
  // });

  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on("move", () => {

  //     const _lng = map.current.getCenter().lng.toFixed(6);
  //     const _lat = map.current.getCenter().lat.toFixed(6);
  //     //const _zoom = map.current.getZoom().toFixed(2);

  //     setLng(_lng);
  //     setLat(_lat);
  //     //setZoom(_zoom);

  //     // setMapState({
  //     //   lng: _lng,
  //     //   lat: _lat,
  //     //   zoom: _zoom,
  //     // });

  //   });
  // });


  const onMouseClick = (e) => {
    console.log(e);
  };

  //   map.current.on("move", () => {

  //     const _lng = map.current.getCenter().lng.toFixed(6);
  //     const _lat = map.current.getCenter().lat.toFixed(6);
  //     //const _zoom = map.current.getZoom().toFixed(2);

  //     setLng(_lng);
  //     setLat(_lat);
  //     //setZoom(_zoom);

  //     // setMapState({
  //     //   lng: _lng,
  //     //   lat: _lat,
  //     //   zoom: _zoom,
  //     // });

  //   });

  const onAddNewPin = e => {

  }

  return (
    <div className="zerospace-map">
      <div className="zerospace-meta">
        {/* Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} */}
        <label htmlFor="lng">Long:</label>
        <input id="lng" type="text" value={lng} onChange={onChangeLng} />
        <label htmlFor="lat">Lat:</label>
        <input id="lat" type="text" value={lat} onChange={onChangeLat} />
        <button onClick={onChangeCoords}>Go</button>
        {/* <button onClick={onZoomIn}>+</button>
        <button onClick={onZoomOut}>-</button> */}
      </div>
      {/* <div ref={mapContainer} className="zerospace-map__canvas" /> */}

      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={setViewport}
        onClick={onMouseClick}
        mapboxApiAccessToken="pk.eyJ1Ijoic2hlbGxicnlzb24iLCJhIjoiY2tzajQ5NXVyMGdhdzJwbmNnYXJuNHJoeiJ9.uXFj0pmv3_9F1hebVu8CWA"
      >
        {markers}
      </MapGL>
      <Sidebar onAddNewPin={onAddNewPin} />
    </div>
  );
}
