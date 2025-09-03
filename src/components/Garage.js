import Apple from "./Apple";
import Car from "./Car"
function Garage(){
    const carInfo = { brand:"Reynauld", color:"Black", model:"Logan"}
    const appleInfo = {type:"Fuji",color:"Red"}
    const carList = [
        {brand:"Mahindra", color:"White", model:"Scorpio"},
        {brand:"BMW", color:"Black", model:"X6"},
        {brand:"Tesla", color:"Green", model:"Electric"}
    ]
    // const appleInfo = {};
    const showappleInfo = appleInfo.type !== undefined && appleInfo.color !== undefined;
    return(
        <>
        <Car carInfo={carInfo}/>
        {showappleInfo && <Apple appleInfo={appleInfo}/>}
        <ul>
        {carList.map((car,index)=><li key={index}><Car carInfo={car}/></li>)}
        </ul>
        </>
    )
}
export default Garage;