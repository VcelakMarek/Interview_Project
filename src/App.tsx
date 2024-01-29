import { createRoot } from "react-dom/client";
import GithubFinder from "components/GithubFinder";
import UserDataProvider from "context/UserDataProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserDataProvider>
          <GithubFinder />
        </UserDataProvider>
      </QueryClientProvider>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
