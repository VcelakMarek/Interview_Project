import { ReactNode, useState } from "react";
import type {
  UserData,
  UserInfo,
  UserRepository,
  UserOrganization,
} from "types/userDataTypes";
import { Context, UserDataContext } from "context/userDataContext";

type Props = {
  children: ReactNode;
};

const UserDataProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<UserData>({
    userInfo: {},
    userRepos: [],
    userOrgs: [],
  });

  const { userInfo, userRepos, userOrgs } = userData;

  const setUserInfo = (userInfo: UserInfo) => {
    setUserData((prev) => ({ ...prev, userInfo }));
  };

  const setUserRepos = (userRepos: UserRepository[]) => {
    setUserData((prev) => ({ ...prev, userRepos }));
  };

  const setUserOrgs = (userOrgs: UserOrganization[]) => {
    setUserData((prev) => ({ ...prev, userOrgs }));
  };

  const contextValue: Context = {
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
