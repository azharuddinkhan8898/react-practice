import React, { Component } from 'react';
import Users from "./users"
import Adduser from './adduser';

class App extends Component {
  state={
    users:[
      {name:"azhar", age:24, id:1},
      {name:"azhar1",age:25, id:2},
      {name:"xsvcs",age:34, id:3}
    ]
  }
  userDeleteHandler = (id) => {
    let users = [...this.state.users];
    let newuser = users.filter(usr => id !== usr.id)
    this.setState({
      users:newuser
    })
  }
  adduser = (user) => {
    user.id = Math.random();
    let users = [...this.state.users, user]
    this.setState({
      users:users
    })
  }
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <Users users={this.state.users} deleteHandler = {this.userDeleteHandler}/>
        <Adduser adduser = {this.adduser}/>
      </div>
    );
  }
}

export default App;
