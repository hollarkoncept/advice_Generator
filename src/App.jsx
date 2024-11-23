import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import './App.css'
import Card from "./componemt/Card";

function App() {
  const [advice, setAdvice] = useState({})
  const [loading, setLoading] = useState(false)

  const fetctData = async ()=>{
    try {
      setLoading(true)
      let response = await axios.get("https://api.adviceslip.com/advice")
      console.log(response.data.slip);
      
     
      if(response.status == 200){
        setAdvice(response.data.slip)
      }
    } catch (error) {
      console.error(error);
    } finally{
      setLoading(false)
    }    
  }
useEffect(()=>{
  fetctData()
}, [])
  return (
    <>
    <Card data={advice} loading={loading}/>
    <button onClick={fetctData} className="feel"><img src={"./src/assets/images/icon-dice.svg"} alt="" /></button>

    </>
  )
}

export default App
