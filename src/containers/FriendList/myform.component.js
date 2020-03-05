import React, { useState } from "react";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { friendId: '' };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>  {this.state.username}</h1>
        <p>Enter your friends webid:</p>
        <input
          type='text'
         />
        <input
          type='submit'
        />
      </form>
    );
  }
}
