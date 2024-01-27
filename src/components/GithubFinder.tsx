import { Container } from "@mui/material";
import SearchBar from "components/SearchBar";
import UserInfo from "components/UserInfo";
import UserDetails from "./UserDetails";

const GithubFinder = () => {
  return (
    <Container>
      <SearchBar />
      <UserInfo />
      <UserDetails />
    </Container>
  );
};

export default GithubFinder;
