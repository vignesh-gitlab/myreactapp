import { useState } from "react";
function MyForm(){
    const [form,setForm] = useState({phone:"+91",email:"@gmail.com",country:"India",name:"",age:"",about:"I'm a Student"});
    function handleSubmit(e){
        e.preventDefault();
        console.log("Form Submitted");
        console.log("Current State: ",form);
        setForm({phone:"+91",email:"@gmail.com",country:"India",name:"",age:"",about:"I'm a Student"})
    }
    function handleChange(e){
        setForm((previousState)=>{return {...previousState,[e.target.name]:e.target.value}})
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>Enter your name:<input type="text" name="name" onChange={handleChange} value={form.name} /></label><br/>
            <label>Enter your age:<input type="text" name="age" onChange={handleChange} value={form.age}  /></label><br/>
            <label>Enter your email:<input type="email" name="email" onChange={handleChange} value={form.email}  /></label><br/>
            <label>Enter your phone:<input type="text" name="phone" onChange={handleChange} value={form.phone}  /></label><br/>
            <label>
                Select your Country:
                <select name="country" onChange={handleChange} value={form.country}>
                    <option value="">Select</option>
                    <option value="Australia">Australia</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                </select>
            </label><br/>
            <textarea name="about" value={form.about} onChange={handleChange}/><br/>
            <input type="submit" value="Submit"/>
        </form>
        </>
    )
}
export default MyForm;