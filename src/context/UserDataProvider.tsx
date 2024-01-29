import { ReactNode, useState } from "react";
import type {
  UserData,
  UserInfoTypes,
  UserReposTypes,
  UserOrgsTypes,
} from "types/userDataTypes";
import { UserDataContext } from "context/userDataContext";

type Props = {
  children: ReactNode;
};

const UserDataProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<UserData>({
    userInfo: {},
    userRepos: {},
    userOrgs: {},
  });

  const { userInfo, userRepos, userOrgs } = userData;

  const setUserInfo = (userInfo: Partial<UserInfoTypes>) => {
    setUserData((prev) => ({ ...prev, userInfo }));
  };

  const setUserRepos = (userRepos: Partial<UserReposTypes>) => {
    setUserData((prev) => ({ ...prev, userRepos }));
  };

  const setUserOrgs = (userOrgs: Partial<UserOrgsTypes>) => {
    setUserData((prev) => ({ ...prev, userOrgs }));
  };

  const contextValue = {
    userData,
    userInfo,
    userRepos,
    userOrgs,
    setUserData,
    setUserInfo,
    setUserRepos,
    setUserOrgs,
  };

  return (
    <UserDataContext.Provider value={contextValue}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
