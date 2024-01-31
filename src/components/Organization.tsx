import { Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useUserDataContext } from "context/useUserDataContext";

const Organization = () => {
  const { userOrgs } = useUserDataContext();
  const HEADERS = ["Name", "Description"];
  const XS_VALUES = [5, 6, 1];
  const XS_VALUES1 = [0, 5, 6, 1];

  const formatteduserOrgs = userOrgs.map((userOrg) => ({
    id: userOrg.id,
    name: userOrg.login,
    description: userOrg.description,
    avatar_url: userOrg.avatar_url,
  }));

  return (
    <Grid container spacing={2}>
      {/* Header Row */}
      <Grid item xs={12}>
        <Paper>
          <Grid container>
            {HEADERS.map((header, index) => (
              <Grid item key={header} xs={XS_VALUES[index]}>
                <Typography variant="h6">{header}</Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>

      {/* Data Rows  */}
      {formatteduserOrgs.map((userOrg) => (
        <Grid item xs={12} key={userOrg.id}>
          <Paper sx={{ padding: "0.5rem" }}>
            <Grid container>
              {Object.entries(userOrg).map(([key, value], index) => {
                if (key !== "id") {
                  return (
                    <Grid item key={key} xs={XS_VALUES1[index]}>
                      {key === "avatar_url" ? (
                        <Avatar alt="avatar_url" src={String(value)} />
                      ) : (
                        <Typography variant="body1">{value}</Typography>
                      )}
                    </Grid>
                  );
                }
              })}
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Organization;
