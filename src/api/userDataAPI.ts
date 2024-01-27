import { useContext } from "react";
import { GET } from "connectors/fetch";
import { useQuery } from "@tanstack/react-query";
import { UserDataContext } from "context/userData.context";

type Props = {
  userName: string;
};

export const fetchUserData = ({ userName }: Props) => {
  const { setUserData } = useContext(UserDataContext);
  const { isPending, error, data, isFetching } = useQuery(
    ["userData", userName],
    () => GET(userName),
    {
      enabled: false, // Disable automatic fetching
      onSuccess: (data) => {
        setUserData(data);
      },
    }
  );

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const handleSearch = async () => {
    await refetch();
  };

  const { refetch } = useQuery(["userData", userName], () => GET(userName), {
    enabled: false, // Disable automatic fetching
  });

  return { data, isFetching, handleSearch };
};

export const fetchUserRepos = () => {
  const { userData } = useContext(UserDataContext);
  const { isPending, error, data, isFetching } = useQuery(
    ["userRepo", userName],
    () => GET(userData.login, repos)
  );

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return { data, isFetching };
};
