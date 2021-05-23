// create your App component here
import react, { useEffect, useState } from "react"

function App(){
  const [apiData,setApiData]=useState([])
  const [isLoaded,setIsLoaded]=(false)
      useEffect(()=>{
          fetch("https://dog.ceo/api/breeds/image/random")
          .then(res=>res.json())
          .then(json=>{setApiData(json.message)
            setIsLoaded(true)})      
      },[])
      if(isLoaded===true) return <p>Loading....</p>
      return <img alt="A Random Dog" src={apiData} />
  }
  
  export default App