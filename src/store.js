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
      title: "Test card",
      content: "Hello world",
      coords: {
        lng: -3.188267,
        lat: 55.953251,
        zoom: 9
      }
    },
    {
      title: "Card 2",
      content: "More text",
      coords: {
        lng: -3.188267,
        lat: 55.953251,
        zoom: 9
      }
    }
  ],
});