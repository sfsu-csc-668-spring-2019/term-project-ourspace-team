import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Gravatar from 'react-gravatar';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { connect } from 'react-redux';
import { saveUserData } from '../../actions/userActions';


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

  gravatar: {
    margin: 'auto',
    display: 'block',
    width: 75,
    height: 75,
    borderRadius: '50px',
  }
});

class ProfileCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: ''
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={16}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <Gravatar email={this.props.email} className={classes.gravatar}/>
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="row" spacing={16}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    @ {this.props.username}
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

const mapStateToProps = state => ({
  email: state.user.email,
  username: state.user.username,
});

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps,{saveUserData})( withStyles(styles)(ProfileCard));
