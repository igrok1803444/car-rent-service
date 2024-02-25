import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../features/index";
import { Notify } from "notiflix";

export const getCars = createAsyncThunk(
  "cars/getCars",
  async (reqParams, thunkAPI) => {
    try {
      const config = {
        params: {},
      };

      if (reqParams?.page) {
        config.params.page = reqParams.page;
      } else {
        config.params.page = 1;
      }
      if (reqParams?.make) {
        config.params.make = reqParams.make;
      }

      const response = await instance.get("", config);

      if (response.data.length < 1) {
        Notify.failure("No cars Foun");
        return thunkAPI.rejectWithValue("No cars Foun");
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loadMore = createAsyncThunk(
  "cars/loadMore",
  async (reqParams, thunkAPI) => {
    try {
      const config = {
        params: {
          page: reqParams.page,
        },
      };
      if (reqParams?.make !== "" && reqParams.make) {
        config.params.make = reqParams.make;
      }
      const response = await instance.get(``, config);
  

      if (response.data.length < 1) {
        Notify.failure("No cars Found");
        return thunkAPI.rejectWithValue("No cars Found");
      }

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
