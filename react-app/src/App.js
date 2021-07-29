import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Home from './componentes/Home/Home'
import Login from './componentes/Login/Login';
import Dashboard from './componentes/Dashboard/Dashboard';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  axios.defaults.withCredentials = true;
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/dashboard">
            <Dashboard />
          </Route>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
