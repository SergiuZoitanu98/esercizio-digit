import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import { getTestSuccess, getTestError } from '@app/reducers/test';
const TEST_GET = "https://api-cms.tps-cloud.com/apicms/apis/aa208b30-257d-11e9-b03f-b5666fec9770/8a8c31f0-2f7a-11e9-a375-d9ac41cb440e";




export const getTest = createAsyncThunk(
  'test/getTest',
  async (payload, { dispatch }) => {

    const response = await axios.get(`${TEST_GET}`);
    if (response.status === 200) {
      await dispatch(getTestSuccess(response));
    } else {
      await dispatch(getTestError(response))
    }
  }
)