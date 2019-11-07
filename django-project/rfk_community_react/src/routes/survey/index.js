import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    height: '100%',
    top: '50%',
    marginTop: theme.spacing(10)
  }
});

const Survey = ({ classes }) => {
  return (
    <Grid
      container
      direction="row"
      className={classes.container}
      alignItems="center"
      justify="center">
      <Grid item xs={8}>
        <Paper>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe7yxvmqGBvLrWxhjcB-_5qEnafwV5LOyo7qULc0_zhI91cag/viewform?embedded=true"
            width="640"
            height="947"
            frameborder="0"
            marginheight="0"
            marginwidth="0">
            Loading…
          </iframe>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Survey);
