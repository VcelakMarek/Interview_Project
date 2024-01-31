import { GET } from "connectors/fetch";
import { useQuery } from "@tanstack/react-query";
import { useUserDataContext } from "context/useUserDataContext";
import type {
  UserInfo,
  UserOrganization,
  UserRepository,
} from "types/userDataTypes";

type Props = {
  userName: string;
};

export const fetchUserData = ({ userName }: Props) => {
  const { setUserInfo, setUserRepos, setUserOrgs } = useUserDataContext();

  const { isFetching: userInfoIsFetching } = useQuery(
    ["userInfo", userName],
    () => GET(userName),
    {
      onSuccess: (userInfo: UserInfo) => {
        setUserInfo(userInfo);
      },
    }
  );

  const { isFetching: userReposIsFetching } = useQuery(
    ["userRepos", userName],
    () => GET(userName, true),
    {
      onSuccess: (userRepos: UserRepository[]) => {
        console.log("repos", userRepos);
        setUserRepos(userRepos);
      },
    }
  );

  const { isFetching: userOrgsIsFetching } = useQuery(
    ["userOrgs", userName],
    () => GET(userName, false, true),
    {
      onSuccess: (userOrgs: UserOrganization[]) => {
        console.log("orgs", userOrgs);
        setUserOrgs(userOrgs);
      },
    }
  );

  const isFetching =
    userInfoIsFetching || userReposIsFetching || userOrgsIsFetching;

  const handleSearch = async () => {
    await refetchUserInfo();
    await refetchUserRepos();
    await refetchUserOrgs();
  };

  const { refetch: refetchUserInfo } = useQuery(["userInfo", userName]);
  const { refetch: refetchUserRepos } = useQuery(["userRepos", userName], () =>
    GET(userName, true)
  );
  const { refetch: refetchUserOrgs } = useQuery(["userOrgs", userName], () =>
    GET(userName, false, true)
  );

  return { isFetching, handleSearch };
};
