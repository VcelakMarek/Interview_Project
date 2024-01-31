import { Box, Container } from "@mui/material";
import SearchBar from "components/SearchBar";
import UserInfo from "components/UserInfo";
import UserDetails from "components/UserDetails";

const GithubFinder = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <SearchBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: "1rem",
        }}
      >
        <UserInfo />
        <UserDetails />
      </Box>
    </Container>
  );
};

export default GithubFinder;
