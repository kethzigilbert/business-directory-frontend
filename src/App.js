import { Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Route, Routes } from 'react-router-dom'
import './App.css';
import BusinessDetails from './views/BusinessDetails';
const useStyles = makeStyles({
  root: {
    height: '100vh',

  }
})

function App() {
  const classes = useStyles()
  return (

    <Paper className={classes.root + ' m-5 container'} elevation={20}>

      <Routes>
        <Route path='/' element={<BusinessDetails />} />
        <Route path='/places/:placeId' element={<BusinessDetails />} />
      </Routes>

    </Paper>

  );
}

export default App;
