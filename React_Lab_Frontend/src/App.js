import Home from './components/Home'
// import Todo from './components/Todo'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import TodayPage from './pages/TodayPage'
import CalendarPage from './pages/Calendar';
import TodoPage from './pages/TodoPage';

function App() {
  console.log(<TodoPage/>)
  return (
    <Routes>
      <Route exect path="/" element={<HomePage />}  />
      <Route path="/todo" element={<TodoPage />}  />
      <Route path="/today" element={<TodayPage />}  />
      <Route path="/calendar" element={<CalendarPage />}  />
    </Routes>
  );
}

export default App;
