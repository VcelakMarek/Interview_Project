import { useState } from "react";
import { AppBar, Button, TextField, CircularProgress } from "@mui/material";
import { fetchUserData } from "api/userDataAPI";

type Props = {
  isFetching: boolean;
  handleSearch: () => void;
};

const SearchBar = () => {
  const [userName, setUserName] = useState("");
  const { isFetching, handleSearch }: Props = fetchUserData({
    userName,
  });

  return (
    <AppBar
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      position="static"
      color="transparent"
    >
      <TextField
        id="SearchUser"
        placeholder="Search User"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <Button variant="contained" onClick={handleSearch}>
        {!isFetching ? "Search" : <CircularProgress color="inherit" />}
      </Button>
    </AppBar>
  );
};

export default SearchBar;
