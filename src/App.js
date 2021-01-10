import './App.css';
import AppBar from './components/AppBar'
import ChipVariants from './components/ChipVariants'
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PlantBox from './components/PlantBox';
import PlantData from './components/PlantData';
import Navbar from './components/Navbar';
import YourPlants from './components/YourPlants';
import { useSelector } from 'react-redux';

function App() {

  const plantBoxState = useSelector(state => state.plantBoxOpen)
  const plantView = useSelector(state => state.plantView)

  return (
    <div className="App">
      <CssBaseline />
      <AppBar />
      <Divider />
      {
        !plantView ?
        (plantBoxState ?
          <>
            <Box display="flex" justifyContent="space-between" alignItems="center" p={3} pl={3} pr={3}>
              <Typography variant="h5">
                Indoor Plants
              </Typography>
              <Typography variant="button" display="block" style={{ fontSize: "12px", color: "#618833", fontWeight: "bold" }}>
                show filters
            </Typography>
            </Box>
            <Divider />
            <ChipVariants />
            <Divider />
            <PlantBox />
          </>

          :


          <PlantData /> ): <YourPlants />
      }
      <Navbar />

    </div>
  );
}

export default App;
