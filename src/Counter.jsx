import { useState } from "react"

export default function Counter (){
    const [count,setCount] = useState(0);
    const handlecleck = () =>{
        const newcount = count + 1;
        setCount(newcount)
    }
    const handlereduce = () =>{
        const newcount = count -1;
        setCount(newcount)
    }
    return (
        <div style={{border:'1px solid tomato'}}>
             <h4>Counter: {count}</h4>
             <button onClick={handlecleck}>Add</button>
             <button onClick={handlereduce}>Reduce</button>
        </div>
    )
}