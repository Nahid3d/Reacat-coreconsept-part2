import { useState } from "react"

export default function Tem (){
    const [tem,setTem] = useState(11);
 
const handleadd = () =>{
    const newTem = tem + 1;
    setTem(newTem);
}
const handleremuved = () =>{
    setTem(tem -1);
}

    const temStyle = {
        border:'2px solid purple',
        margin:'10px',
        borderRadius:'15px',
        textAlign:'center',
        background:'HotPink'
    }
    return (
        <div style={temStyle}>
            <h4>Team:{tem}</h4>
            <button onClick={handleadd}>Add</button>
            <button onClick={handleremuved}>Remuve</button>
        </div>
    )
}