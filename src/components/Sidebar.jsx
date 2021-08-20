import React, { useRef, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { mapState } from "../store";

export default function Sizebar() {

  const [map, setMapState] = useRecoilState(mapState);

  return (
    <div className="zerospace-sidebar">
      Sidebar

      Long: {map.lng} | Lat: {map.lat} | Zoom: {map.zoom}
    </div>
  );
}
