import { createSlice, createAction } from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper';

const hydrate = createAction(HYDRATE);

const miscSlice = createSlice({
  name: 'misc',
  initialState: { labels: {}},
  reducers: {
    labelsGetSuccess: (state, action) => {
      state.labels = action.payload;
    }
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
        return {
            ...action.payload.misc,
        };
    });
  }
});

export const { labelsGetSuccess } = miscSlice.actions
export default miscSlice.reducer
