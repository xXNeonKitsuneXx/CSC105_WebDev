import './App.css'
import Content from './components/Content'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import Rightbar from './components/Rightbar'
import Box from '@mui/material/Box';

function App() {

  return (
    <div className="App">
      <Nav/>
      <Box style={{display: 'flex'}}>
        <Box display={{xs:"none",md:"flex"}}>
          <Sidebar/>
        </Box>

        <Box display={"flex"} >
          <Content/>
        </Box>

        <Box display={{xs:"none",md:"flex"}} >
          <Rightbar/>
        </Box>
      </Box>
    </div>
  )
}

export default App
