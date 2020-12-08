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
          .then(res => {
            setLoading(false)
            setRobots(res)
          })
      } 
      fetchData(url);
    },[url]);
  
 
  
  return {
      robots,
      loading,
      setUrl,
  };
}

export default useCustomhook;