import React from "react";
import axios from "axios";
import BASE_URL from "./root";

export const GetPositions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/positions`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const GetPositionById = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/positions/?${id}`);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};
export const SavePosition = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/positions/`, data, {
      withCredentials: false,
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const DeletePosition = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/positions/${id}`, {
      withCredentials: false,
    });
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export const UpdatePosition = async (id) => {
  try {
    const res = await axios.patch(`${BASE_URL}/positions/${id}`);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};
