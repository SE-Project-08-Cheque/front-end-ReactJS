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



        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
