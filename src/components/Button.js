import './Button.css'

const btnValue = [
  [1, 2, 3, "+"],
  [4, 5, 6, "-"],
  [7, 8, 9, "*"],
  ["c", 0, ".", "%"]
]
const Button = ({clickHandler}) =>{
  return (    
    btnValue.flat().map((btn, i ) => 
    <div key = {i}>   
    <button value = {btn} className='button'  onClick = {clickHandler}> {btn}</button>
    </div>
    )
  )
  
}

export default Button;