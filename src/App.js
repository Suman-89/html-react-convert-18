import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/screens/homePage/MainPage';
import AboutUs from './pages/screens/aboutUs/AboutUs';
import OurService from './pages/screens/OurService/OurService';
import ContactUs from './pages/screens/ContactUs/ContactUs';

function App() {
  return (
    <div className="react-main">
      <Switch>
        <Route exact path={'/'} component={MainPage} />
        <Route exact path={'/aboutus'} component={AboutUs} />
        <Route exact path={'/ourservice'} component={OurService} />
        <Route exact path={'/contactus'} component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
