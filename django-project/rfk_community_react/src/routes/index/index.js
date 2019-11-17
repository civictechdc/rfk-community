import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Button,
  Box
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';

const styles = theme => ({
  navBar: {
    color: 'purple',
    backgroundColor: 'white',
    height: '50px',
    display: 'block'
  },
  helperCard: {
    color: theme.palette.secondary.main,
    zIndex: 3,
    pointerEvents: 'initial'
  },
  container: {
    height: '100%',
    marginTop: theme.spacing(10)
  },
  button: {
    borderRadius: '20px',
    backgroundColor: theme.palette.primary.main
  },
  cardContent: {
    boxShadow: 'inset 0 0 0 1px hsla(0, 0%, 0%, .1)',
    fontSize: '12'
  },
  paragraph: {
    marginTop: 0
  }
});

const Home = ({ classes, history }) => {
  return (
    <>
      <Grid container direction="column" className={classes.container}>
        <Grid container direction="row">
          <Grid item xs={1} sm={3} md={5}></Grid>
          <Grid item xs={10} sm={8} md={6}>
            <Card className={classes.helperCard}>
              <CardHeader title="What would you like built at the RFK Stadium Site?" />
              <CardContent className={classes.cardContent}>
                <Typography variant="body" style={{ textAlign: 'initial' }}>
                  {' '}
                  {window.isMobile && (
                    <p className={classes.paragraph}>
                      {' '}
                      The RFK Stadium site is currently under control of the
                      federal government, but could soon be transferred to the
                      city. What do you think should go on the site? Take our
                      survey to share your thoughts!
                    </p>
                  )}
                  {!window.isMobile && (
                    <>
                      <p className={classes.paragraph}>
                        Built in 1961, RFK Memorial Stadium has played host to
                        football, soccer, baseball and more, but currently has
                        no tenants.{' '}
                      </p>
                      <p className={classes.paragraph}>
                        {' '}
                        The entire campus (stadium, parking and undeveloped
                        land) is currently under control of the federal
                        government, but could soon be transferred to the city.
                      </p>
                      <p className={classes.paragraph}>
                        At 190 acres – almost 6 city blocks – this would
                        instantly become one of the largest parcels of available
                        land in the city. Some people have proposed building a
                        new NFL stadium on the site, but others would prefer
                        adding things like housing, retail and parks. What do
                        you think should go on the site? Take our survey to
                        share your thoughts!{' '}
                      </p>
                    </>
                  )}
                </Typography>
                <Box mt={2} alignItems="center" justify="center">
                  <Button
                    className={classes.button}
                    onClick={() => history.push('/survey')}
                    size="medium"
                    variant="contained"
                    color="secondary">
                    Take Survey
                  </Button>
                </Box>
              </CardContent>
            </Card>
            <Grid item xs={1}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(withRouter(Home));
