import { createRoot } from "react-dom/client";
import GithubFinder from "./GithubFinder";
import UserDataProvider from "context/userData.context";

const App = () => {
  return (
    <>
      <UserDataProvider>
        <GithubFinder />
      </UserDataProvider>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
