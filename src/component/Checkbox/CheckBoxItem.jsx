import React, { useRef, useState } from "react";
import CheckBoxParent from "./CheckBoxParent";

const CheckBoxItem = ({ data }) => {
    const [expanded,setExpanded]=useState(false)
  const [active, setActive] = useState(false);
  const ref=useRef(null);
  const checkBoxRef=useRef(null)

  const toggleExpanded=()=>{
    setExpanded(prev=>!prev)
   
  }
  
  function handleClick(e){
    console.log(data.name," clicked",e)
    const inputs=ref.current.querySelectorAll("input[type=checkbox]");
    if(inputs.length && e.target !== checkBoxRef.current){
      console.log("Inuts Array",inputs)
    const inputArray=[...inputs]
    const result=inputArray.map(ele=>ele.checked)
    const checkFlag=result.indexOf(true)
    const unCheckFlag=result.indexOf(false)
    console.log("Result",result)
   if(checkFlag!==-1 && unCheckFlag!==-1){
    checkBoxRef.current.indeterminate  = true;
    
   }
   else if(checkFlag !==-1 && unCheckFlag === -1){
    checkBoxRef.current.indeterminate = false
    checkBoxRef.current.checked=true
   }
   else{
    checkBoxRef.current.indeterminate = false
    checkBoxRef.current.checked=false
   }
    
    }

   
  }

  function toggleActiveState(e){
    const value=e.target.checked
    e.target.indeterminate=false
    const inputs=ref.current.querySelectorAll("input[type=checkbox]");
   
   
      if(inputs){
        console.log("inouts",inputs)
        inputs.forEach(element=>{
          element.checked=value;
          element.indeterminate=false 
      })
       }
       
    
    setActive(value)
  }

  

  return (
    <div onClick={handleClick} className="test">
      <div style={{ display: "flex" }}>
        {<div className="stateBox" style={{visibility:`${data.children.length===0 && 'hidden'}`}} onClick={toggleExpanded}>
            {expanded ? "-" :"+"}
        </div>}
        <input
        ref={checkBoxRef}
          type="checkbox"
          defaultValue={false}
          onChange={(e) => toggleActiveState(e)}
        />
        <label>{data.name}</label>
      </div>
      <div ref={ref} style={{display :`${expanded ? 'block' : 'none'}`}} >
    <CheckBoxParent data={data.children}  />
      </div>
    </div>
  );
};

export default CheckBoxItem;
