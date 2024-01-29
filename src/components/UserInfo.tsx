import useUserDataContext from "components/useUserDataContext";
import { Box, Card, List, ListItem, ListItemText, Link } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const UserInfo = () => {
  const { userData } = useUserDataContext();
  const { userInfo } = userData;

  return (
    <Box>
      <Card sx={{ width: 345 }}>
        <CardMedia
          sx={{ height: 345, width: 345 }}
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
              <Link href={userInfo?.blog} color="inherit">
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
