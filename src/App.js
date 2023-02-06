import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import AboutUs from './pages/screens/AboutUs';
import MainPage from './pages/screens/homePage/MainPage';

function App() {
  return (
    <div className="react-main">
      <Switch>
        <Route exact path={'/'} component={MainPage} />

        {/* <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutUs} /> */}
      </Switch>
    </div>
  );
}

export default App;
