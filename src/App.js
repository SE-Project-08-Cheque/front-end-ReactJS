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

import UserList from './components/pages/StaffPages/containers/CustomerTable';

import Staff from './components/pages/StaffPages/containers/StaffviewProfile';
import Userlist from './components/pages/StaffPages/containers/CustomerTable';
import Sprofile from './components/pages/StaffPages/containers/StaffviewProfile';
import StaffChange from './components/pages/StaffPages/containers/StaffChangeDetails';
import StaffPassChange from './components/pages/StaffPages/containers/StaffChangePassword';
import PinChange from './components/pages/StaffPages/containers/Security pin change requests page';

import NewRegisterRequest from'./components/pages/StaffPages/containers/NewRegisterRequsts';
import Cheque from './components/pages/StaffPages/containers/GetChequeRequests';

import mod from './components/pages/StaffPages/components/GetChequeRequests/OneChequeModel';



function App() {
  return (
    <Router>
      <ChakraProvider>
        
        <Switch>
          
          <Route path="/StaffDashboard"  component={Staff} />
          <Route path="/CustomerDetails"  component={UserList} />
          <Route path="/view"  component={Sprofile} />
          <Route path="/changeDetails" component={StaffChange}/>
          <Route path="/ChangePassword" component={StaffPassChange}/>

          <Route path="/pin" component={PinChange}/>

          <Route path="/join" component={NewRegisterRequest}/>
          <Route path="/cheque" component={Cheque}/>

          <Route path="/mod" component={mod}/>





          








         




        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
