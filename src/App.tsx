import { createRoot } from "react-dom/client";
import GithubFinder from "./GithubFinder";

const App = () => {
  return <GithubFinder />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
