import { createSlice } from "@reduxjs/toolkit";
import { TODAY } from "../utils/date";
import { setPeriodTime } from "../features/Event/utils";
import { EVENTS_DATA } from "../data/events";

const initialState = {
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
    setEventData: (state) => {
      state.list = EVENTS_DATA.map((event) => setPeriodTime(event));
    },
  },
});

export const selectEvent = (state) => state.events.list;
export const selectCurrentDate = (state) => state.events.currentDate;

export const { setCurrentDate, setEventData } = eventSlice.actions;

export default eventSlice.reducer;
