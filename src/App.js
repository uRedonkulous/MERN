import React from "react";
import './App.css';
import PersonCard from "./components/PersonCard";

function App() {
    return (
    <div className="App">
      <PersonCard 
        lastName={"Smith"}
        firstName={"Henry"}
        age={25}
        hair={"Brown"}
      />
      <PersonCard 
        lastName={"Juarez"}
        firstName={"Jordan"}
        age={30}
        hair={"Black"}
      />
      <PersonCard 
        lastName={"Parker"}
        firstName={"Cammy"}
        age={28}
        hair={"Blonde"}
      />
      <PersonCard 
        lastName={"Weiss"}
        firstName={"Candice"}
        age={32}
        hair={"Purple"}
      />
    </div>
    );
  }
  
  

export default App;
