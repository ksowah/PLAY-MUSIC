import { atom } from "recoil"

export const sessionState = atom({
    key: "sessionState",
    default: null,
})

export const tokenState = atom({
    key: "tokenState",
    default: "",
})

export const tracks = atom({
    key: "tracks",
    default: [],
})