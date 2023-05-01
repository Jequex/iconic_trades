import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  date: number;
  amount: number;
  investments: [];
}

const initialState: InitialState = {
  date: 0,
  amount: 0,
  investments: [],
};

const packageSlice = createSlice({
  name: "package slice",
  initialState,
  reducers: {
    investmentLaps: (state, action) => {
      // state.date = action.payload;
      console.log(action.payload);
    },
    invested: (state) => {
      //   state.investments = [...state.investments, state.date];
    },
  },
});

export default packageSlice.reducer;
export const { investmentLaps } = packageSlice.actions;
