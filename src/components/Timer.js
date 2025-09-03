import { useEffect, useState } from "react";
function Timer(){
    const [count,setCount] = useState(1);
    useEffect(()=>{
        console.log("Screen Rendered");
        checkCount();
    },[count])
    function checkCount(){
        if(count>10){
            setCount(1);
        }
    }
    function updateTimer(){
        setCount((previousState)=>previousState+1)
    }
    return (
        <>
        <h1>I have rendered {count} times</h1>
        <button onClick={updateTimer}>Change Timer</button>
        </>
    )
}
export default Timer;