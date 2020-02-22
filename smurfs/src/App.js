import React from "react";
import "./App.css";
import Header from './components/header'
import Smurf from './components/Smurf'
import NewSmurf from './components/NewSmurf'
 function App() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Header/>
        <NewSmurf/>
        <Smurf/>
      </div>
    );
}

export default App;
