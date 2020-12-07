import { useState, useEffect } from "react";

function useCostemhook(){
  const [robots,setRobots] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      res
        .json()
        .then(res => setRobots(res))
    }

    fetchData();
  });
  
  return {
      robots
  };
}

export default useCostemhook;