import React, { Component } from 'react'
export default class UserLogout extends Component {
 
 logout = () => {
    localStorage.clear();
    window.location.href = "/UserLogin";
  }
 
  render() {
    return (
      <button style={{color:'white',backgroundColor:'rgb(57, 67, 64)',border:'none'}} onClick={this.logout}>Logout</button>
    )
  }
}