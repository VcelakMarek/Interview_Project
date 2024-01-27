import { useContext } from "react";
import { UserDataContext } from "context/userData.context";
import { Box, Card, List, ListItem, ListItemText, Link } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const UserInfo = () => {
  const { userData } = useContext(UserDataContext);

  console.log("userData:", userData);

  return (
    <Box>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 345, width: 345 }}
          image={userData.avatar_url}
          title={`${userData.name}_profile_picture`}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {userData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userData.bio}
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemText primary={userData.company} />
            </ListItem>

            <ListItem disablePadding>
              <ListItemText primary={userData.location} />
            </ListItem>

            <ListItem disablePadding>
              <ListItemText primary={userData.email} />
            </ListItem>

            <ListItem disablePadding>
              <Link href={userData.blog} color="inherit">
                {userData.blog}
              </Link>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserInfo;
