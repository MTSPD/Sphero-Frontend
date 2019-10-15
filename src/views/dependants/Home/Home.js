import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import {API} from 'helpers';
// import Button from '@material-ui/core/Button';
// import Fab from '@material-ui/core/Fab';
// import IconButton from '@material-ui/core/IconButton';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import NavigationIcon from '@material-ui/icons/Navigation';
// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


// test = () => {
//   console.log('123')
// }

export const Home = () => {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));
  
  const classes = useStyles();

  return (
    <div>      
      <button variant="outlined" color="primary" className={classes.button} onClick={()=>{API.ballroll({dir:1})}}>Frontward</button>
      <button variant="outlined" color="primary" className={classes.button} onClick={()=>{API.ballroll({dir:-1})}}>Backward</button>
    </div>
  )
}
