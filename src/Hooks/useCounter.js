import {useState, useEffect} from "react"
import { getSavedCount, saveCount } from './localStorage'
export function useCounter(){
   
    //const [count, setCount] = useState(0)
    const [count, setCount] = useState(getSavedCount);

    useEffect(() => {
      saveCount(count);
    }, [count]); 
  
    const dicreaseCount = () =>{
     if (count > 0)
       setCount((count) => count -1)
    }
    const increaseCount = () =>{
       setCount((count) => count + 1)
    }
    const resertCount = () =>{
      setCount(0)
    }

    return{count, increaseCount, dicreaseCount, resertCount}
  }