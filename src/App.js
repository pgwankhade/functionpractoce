import React from "react";
import useCostomhook from './Costomhook'
import Robots from './Robots'

function App() {
  const data = useCostomhook();

  return !data.robots.length ?
  <h1>Loading</h1> : (
    <div className="App">
    <h1>names</h1>
    {
     data.robots.map((user, i) => {
      return (
       <h1>{user.name}</h1>
      );
    })
  }
  </div>  
  );
}

export default App;
