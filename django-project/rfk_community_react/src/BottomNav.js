import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Email } from '@material-ui/icons';
import { Facebook, Twitter, Instagram } from 'mdi-material-ui';
import { MemoryRouter as Router } from 'react-router';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    boxShadow: 'inset 0 0 0 1px hsla(0, 0%, 0%, .1)',
    height: 56,
    backgroundColor: 'white'
  },
  button: {
    flex: '1',
    color: 'rgba(0, 0, 0, 0.54)',
    padding: '6px 12px 8px',
    maxWidth: '168px',
    minWidth: '80px',
    transition:
      'color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,padding-top 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    height: '100%'
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        label="Facebook"
        onClick={() => window.open('https://codefordc.org/')}>
        <Facebook />
      </Button>
      <Button
        className={classes.button}
        label="Instagram"
        onClick={() => window.open('https://codefordc.org/')}>
        <Instagram />
      </Button>
      <Button
        className={classes.button}
        label="Twitter"
        onClick={() => window.open('https://codefordc.org/')}>
        {' '}
        <Twitter />
      </Button>
      <Button
        className={classes.button}
        onClick={() => window.open('https://codefordc.org/')}>
        <Email />
      </Button>
    </div>
  );
}
