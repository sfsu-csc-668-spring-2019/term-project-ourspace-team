import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleShowing } from '../../actions/mapActions'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Gravatar from 'react-gravatar';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  submit: {
    marginLeft: 435
  }
});

class CommentsSection extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      isShowing: '',
      openedPlace: '',
      slideIndex: 1,
      comment: ''
    }

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onClick = ( e ) => {
    e.preventDefault();
    this.setState({
      comment: ''
    });
    const updateShowing = ( this.props.isShowing === "none") ? "" : "none";
    this.props.toggleShowing( updateShowing );
  }

  componentDidMount() {
    this.setState({
      isShowing: 'none',
      openedPlace: {}
    });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e =>{
   e.preventDefault();

   const response = await fetch("/putCommentOnPlace", {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify({
       description: this.state.comment,
       place_id: this.props.openedPlace.place_id
     })
   }).catch(error => console.log(error));

   return;
  }

  render() {
    const { classes } = this.props;

    let placePhotos;
    if( this.props.openedPlace.photos !== undefined ) {
      placePhotos = <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {this.props.openedPlace.photos.map(tile => (
          <GridListTile key={tile}>
            <img src={tile} alt={tile} />
          </GridListTile>
        ))}
      </GridList>
    } else {
      placePhotos = <GridList></GridList>
    }

    let comments;
    if( this.props.placeComments !== undefined) {
      comments = this.props.placeComments.map( comment => (
        <ListItem className={classes.listItem}>
          <ListItemText
            primary={comment.description}
          />
        </ListItem>
      ));
    } else {
      comments = <ListItem className={classes.listItem}></ListItem>
    }

    return (
        <div
          id="place-comments"
          style={{height: "80%", width:"90%", marginBottom: "5%", display: this.props.isShowing, overflowY: "scroll" }}
          className="container"
        >
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>

          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs float-sm-right">
                <li className="nav-item">
                 <button type="button" className="btn btn-dark" onClick={this.onClick}>X</button>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div>
                <h5 className="card-title"id="place-comments-title">{this.props.openedPlace.name}</h5>
                <p id="place-comments-address">{this.props.openedPlace.address}</p>
                <p id="place-comments-phone">{this.props.openedPlace.phone}</p>
              </div>
              <Grid container>
                <Grid item style={{overflowY: "scroll"}}>
                  {placePhotos}
                </Grid>
                <Grid item></Grid>
                <Grid item style={{width: 500}}>
                  <TextField
                    id="filled-full-width"
                    label="Join the Conversation"
                    style={{ margin: 8 }}
                    placeholder="Enter a Comment"
                    fullWidth
                    margin="normal"
                    variant="filled"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    name="comment"
                    value={this.state.comment}
                    onChange={this.onChange}
                  />

                  {/* Login Button */}
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={this.onSubmit}
                    classes={"align-items-xs-flex-end"}
                  >
                    Share
                  </Button>

                  <List >
                    {comments}
                  </List>
                </Grid>
              </Grid>
            </div>
          </div>

        </div>
  );
  }
}

CommentsSection.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleShowing: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isShowing: state.maps.isShowing,
  openedPlace: state.maps.openedPlace,
  placeComments: state.maps.placeComments
});

export default connect(mapStateToProps, { toggleShowing })(withStyles(styles)(CommentsSection));
