import React from 'react';
import './index.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import BG from './static/bg_home.png';

const styles = theme => ({
  bg: {
    backgroundImage: `url(${BG})`,
    height: '100vh',
    width: '100%',
    backgroundPposition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
});

const BackgroundImagePage = ({ classes, children }) => {
  return <div className={classes.bg}> {children} </div>;
};

export default withStyles(styles)(BackgroundImagePage);
