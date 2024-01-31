import { useState } from "react";
import { AppBar, Button, TextField, CircularProgress } from "@mui/material";
import { fetchUserData } from "api/userDataAPI";

const SearchBar = () => {
  const [userName, setUserName] = useState("");
  const { isFetching, handleSearch } = fetchUserData({
    userName,
  });

  return (
    <AppBar
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "1rem",
        padding: "0.5rem",
      }}
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
      <Button variant="contained" disabled={!userName} onClick={handleSearch}>
        {!isFetching ? "Search" : <CircularProgress color="inherit" />}
      </Button>
    </AppBar>
  );
};

export default SearchBar;
