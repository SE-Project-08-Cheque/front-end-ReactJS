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
import Dashboard from './pages/Dashboard';
import ChangePassword from './pages/ChangePassword';
import ChangeDetails from './pages/ChangeDetails';

import userSignIn from './pages/userSignIn';
import userSignUp from './pages/userSignUp';
import forgotPass from './pages/ForgotPass';

import Welcome from './pages/Welcome';
import SignIn from './components/signin';
import SignUp from './components/signup';


function App() {
  return (
    <Router>
      <ChakraProvider>
        <Navbar heading='onlineCheque'/>
        <Switch>
          <Route path="/welcome" exact component={Welcome} />
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/changePassword" component={ChangePassword} />
          <Route path="/changeDetails" component={ChangeDetails} />
<<<<<<< HEAD
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/Welcome" exact component={Welcome} />
=======

          <Route path="/userSignUp" component={userSignUp} />
          <Route path="/userSignIn" component={userSignIn} />
          <Route path="/forgotPass" component={forgotPass} />

          <Route path="/*" exact component={Welcome} />

>>>>>>> 81c900d7c34e3439895072d4f4fdd8d13087b094
        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
