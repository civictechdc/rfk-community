import React, { useState } from 'react';
import {
  Container,
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
    minWidth: 300
  },
  container: {
    height: '100%',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(8)
  },
  button: {
    borderRadius: '20px'
  },
  cardContent: {
    boxShadow: 'inset 0 0 0 1px hsla(0, 0%, 0%, .1)'
  }
});

const Home = ({ classes, history }) => {
  return (
    <>
      <Grid container direction="column" className={classes.container}>
        <Grid container direction="row">
          <Grid item xs={7}></Grid>
          <Grid item xs={4}>
            <Card className={classes.helperCard}>
              <CardHeader title="What would you like built at the RFK Site?" />
              <CardContent className={classes.cardContent}>
                <div>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga..
                </div>
                <Box mt={2}>
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
