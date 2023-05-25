import "./styles.css";
import {useState} from "react"

export default function App() {
  const[val1,setVal1]=useState("")
  const[val2,setVal2]=useState("")
  const[op,setOp]=useState("")
  const[inp,setInp]=useState(true)
  const[inpval1,setInpVal1]=useState(true)
  const[history,setHistory]=useState([])
  const handleChange1=(e)=>{
    if(inp){
      setInp(false)
    }
    else{
      setInp(true)
    }
    setOp(e.target.value)
  }

  const handleChange2=(e)=>{
      if(inp){
        if(inpval1){
        if(isNaN(e.target.value)){
          setVal1(e.target.value)
        }
        else{
          setVal1(val1+e.target.value)
        }
      }
      else{
        setVal1(e.target.value)
      }
      }
      else{
        if(isNaN(e.target.value)){
          setVal2(e.target.value)
        }
        else{
          setVal2(val2+e.target.value)
        }
      }
  }
  const handleChange3=()=>{
    setInp(true)
    setHistory([...history,(parseInt(val1)+op+parseInt(val2))+"="+(parseInt(val1)+parseInt(val2))])
    if(op==="+"){
      setVal1(parseInt(val1)+parseInt(val2))
    }
    else if(op==="-"){
      setVal1(parseInt(val1)-parseInt(val2))
    }
    else if(op==="*"){
      setVal1(parseInt(val1)*parseInt(val2))
    }
    else if(op==="/"){
      setVal1(parseInt(val1)/parseInt(val2))
    }
    setVal2("")
    setInpVal1(false)
  }
  const clear=()=>{
    setVal1(0)
    setVal2(0)
    setOp("")
    setInpVal1(true)
  }
  const handleClick=()=>{
    document.getElementById("historyDiv").style.display="block"
  }
  return (
    <div className="App">
      <button id="btn" onClick={handleClick}>History</button>
      <div id="historyDiv">{history.map((items,index)=>{
        return(<div key={index}>{items}</div>)
      })
      }</div>
      {inp ? <div className="displayDiv">{val1}</div> :
      <div className="displayDiv">{val2}</div>}
      <div className="container">
      <button className="others" onClick={clear}>c</button>
      <button className="others">+/-</button>
      <button className="others">%</button>
      <button className="operation" onClick={handleChange1} value="/">/</button>
      <button className="number" value="7" onClick={handleChange2}>7</button>
      <button className="number" value="8" onClick={handleChange2}>8</button>
      <button className="number" value="9" onClick={handleChange2}>9</button>
      <button className="operation" onClick={handleChange1} value="*">*</button>
      <button className="number" value="4" onClick={handleChange2}>4</button>
      <button className="number" value="5" onClick={handleChange2}>5</button>
      <button className="number" value="6" onClick={handleChange2}>6</button>
      <button className="operation" onClick={handleChange1} value="-">-</button>
      <button className="number" value="1" onClick={handleChange2}>1</button>
      <button className="number" value="2" onClick={handleChange2}>2</button>
      <button className="number" value="3" onClick={handleChange2}>3</button>
      <button className="operation" onClick={handleChange1} value="+">+</button>
      <button className="number" value="0" onClick={handleChange2}>0</button>
      <button className="number">.</button>
      <button className="operation" onClick={handleChange3} value="=">=</button>
      </div>
    </div>
  );
}
