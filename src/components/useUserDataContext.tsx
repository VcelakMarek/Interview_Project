import { useContext } from "react";
import { UserDataContext } from "context/userDataContext";

const useUserDataContext = () => {
  const context = useContext(UserDataContext);

  if (!context) {
    throw new Error(
      "useUserDataContext must be used within a UserDataContextProvider"
    );
  }

  return context;
};

export default useUserDataContext;
