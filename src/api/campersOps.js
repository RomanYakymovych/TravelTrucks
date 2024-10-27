import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { buildQueryParams } from "../utils/utils";

const api = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (filters = {}, { rejectWithValue }) => {
    try {
      const { equipment, vehicleType, location } = filters;
      const queryString = buildQueryParams(equipment, vehicleType, location);
      const { data } = await api.get(`/campers?${queryString}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCamperDetails = createAsyncThunk(
  "campers/fetchDetails",
  async (camperId, { rejectWithValue }) => {
    try {
      const { data } = await api.get(`/campers/${camperId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);