import { Box, Card, List, ListItem, ListItemText, Link } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useUserDataContext } from "context/useUserDataContext";

const UserInfo = () => {
  const { userInfo } = useUserDataContext();

  if (!Object.keys(userInfo).length) {
    return null;
  }

  return (
    <Box>
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "column" },
          alignItems: "center",
          gap: "1rem",
          padding: "0.5rem",
        }}
      >
        <CardMedia
          sx={{ height: "21rem", width: "21rem" }}
          image={userInfo?.avatar_url}
          title={`${userInfo?.name}_profile_picture`}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {userInfo?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userInfo?.bio}
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemText primary={userInfo?.company} />
            </ListItem>

            <ListItem disablePadding>
              <ListItemText primary={userInfo?.location} />
            </ListItem>

            <ListItem disablePadding>
              <ListItemText primary={userInfo?.email} />
            </ListItem>

            <ListItem disablePadding>
              <Link
                href={userInfo?.blog}
                color="inherit"
                rel="noopener"
                target="_blank"
              >
                {userInfo?.blog}
              </Link>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserInfo;
