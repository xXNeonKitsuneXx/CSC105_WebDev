import FavoriteSites from './components/FavoriteSites';
import Gallery from './components/Gallery';
import Profile from './components/Profile';
import StateAssignmentOne from './components/StateAssignmentOne';
import StateAssignmentTwo from './components/StateAssignmentTwo';

import './index.css';
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <FavoriteSites/>
      <Profile/>
      <Gallery/>
      <StateAssignmentOne/>
      <StateAssignmentTwo/>
    </div>
  );
}

export default App;
