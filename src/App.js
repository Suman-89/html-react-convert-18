import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/screens/HomePage';
import AboutUs from './pages/screens/AboutUs';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
