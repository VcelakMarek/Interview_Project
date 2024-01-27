import axios from "axios";

export const GET = async <T>(
  userName: string,
  repos = false,
  orgs = false
): Promise<T> => {
  const { data } = await axios.get(
    `https://api.github.com/users/${userName}${
      repos ? "/repos" : orgs ? "/orgs" : ""
    }`
  );
  console.log(data);
  return data;
};
