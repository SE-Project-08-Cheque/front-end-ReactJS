import React, {Component} from 'react';
import './App.css';
import ChequeBuilder from './containers/ChequeBuilder/ChequeBuilder';
import ListBuilder from './containers/ChequeList/Chequelist';
import { ChakraProvider } from "@chakra-ui/react"

class App extends Component{
  render(){
    return(
      <ChakraProvider>
        <div>
          <ChequeBuilder/>
          {/* <ListBuilder/> */}
      </div>
      </ChakraProvider>
      
    );
  }
}
export default App;