import React, {Component} from 'react';
import Cheq from '../../components/Cheq/Cheq';
import InputForm from '../../components/Chequeform/Chequeform';
import './ChequeBulider.css';
class ChequeBuilder extends Component{
    state ={
        cheque:{name:'Dakshitha Suriyaaratchie',designation:'Manager', company:'John Keels Pvt LTD', city:'Colombo',reason1:'',reason2:'',amount:'', payto:'',pay:'',date:new Date().toISOString().slice(0, 10)},
        cross: false,
      }
      ChangeHandler = (event,t)=>{
        const cheque1= {...this.state.cheque};
        cheque1[t]=event.target.value;
        this.setState({
          cheque:cheque1
        });
      }
      Submitdata = (event)=>{
        event.preventDefault();
        const data={...this.state.cheque};
        console.log(data);
      }
    render(){
        return(
            <>
                <div className="center" ><Cheq
                name={this.state.cheque.name}
                designation={this.state.cheque.designation}
                company={this.state.cheque.company}
                city={this.state.cheque.city}
                reason1={this.state.cheque.reason1}
                reason2={this.state.cheque.reason2}
                amount={this.state.cheque.amount}
                payto={this.state.cheque.payto}
                date={this.state.cheque.date}
                /></div>
                <InputForm 
                change={this.ChangeHandler} 
                reason1={this.state.cheque.reason1}
                reason2={this.state.cheque.reason2}
                amount={this.state.cheque.amount}
                payto={this.state.cheque.payto}
                date={this.state.cheque.date}
                submit={this.Submitdata}/>
            </>
        );
    }
}
export default ChequeBuilder;