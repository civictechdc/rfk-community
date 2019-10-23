import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import './App.css';
import { flexbox } from '@material-ui/system';


const styles = theme => ({
  navBar: {
    color: 'purple',
    backgroundColor: 'white',
    height: '50px',
    display: 'block'
  },
  helperGrid: {
    backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/a/a4/RFK_Stadium_aerial_photo,_looking_towards_Capitol,_1988.jpg")',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    height: '100vh'
  },
  helperCard: {
    border: '1px solid red',
    opacity: 0.9
  }
})

function App({classes}) {
  return (
    <div className="App">
      <AppBar static className={classes.navBar}>
        <Grid container direction="row" alignItems="center" style={{height: '100%', marginLeft: '20px'}}>
          <Grid item>
            <Typography variant="h6">Rfk Community Project</Typography>
          </Grid>
        </Grid>
      </AppBar>
      <Container className={classes.helperGrid}>
      {/* <Grid container direction="column" className={classes.helperGrid} style={{height: '100vh'}} >
        <Grid container direction="row" container alignSelf="center" style={{top: '50vh', height: '300px'}}>
          <Grid item xs={8}></Grid>          
          <Grid item xs={4}>
            <Card>
              daf
            </Card>
          </Grid>
        </Grid>
      </Grid> */}
        <Card className={classes.helperCard} style={{height: '30rem', width:'30rem'}}>
          <CardHeader title="What"/>
          <CardContent>SURVEY LINK</CardContent>
        </Card>
      </Container>
    </div>
  );
}

export default withStyles(styles)(App);
 