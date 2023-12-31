// import {React} from "react";

import {
  Typography,
  Grid,
  makeStyles,
  Button,
  Avatar
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/clear";
//import verified from "./src/assets/verified.png";
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => ({
  page: {
    padding: theme.spacing(10)
  },
  root: {
    border: `1px solid ${theme.palette.secondary[400]}`,
    padding: theme.spacing(2),
    borderRadius: "2px",
    maxWidth: 200
  },
  header: {
    color: theme.palette.grey[400],
    height: "15px"
  },
  photoContainer: {
    marginBottom: theme.spacing(1)
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  verified: {
    height: 20
  },
  channelUserName: {
    fontWeight: theme.typography.fontWeightBold
  },
  chanelNameContainer: {
    marginBottom: theme.spacing(1)
  },
  followButton: {
    textTransform: "none",
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    fontWeight: theme.typography.fontWeightMedium
  }
}));

export const InstaFollow = () => {
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.root}
      >
        <Header classes={classes} />
        <ChannelPhoto classes={classes} />
        <ChannelUserName classes={classes} />
        <ChannelName classes={classes} />
        <FollowButton classes={classes} />
      </Grid>
    </div>
  );
};



const Header = ({ classes }) => {
    return (
        <Grid container justify="flex-end">
            <Grid item xs={1}>
                <ClearIcon className={classes.header} />
            </Grid>
        </Grid>
    );
};

Header.propTypes = {
    classes: PropTypes.shape({
        header: PropTypes.string.isRequired,
    }).isRequired,
};
const ChannelPhoto = ({ classes }) => {
    return (
        <div className={classes.photoContainer}>
            <Avatar
                className={classes.avatar}
                alt="Nat Geo"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQqLXPdwanG-kTsMGmC6Ff4lmKkw1LBy4G4G1tYxDNWV-8MCAI&usqp=CAU"
            />
        </div>
    );
};

ChannelPhoto.propTypes = {
    classes: PropTypes.shape({
        photoContainer: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    }).isRequired,
};
// Remove this line since PropTypes is already imported in the file
// import PropTypes from 'prop-types';

const ChannelUserName = ({ classes }) => {
    return (
        <Grid container justify="center" alignItems="center" spacing={5}>
            <Grid item xs={3}>
                <Typography variant="body2" className={classes.channelUserName}>
                    natgeo
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <img className={classes.verified} alt="verfied" src="./src/assets/verified.png" />
            </Grid>
        </Grid>
    );
};

ChannelUserName.propTypes = {
    classes: PropTypes.shape({
        channelUserName: PropTypes.string.isRequired,
        verified: PropTypes.string.isRequired,
    }).isRequired,
};
// Remove this line since PropTypes is already imported in the file
// import PropTypes from 'prop-types';

const ChannelName = ({ classes }) => {
    return (
        <div className={classes.chanelNameContainer}>
            <Typography color="textSecondary" variant="caption">
                National Geographic
            </Typography>
        </div>
    );
};

ChannelName.propTypes = {
    classes: PropTypes.shape({
        chanelNameContainer: PropTypes.string.isRequired,
    }).isRequired,
};
const FollowButton = ({ classes }) => {
    return (
        <Button
            disableElevation
            color="primary"
            variant="contained"
            size="small"
            className={classes.followButton}
        >
            Follow
        </Button>
    );
};

FollowButton.propTypes = {
    classes: PropTypes.shape({
        followButton: PropTypes.string.isRequired,
    }).isRequired,
};