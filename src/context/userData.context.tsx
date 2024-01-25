import { createContext, useState, Dispatch, SetStateAction } from "react";
import type { userDataTypes } from "types/userDataTypes";

type Context = {
  userData: userDataTypes[];
  setUserData: Dispatch<SetStateAction<userDataTypes[]>>;
};

export const UserDataContext = createContext<Context>({
  userData: [],
  setUserData: () => {},
});

type Props = {
  children: React.ReactNode;
};

const UserDataProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<userDataTypes[]>([]);

  const contextValue = {
    userData,
    setUserData,
  };

  return (
    <UserDataContext.Provider value={contextValue}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
