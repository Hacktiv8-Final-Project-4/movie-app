import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  test: [],
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {},
});

export const { addTestItem } = testSlice.actions;
export default testSlice.reducer;
