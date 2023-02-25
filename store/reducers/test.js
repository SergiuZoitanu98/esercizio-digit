import { createSlice, createAction } from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper';

const hydrate = createAction(HYDRATE);

const testSlice = createSlice({
  name: 'test',
  initialState: {
    status: {}
  },
  reducers: {
    getTestSuccess: (state, action) => {
      state.status = action.payload.data;
    },
    getTestError: (state, action) => {
      state.status = {};
    }
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
        return {
            ...action.payload.test,
        };
    });
  }

});

export const { getTestSuccess, getTestError } = testSlice.actions
export default testSlice.reducer
