import axios from "axios";
import BASE_URL from "./root";

export const SaveCandidates = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/candidates/`, data, {
      withCredentials: false,
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const GetCandidateByCandidateId = async (id) => {
  try {
    const res = await axios.get(`${BASE_URL}/candidates/${id}`, {
      withCredentials: false,
    });
    console.log(res);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export const GetCandidates = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/candidates/`, {
      withCredentials: false,
    });
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const DeleteCandidate = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/candidates/${id}`, {
      withCredentials: false,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const UpdateCandidate = async (id) => {
  try {
    const res = await axios.patch(`${BASE_URL}/candidates/?${id}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};
