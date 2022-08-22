import axios from "axios";

const baseUrl = "https://covidnigeria.herokuapp.com/api";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data.data;
};

export default getAll;
