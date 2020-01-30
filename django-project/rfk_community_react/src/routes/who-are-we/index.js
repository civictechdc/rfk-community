import React from 'react';
import { Card, CardMedia, Grid, CardContent, Box, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Logo from './code-for-dc-logo-text-bottom.png';

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
  },
  avatar: {
    height: 80,
    width: 80,
    background: 'white'
  }
});

const WhoAreWe = ({ classes }) => {
  return (
    <Grid container direction="column" className={classes.container}>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={1} sm={3} md={5}></Grid>
        <Grid item xs={10} sm={8} md={6}>
          <Card className={classes.helperCard}>
            <Box mb={2} mt={2} style={{ fontSize: '1.5rem' }}>
              Who made this survey?
            </Box>
            <CardContent className={classes.cardContent}>
              <Box mb={1} style={{ cursor: 'pointer' }} onClick={() => window.open('https://codefordc.org')}>
                <img src={Logo} style={{ width: 50 }} />
              </Box>
              <Box style={{ textAlign: 'left' }}>
                <p>This website is a project of volunteers with Code for DC and the office of Ward 6 Councilmember Charles Allen. </p> <p>It is our goal to open up the conversation around the future of the RFK campus and give DC residents a voice in what the space could be used for, including the possibility of an NFL stadium, but without limiting the opportunity to build houses, parks, or more. </p> We decided to build a survey tool to help kickstart the community engagement and conversation.
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid >
  );
};

export default withStyles(styles)(WhoAreWe);
