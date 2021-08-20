import { atom } from "recoil";

export const demoState = atom({
  key: "demoStateKey",
  default: "Hello world",
});

export const mapState = atom({
  key: "mapState",
  default: {
    lng: -3.188267,
    lat: 55.953251,
    zoom: 9
  },
});