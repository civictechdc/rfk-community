import React from 'react';
import { Card, CardHeader, Grid, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  helperCard: {
    color: theme.palette.secondary.main
  },
  cardContent: {
    boxShadow: 'inset 0 0 0 1px hsla(0, 0%, 0%, .1)'
  },
  container: {
    height: '100%',
    marginTop: theme.spacing(10)
  }
});

const WhoAreWe = ({ classes }) => {
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={1} sm={3} md={5}></Grid>
        <Grid item xs={10} sm={8} md={6}>
          <Card className={classes.helperCard}>
            <CardHeader title="We are a group of Washington DC Residents" />
            <CardContent className={classes.cardContent}>
              We are a group of Washington DC residents who want to make sure
              that the public gets a say in what happens at the RFK site.
              Whether we build a new football stadium, houses, parks or
              something else, we think it’s crucial that the conversation happen
              out in the open with the full participation of the entire city. We
              decided to build a survey tool to help kickstart that community
              engagement and allow us to pass on the ideas and preferences of DC
              residents to their political leaders. Help us out by taking our
              survey and sharing it!
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(WhoAreWe);
