import { atom } from "recoil";

export const mapState = atom({
  key: "userMap",
  default: {
    lng: -3.188267,
    lat: 55.953251,
    zoom: 9
  },
});

export const cardsState = atom({
  key: "userCards",
  default: [
    {
      id: 1,
      title: "Test card",
      content: "Hello world",
      coords: {
        lng: -3.188267,
        lat: 55.953251,
        zoom: 9
      }
    },
    {
      id: 2,
      title: "Card 2",
      content: "More text",
      coords: {
        lng: -2.9,
        lat: 54.953251,
        zoom: 9
      }
    }
  ],
});