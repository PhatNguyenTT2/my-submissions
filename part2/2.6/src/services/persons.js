import axios from "axios";

const API_URL = "http://localhost:3001/persons";

const getAll = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const getById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const create = async (personData) => {
  const response = await axios.post(API_URL, personData);
  return response.data;
};

const update = async (id, personData) => {
  const response = await axios.put(`${API_URL}/${id}`, personData);
  return response.data;
};

const deletePerson = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export default {
  getAll,
  getById,
  create,
  update,
  deletePerson,
};