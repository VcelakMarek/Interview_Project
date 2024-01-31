import { Link, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useUserDataContext } from "context/useUserDataContext";

const Repository = () => {
  const { userRepos } = useUserDataContext();
  const HEADERS = ["Name", "Description", "Link"];
  const XS_VALUES = [5, 6, 1];
  const XS_VALUES1 = [0, 5, 6, 1];

  const formattedUserRepos = userRepos.map((userRepo) => ({
    id: userRepo.id,
    name: userRepo.name,
    description: userRepo.description,
    html_url: userRepo.html_url,
  }));

  return (
    <Grid container spacing={2}>
      {/* Header Row */}
      <Grid item xs={12}>
        <Paper>
          <Grid container>
            {HEADERS.map((header, index) => (
              <Grid
                item
                key={header}
                xs={XS_VALUES[index]}
                sx={index === HEADERS.length - 1 ? { textAlign: "center" } : {}}
              >
                <Typography variant="h6">{header}</Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>

      {/* Data Rows  */}
      {formattedUserRepos.map((userRepo) => (
        <Grid item xs={12} key={userRepo.id}>
          <Paper sx={{ padding: "0.5rem" }}>
            <Grid container>
              {Object.entries(userRepo).map(([key, value], index) => {
                if (key !== "id") {
                  return (
                    <Grid
                      item
                      key={key}
                      xs={XS_VALUES1[index]}
                      sx={
                        index === HEADERS.length ? { textAlign: "center" } : {}
                      }
                    >
                      {key === "html_url" ? (
                        <Link
                          href={String(value)}
                          target="_blank"
                          rel="noopener"
                          component="a"
                        >
                          <FontAwesomeIcon icon={faLink} />
                        </Link>
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

export default Repository;
