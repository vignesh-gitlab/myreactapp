function Car(props){
    const {carInfo} = props;
    const {brand,color,model} = carInfo;
    const text = `Hi, this is my ${color} ${brand} ${model} car`;
    return(
        <h2>{text}</h2>
        
    )
}
export default Car;