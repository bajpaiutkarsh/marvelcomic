import { createSlice } from "@reduxjs/toolkit";

export const CharactersSlice = createSlice({
  name: "charactersslice",
  initialState: {
    selectedCharacters: {},
  },
  reducers: {
    modifyCharactersSelection: (state, action) => {
      state.selectedCharacters[action.payload] = true;
    },
  },
});
export const CharactersAction = CharactersSlice.actions;
