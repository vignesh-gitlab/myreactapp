import { useState } from "react";
function ChangeColor(){
    const [color,setColor] = useState('Red');
    return(
        <>
        <h1>This is {color} color</h1>
        <button onClick={()=>{setColor('Green')}}>Change Color</button>
        </>
    )
}
export default ChangeColor;