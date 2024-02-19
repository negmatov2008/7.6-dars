import { createSlice } from "@reduxjs/toolkit";

const require = createSlice({
  name: "require",
  initialState: {
    requirs: [],
  },
  reducers: {
    addRequire: (state, { payload }) => {
      state.requirs.push(payload);
    },
  },
});

export const { addRequire } = require.actions;

export default require.reducer;
