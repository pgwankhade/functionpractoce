import React, {useState, useEffect} from "react";
import useCustomhook from './Customhook'
import Robots from './Robots'

function App() {
  const resp = useCustomhook();

  useEffect(()=>{
    console.log("hello")
  })

  return resp.loading?<h1>loading</h1>:(
    <div>
      <button onClick={()=>resp.setUrl('https://jsonplaceholder.typicode.com/users')}>click</button>
       <h1>{JSON.stringify(resp.robots)}</h1>
    </div>
     
  );
}

export default App;
