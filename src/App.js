import './App.css';
import { Component } from 'react';
import Login from './components/LoginReg/login'
import Maneger from "./components/maneger/mangerHome"
import Client from "./components/client/clientHome"


UNLOGEDIN = 0
CLIENTUSER = 1
MANEGERUSER = 2






class App extends Component{

constructor(){
  super()
  this.state = {
    userStatus:0,
    userId:null
  }
}


render(){
  let currentPage = null
  if(this.state.userStatus == UNLOGEDIN){
    currentPage = <Login logeIn = {this.setState} />
  }else if (this.state.userStatus == MANEGERUSER){
    currentPage = <Maneger mangerId = {this.state.userId}/>
  }else if (this.state.userStatus == CLIENTUSER){
    currentPage = <Client clientId = {this.state.userId}/>
  }

  return (

      <div>
        {currentPage}
      </div>
  );
}

} 

export default App;