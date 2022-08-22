import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import getAll from "../services/covidServices";

export interface StateProps {
  state: string;
  _id: string;
  confirmedCases: number;
  casesOnAdmission: number;
  discharged: number;
  death: number;
}

export interface DataModel {
  data: unknown;
  totalSamplesTested?: string;
  totalConfirmedCases?: number;
  totalActiveCases?: number;
  discharged?: number;
  death?: number;
  states?: StateProps[];
}

// export type Action = {
//   type: "FETCH_DATA";
//   payload: Array<string>;
// };

const dataSlice = createSlice({
  name: "covidEntries",
  initialState: {},
  reducers: {
    getData(state, action: PayloadAction<DataModel>) {
      return action.payload;
    },
  },
});

export const { getData } = dataSlice.actions;

export const fetchData = () => {
  return async (dispatch: any) => {
    const data = await getAll();
    dispatch(getData(data));
  };
};

export default dataSlice.reducer;
