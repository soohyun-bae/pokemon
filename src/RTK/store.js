import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, pokemonSlice } from "./slice";

export const store = configureStore({
  reducer: {
    pokemon : pokemonSlice.reducer,
    // favorit만 관리하는 스토어
    favorite : favoriteSlice.reducer
  }
})

