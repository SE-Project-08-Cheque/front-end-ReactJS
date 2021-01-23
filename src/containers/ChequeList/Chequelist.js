import React, {Component} from 'react';
import {Listtable} from '../../components/Chequelist/Listtable';

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
        return(
          <Listtable modal={this.state.modal} change={this.Changemodal} open={this.state.modalopen} close={this.closemodal}/>
        );
    }
}
export default ListBuilder;
