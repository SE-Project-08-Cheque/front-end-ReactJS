import React, {Component} from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import ChequeBuilder from './containers/ChequeBuilder/ChequeBuilder';

class App extends Component{
  render(){
    return(
      <div>
        <Layout>
          <ChequeBuilder/>
        </Layout>
      </div>
    );
  }
}
export default App;