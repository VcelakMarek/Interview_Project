import { useState, SyntheticEvent } from "react";
import UserDetailCustomPanel from "components/UserDetailCustomPanel";
import Repository from "components/Repository";
import Organization from "components/Organization";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useUserDataContext } from "context/useUserDataContext";

const UserDetails = () => {
  const [value, setValue] = useState(0);
  const { userRepos, userOrgs } = useUserDataContext();

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (Object.keys(userRepos || userOrgs).length === 0) return null;

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Repositories" />
          <Tab label="Organizations" />
        </Tabs>
      </Box>
      <UserDetailCustomPanel value={value} index={0}>
        {userRepos?.length ? (
          <Repository />
        ) : (
          <Typography>No user repositories available.</Typography>
        )}
      </UserDetailCustomPanel>
      <UserDetailCustomPanel value={value} index={1}>
        {userOrgs?.length ? (
          <Organization />
        ) : (
          <Typography>No user organizations available.</Typography>
        )}
      </UserDetailCustomPanel>
    </Box>
  );
};

export default UserDetails;
