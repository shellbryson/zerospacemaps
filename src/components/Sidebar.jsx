import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { mapState } from "../store";
import { cardsState } from "../store";

export default function Sizebar() {

  const [map, setMapState] = useRecoilState(mapState);
  const [cards] = useRecoilState(cardsState);

  const [userEditedText, setUserEditedText] = useState();

  const setCards = useSetRecoilState(cardsState);

  const onClickAddCard = () => {

    const newCard = {
      title: userEditedText,
      content: userEditedText,
      coords: {
        lng: -3.188267,
        lat: 55.953251,
        zoom: 9,
      }
    };

    setCards((currentState) => [...currentState, newCard]);

  };

  const onChangeCardText = (e) => {
    setUserEditedText(e.target.value);
  }

  return (
    <div className="zerospace-sidebar">
      Sidebar Long: {map.lng} | Lat: {map.lat} | Zoom: {map.zoom}
      <input type="text" onChange={onChangeCardText} />
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
