import { configureStore } from "@reduxjs/toolkit";
import aboutMeSlice from "./aboutmeSlice";

const store = configureStore({
    reducer: aboutMeSlice.reducer,
})

export default store