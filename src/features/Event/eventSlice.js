import { createSlice } from "@reduxjs/toolkit";
import { TODAY } from "../../utils/date";
import { setPeriod } from "./utils";
import { EVENTS_DATA } from "../../data/events";

const initialState = {
  value: 0,
  currentDate: TODAY,
  list: [],
};

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
    setEventPeriod: (state) => {
      state.list = EVENTS_DATA.map((event) => setPeriod(event));
    },
  },
});

export const selectCount = (state) => state.events.value;
export const selectEvent = (state) => state.events.list;
export const selectCurrentDate = (state) => state.events.currentDate;

export const { setCurrentDate, setEventPeriod } = eventSlice.actions;

export default eventSlice.reducer;
