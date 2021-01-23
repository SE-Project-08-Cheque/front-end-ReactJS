import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import ChangePassword from './pages/ChangePassword';
import ChangeDetails from './pages/ChangeDetails';

import Welcome from './pages/Welcome'; 
import userSignIn from './pages/userSignIn'; 
import userSignUp from './pages/userSignUp'; 
import forgotPass from './pages/ForgotPass'; 
import EnterPin from './pages/EnterPin';
import EnterNewPassword from './pages/EnterNewPassword';



function App() {

  const DefaultPageRoute = ({ component: Component, ...rest }) => {
    return (
      <Route {...rest} component={(props) => (
        <div>
        <Navbar heading='onlineCheque'/>
          <Component {...props} />
          <Footer />
        </div>
      )}
      />
    );
  }

  const LandingPageRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        component={(props) => (<Component {...props} />)}
      />
    );
  }

  const NavigationPageRoute = ({ component: Component, ...rest }) => {
    return (
      <Route {...rest} component={(props) => (
        <div>
        <Navbar heading='onlineCheque'/>
          <Component {...props} />
        </div>
      )}
      />
    );
  }


  return (
    <Router>
      <ChakraProvider>

        <Switch>
          <DefaultPageRoute path="/customerHome" exact component={Home} />
          <NavigationPageRoute path="/custdashboard" component={Dashboard} />
          <NavigationPageRoute path="/custchangePassword" component={ChangePassword} />
          <DefaultPageRoute path="/custchangeDetails" component={ChangeDetails} />
          <DefaultPageRoute path="/usersignin" component={userSignIn} />
          <DefaultPageRoute path="/usersignup" component={userSignUp} />
          <LandingPageRoute path="/" exact component={Welcome} />
          <LandingPageRoute path="/forgotPassword" component={forgotPass} />
          <LandingPageRoute path="/enterpin" component={EnterPin} />
          <LandingPageRoute path="/newpass" component={EnterNewPassword} />
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
