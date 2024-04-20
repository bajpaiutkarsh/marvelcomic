import { configureStore } from "@reduxjs/toolkit";
import { CharactersSlice } from "./CharactersSlice";

export const store = configureStore({
  reducer: {
    charactersslice: CharactersSlice.reducer,
  },
});
