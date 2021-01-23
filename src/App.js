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




import CustomerList from './pages/CustomerTable';
import StaffDashboard from './pages/StaffviewProfile';
import StaffChangeDetails from './pages/StaffChangeDetails';
import StaffPassChange from './pages/StaffChangePassword';
import PinChangeRequests from './pages/Security pin change requests page';
import NewRegisterRequests from'./pages/NewRegisterRequsts';
import AllChequeView from './pages/GetChequeRequests';


import Home from './pages/Home';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import ChangePassword from './pages/ChangePassword';
import ChangeDetails from './pages/ChangeDetails';

import userSignIn from './pages/userSignIn';
import userSignUp from './pages/userSignUp';
import forgotPass from './pages/ForgotPass';

import Welcome from './pages/Welcome';



function App() {
  return (
    <Router>
      <ChakraProvider>
        
        <Switch>

          
          <Route path="/StaffDashboard"  component={StaffDashboard} />
          <Route path="/CustomerDetails"  component={CustomerList} />
          <Route path="/StaffchangeDetails" component={StaffChangeDetails}/>
          <Route path="/StaffChangePassword" component={StaffPassChange}/>
          <Route path="/pinRequests"        component={PinChangeRequests}/>
          <Route path="/NewRegisterRequests"   component={NewRegisterRequests}/>
          <Route path="/cheques" component={AllChequeView}/>



          <Route path="/welcome" exact component={Welcome} />
          <Route path="/home" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/changePassword" component={ChangePassword} />
          <Route path="/changeDetails" component={ChangeDetails} />

          <Route path="/userSignUp" component={userSignUp} />
          <Route path="/userSignIn" component={userSignIn} />
          <Route path="/forgotPass" component={forgotPass} />

          <Route path="/*" exact component={Welcome} />


        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
