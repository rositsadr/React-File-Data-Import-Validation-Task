import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Home Page</h1>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/test">Test Page</NavLink>
      <NavLink to="/post">Post Page</NavLink>
      <Outlet />
    </div>
  );
}

export default App;
