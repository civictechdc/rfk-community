import React, { useEffect, useState } from 'react';
import { Paper, Grid, CircularProgress } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    height: '70vh',
    marginTop: theme.spacing(10),
    pointerEvents: 'initial'
  }
});

const Survey = ({ classes }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.getElementById('survey-container').innerHTML =
      '<iframe id="survey" src="https://docs.google.com/forms/d/e/1FAIpQLSe2_yC4xkRUAltnl3cTGzVezfE9Q3-jxh7Qv9w7OxqzlmMk7g/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>';
    setLoading(true);
    document.getElementById('survey').onload = function() {
      setLoading(false);
    };
  }, []);

  return (
    <Grid
      container
      direction="row"
      className={classes.container}
      justify="center"
      alignItems={loading ? 'center' : ''}>
      <Grid item xs={8}>
        {loading && <CircularProgress></CircularProgress>}
        <div
          id="survey-container"
          style={{ display: `${loading ? 'none' : 'initial'}` }}></div>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Survey);
