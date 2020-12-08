import { useState, useEffect } from "react";

function useCustomhook(initialUrl){
  const [robots,setRobots] = useState({});
  const [loading,setLoading] = useState()
  const [url, setUrl] = useState(initialUrl)

    useEffect(() => {
      if(!url) return;
      setLoading(true)
      async function fetchData(url) {
        const res = await fetch(url);
        res
          .json()
          .then(res => setRobots(res))
      } 
      fetchData(url);
      setLoading(false)
    },[url]);
  
 
  
  return {
      robots,
      loading,
      setUrl,
  };
}

export default useCustomhook;