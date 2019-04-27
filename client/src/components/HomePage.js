import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import LoggedInTopBar from './LoggedInTopBar';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Map from './Map_Components/Map';
import '../App.css';
import { CardContent } from '@material-ui/core';

function generate(element) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(value =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

class HomePage extends Component {

    render() {
        return (
            <div>
                <LoggedInTopBar />

                <div>
                <Grid container spacing={24}>

                    <Grid container item xs={12} direction="row" spacing={24}>
                        <Grid container direction="row" item xs={4} spacing={12}>
                            <Grid item xs={12}>
                                <div>

                                    <Card>
                                        <CardContent>
                                            <Typography variant="title">Welcome to MapSpace</Typography>

                                        </CardContent>
                                    </Card>
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <div >
                                            <List >
                                                {generate(
                                                    <ListItem>
                                                        <ListItemText
                                                            primary="Single-line item"
                                                        />
                                                    </ListItem>,
                                                )}
                                            </List>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>


                        </Grid>
                        <Grid item xs={8} container direction="column">
                            <Map />
                        </Grid>
                    </Grid>
                </Grid>
                </div>
            </div>
        );
    }
}

export default HomePage;