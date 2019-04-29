import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Gravatar from 'react-gravatar'
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginTop: '1rem',
    marginLeft: '1rem',
    maxWidth: 500,
  },
  image: {
    width: 75,
    height: 75,
  },
  avatar:{
    margin: 'auto',
    display: 'block',
    width: 75,
    height: 75,
  }
});

class ProfileCard extends React.Component {

  //  gravatarUrl(email) {
  //   const lowerCaseEmail = email.toLowerCase()
  //   return `http://www.gravatar.com/avatar/${md5(lowerCaseEmail)}`;
  // }

  // const Gravatar = ({email}) => <img src={gravatarUrl(email)} />;

  // Gravatar.propTypes = {
  //   email: React.PropTypes.string.isRequired
  // };
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={16}>
            <Grid item>
              <ButtonBase className={classes.image}>
              <Avatar className ={classes.avatar} src="http://www.gravatar.com/avatar/"/>

              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="row" spacing={16}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    @Username
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );

  }
}
ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ProfileCard);
