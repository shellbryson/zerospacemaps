import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import uuid from "react-uuid";
import { mapState } from "../store";
import { cardsState } from "../store";

export default function Sizebar() {

  const [newlng, setNewLng] = useState();
  const [newlat, setNewLat] = useState();

  const [map, setMapState] = useRecoilState(mapState);
  const [cards] = useRecoilState(cardsState);

  const [userEditedText, setUserEditedText] = useState();

  const setCards = useSetRecoilState(cardsState);

  const onClickAddCard = () => {

    // console.log(newlng);
    // console.log(newlat);

    const newCard = {
      id: uuid(),
      title: userEditedText,
      content: userEditedText,
      coords: {
        lng: parseFloat(newlng),
        lat: parseFloat(newlat),
        zoom: 9,
      },
    };

    console.log( newCard );

    setCards((currentState) => [...currentState, newCard]);

  };

  const onChangeLat = (e) => {
    setNewLat(e.target.value);
  }

  const onChangeLng = (e) => {
    setNewLng(e.target.value);

  }

  const onChangeCardText = (e) => {
    setUserEditedText(e.target.value);
  }

  return (
    <div className="zerospace-sidebar">
      Sidebar Long: {map.lng} | Lat: {map.lat} | Zoom: {map.zoom}
      <br></br>
      <label htmlFor="title">Title:</label>
      <input id="title" type="text" onChange={onChangeCardText} />
      <br></br>
      <label htmlFor="lat">Lat:</label>
      <input id="lat" type="text" onChange={onChangeLat} />
      <br></br>
      <label htmlFor="lng">Long:</label>
      <input id="lng" type="text" onChange={onChangeLng} />
      <br></br>
      <button onClick={onClickAddCard}>Add</button>
      <div className="zerospace__cardlist">
        {cards.map((card, index) => (
          <div key={index}>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
