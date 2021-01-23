import React, {Component} from 'react';
import {Listtable} from '../../components/Chequelist/Listtable';
import {Tabs,TabList,Tab,TabPanels,TabPanel} from "@chakra-ui/react"

class ListBuilder extends Component{

    state ={
        modal:'',
        modalopen:false
      }
      Changemodal = (event,t)=>{
        console.log(t)
        this.setState({
          modal:t,
          modalopen:true
        });
      }
      closemodal = (event)=>{
          this.setState({
              modalopen:false
          })
      }

    render(){
        return (
          <Listtable modal={this.state.modal} change={this.Changemodal} open={this.state.modalopen} close={this.closemodal}/>
          // <Tabs size="md" variant="enclosed" width="75%" margin="auto">
          //   <TabList>
          //     <Tab>One</Tab>
          //     <Tab>Two</Tab>
          //   </TabList>
          //   <TabPanels>
          //     <TabPanel>
          //       <Listtable
          //         modal={this.state.modal}
          //         change={this.Changemodal}
          //         open={this.state.modalopen}
          //         close={this.closemodal}
          //       />
          //     </TabPanel>
          //     <TabPanel>
          //       <p>two!</p>
          //     </TabPanel>
          //   </TabPanels>
          // </Tabs>
        );
    }
}
export default ListBuilder;
