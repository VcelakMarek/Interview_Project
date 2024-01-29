import { createContext } from "react";
import type {
  UserData,
  UserInfoTypes,
  UserReposTypes,
  UserOrgsTypes,
} from "types/userDataTypes";

type Context = {
  userInfo: UserInfoTypes;
  userRepos: UserReposTypes;
  userOrgs: UserOrgsTypes;
  setUserData: (data: UserData) => void;
};

export const UserDataContext = createContext<Context | null>(null);
