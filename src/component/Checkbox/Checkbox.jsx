import React, { useEffect, useRef, useState } from "react";
import { tree } from "../../data/checkbox";
import CheckBoxParent from "../CheckBoxParent/CheckBoxParent";
import styles from "./index.module.css"

const COLOR=['red', 'green', 'blue', 'orange', 'aqua','cyan','wheat','purple']

const Checkbox = () => {
  const [data, setData] = useState();
  const [resultValue,setResultValue]=useState([])
  const resultBox=useRef(null)

  useEffect(() => {
    const result = tree();
    setData(result);
  }, []);

  const formValues = (e) => {
    e.preventDefault();
    const elements = e.target.elements;
    // console.log(elements);
    const elementArray = [...elements];
    // return a array with checkbox value true and their respective name
    const result = elementArray
      .slice(0, elementArray.length - 1)
      .reduce((acc, item) => {
        if (item.checked) {
          acc.push({
            name: item.getAttribute("data-name"),
            checked: item.checked,
          });
        }
        return acc;
      }, []);
    console.log("Form values", result);
    setResultValue(result)
  };

  // console.log("Data", data);
  const randomColor=()=>{
    return COLOR[ parseInt(Math.random()*COLOR.length)]
  }

  return (
    <div className={styles.mainContainer}>
    <form className={styles.form} onSubmit={(e) => formValues(e)}>
      {data && <CheckBoxParent data={data} />}
      <button className={styles.submitBtn}>Submit</button>
    </form>
    
    <div ref={resultBox}>
    <p className={styles.resultHeading}>CheckBox with value checked</p>
     <div className={styles.valuesBox}>
     {resultValue.map((item,ind)=>(
        <span style={{backgroundColor:`${randomColor()}`}} className={styles.resultValues}  key={ind}>{item.name}</span>
      ))}
     </div>
    </div>
    </div>
  );
};

export default Checkbox;
