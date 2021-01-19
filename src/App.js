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
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Dashboard from './components/pages/Dashboard';
import UserList from './components/pages/StaffPages/containers/CustomerTable';

import Staff from './components/pages/StaffPages/containers/StaffDashboard';
import Userlist from './components/pages/StaffPages/containers/CustomerTable';

function App() {
  return (
    <Router>
      <ChakraProvider>
        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          
         

          
          <Route path="/StaffDashboard"  component={Staff} />
          <Route path="/CustomerDetails"  component={UserList} />


        </Switch>
      </ChakraProvider>
    </Router>
  );
}

export default App;
