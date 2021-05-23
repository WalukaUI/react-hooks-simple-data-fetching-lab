// create your App component here
import react, { useEffect, useState } from "react"

function App(){
  const [datas,setData]=useState([])
      useEffect(()=>{
          fetch("https://dog.ceo/api/breeds/image/random")
          .then(res=>res.json())
          .then(json=>setData(json.message))      
      },[])
      
      return <p><img src={datas} /> </p>
  }
  
  export default App