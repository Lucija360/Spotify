import { atom } from "recoil";

export const playlistState = atom({
    key: "playlistState",
    default: null,
});

const playlistIdState = atom({
    key: "playlistIdState",
    default: '4LnTQT9pZuyXG96WS9RNzU',
});