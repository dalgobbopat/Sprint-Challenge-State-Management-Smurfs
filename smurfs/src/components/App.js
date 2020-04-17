import React, { Component } from "react";
import "./App.css";
import Smurf from './Smurf';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
           <h1>SMURFS WORLD</h1>
             <Form />
        </nav>
        <div className='container'>
             <Smurf />
        </div>
       
        
      </div>
    );
  }
}

export default App;
