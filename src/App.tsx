import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GithubFinder from "components/GithubFinder";
import UserDataProvider from "context/UserDataProvider";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        enabled: false, // Disable automatic fetching globally
      },
    },
  });

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
