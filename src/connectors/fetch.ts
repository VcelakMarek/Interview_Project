import axios from "axios";

export const GET = async <T>(userName: string): Promise<T> => {
  const { data } = await axios.get(`https://api.github.com/users/${userName}`);
  console.log(data);
  return data;
};
