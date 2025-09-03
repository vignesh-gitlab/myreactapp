
import { useState } from "react"
function Scooter() {
const [scooter, setScooter] = useState(
{color: "Red",
brand: "Honda",
model: "Activa 6G",
year: "2021"
}
);
function updateColor(){
    setScooter(previousState=>{
        return {...previousState,color:"Blue"};
    })
}
console.log("current state:", {scooter});

return <>
<h1>My Scooter</h1>
<p>Color: {scooter.color}</p>
<p>Brand: {scooter.brand}</p>
<p>Model: {scooter.model}</p>
<p>Year: {scooter.year}</p>
<button onClick={updateColor}>Change Color</button>
</>
}
export default Scooter;