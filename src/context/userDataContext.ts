import { createContext } from "react";
import type {
  UserData,
  UserInfo,
  UserOrganization,
  UserRepository,
} from "types/userDataTypes";

export type Context = {
  userData: UserData;
  userInfo: UserInfo;
  userRepos: UserRepository[];
  userOrgs: UserOrganization[];
  setUserData: (data: UserData) => void;
  setUserInfo: (info: UserInfo) => void;
  setUserRepos: (repos: UserRepository[]) => void;
  setUserOrgs: (orgs: UserOrganization[]) => void;
};

export const UserDataContext = createContext<Context | null>(null);
