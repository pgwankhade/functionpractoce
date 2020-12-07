import React, {useState,useEffect} from "react";
import Robots from './Robots'

function App() {
  const [robots,setRobots] = useState({});
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      res
        .json()
        .then(res => setRobots(res))
    }

    fetchData();
  });

  return !robots.length ?
     <h1>loading</h1>:
   (
    <div className="App">
      <Robots robo={robots}/>
      <span>{JSON.stringify(robots)}</span>
    </div>
  );
}

export default App;
