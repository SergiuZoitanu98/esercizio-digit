import { createAsyncThunk } from '@reduxjs/toolkit'
import { labelsGetSuccess } from '../reducers/misc';


export const fetchLabels = createAsyncThunk(
  'misc/fetchLabels',
  async (payload, { dispatch }) => {
    const response =  await require(`@json/i18n/${payload}.json`);
    console.log(response)
    await dispatch(labelsGetSuccess(response));
  }
)

