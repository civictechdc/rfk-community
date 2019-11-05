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
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item xs={6}>
          <Card className={classes.helperCard}>
            <CardHeader title="We are a group of Washington DC Residents" />
            <CardContent className={classes.cardContent}>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(WhoAreWe);
