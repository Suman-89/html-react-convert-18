import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/screens/homePage/MainPage';
import AboutUs from './pages/screens/aboutUs/AboutUs';

function App() {
  return (
    <div className="react-main">
      <Switch>
        <Route exact path={'/'} component={MainPage} />
        <Route exact path={'/aboutus'} component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
