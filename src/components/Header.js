import './Header.css';
import styles from './Header.module.css';
function Header(){
    const paragraphStyle = {
        color:"green",
        backgroundColor:"black",
        fontFamily:"sans-serif",
        padding:"10px"
    }
    return(
        <>
        {/* <h1 style={{color:"red",backgroundColor:"lightblue"}}>Heading</h1> */}
        <h1 className={styles.bigFont}>Heading style</h1>
        <p style={paragraphStyle}>Paragraph</p>
        </>
    )
}
export default Header;