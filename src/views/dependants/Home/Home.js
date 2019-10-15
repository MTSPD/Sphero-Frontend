// import React from 'react'

// import { makeStyles } from '@material-ui/core/styles';
import {API} from 'helpers';
// import Button from '@material-ui/core/Button';
// import Fab from '@material-ui/core/Fab';
// import IconButton from '@material-ui/core/IconButton';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import NavigationIcon from '@material-ui/icons/Navigation';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export const Home = () => {
  
  const classes = useStyles();

  return (
    <div>   
    <Container maxWidth="sm">  
      <Grid item xs={12}>
        <Button variant="outlined" color="primary" className={classes.button} onClick={()=>{API.ballroll({dir:1})}}>Frontward</Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" color="primary" className={classes.button} onClick={()=>{API.ballroll({dir:-1})}}>Backward</Button>
      </Grid>
    </Container>   

    <Container maxWidth="sm">  
        <Button variant="outlined" color="primary" className={classes.button} onClick={()=>{API.balllight({col:"red"})}}>Red</Button>
        <Button variant="outlined" color="primary" className={classes.button} onClick={()=>{API.balllight({col:"green"})}}>Green</Button>
        <Button variant="outlined" color="primary" className={classes.button} onClick={()=>{API.balllight({col:"blue"})}}>Blue</Button>
    </Container>   
    </div>
  )
}
