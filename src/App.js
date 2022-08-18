import { Box, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

import './App.css';
import BusinessDetails from './views/BusinessDetails';
const useStyles = makeStyles({
  root :{
    height: '100vh',

  }
})
function App() {
  const classes = useStyles()
  return (
    <Paper className={classes.root+ ' m-5 container'} elevation={20}>
   
    <BusinessDetails/>

     </Paper> 
  );
}

export default App;
