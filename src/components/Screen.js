import "./Screen.css"
import './Button.css'
import React, { useState } from "react"
import Button from "./Button";

const Screen = ()=>{
  const [btnValue, setValue] = useState("")

  const clickHandler = (event) => {
    setValue(btnValue + event.target.value)
  }

  const calculate = (event) =>{
    try{
      setValue(eval(btnValue))

    }catch(error){

    }

  }

  const HandleChange = (event) =>{
    event.target.value = btnValue
    try{
      setValue(eval(btnValue))
    } catch(error){

    }
    }

  return(
  <div>
    <input value={btnValue} onChange = {HandleChange} type="text" className='screen'/><br/>
    <div className="buttonBox">
    <Button clickHandler={clickHandler}/>
    </div>
    <button value = "=" className='buttonEqual'  onClick = {calculate}> = </button>
  </div>
  );

};

export default Screen;