import { Container } from "@mui/material";
import SearchBar from "components/SearchBar";
import UserInfo from "components/UserInfo";

const GithubFinder = () => {
  return (
    <Container>
      <SearchBar />
      <UserInfo />
    </Container>
  );
};

export default GithubFinder;
