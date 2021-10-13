import { configureStore } from "@reduxjs/toolkit";
import EventReducer from "./libs/eventSlice";

export const store = configureStore({
  reducer: {
    events: EventReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
