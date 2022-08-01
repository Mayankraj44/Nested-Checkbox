import React, { useEffect, useState } from 'react'
import {data as listData} from "../../data/checkbox"
import { tree } from '../../data/checkbox';
import CheckBoxItem from './CheckBoxItem';
import CheckBoxParent from './CheckBoxParent';

const Checkbox = () => {
    const [data,setData]=useState();

    useEffect(()=>{
      const result=tree()
      setData(result)
    },[])

    const formValues=(e)=>{
      e.preventDefault()  
      const elements=e.target.elements
     console.log(elements)
     const elementArray=[...elements]
     // return a array with checkbox value true and their respective name
     const result=elementArray.slice(0,elementArray.length-1).reduce((acc,item)=>{
      if(item.checked){
        acc.push({
          name:item.getAttribute("data-name"),
          checked:item.checked
        })
      }
      return acc
     },[])
     console.log("Form values",result)
    }


    
    // console.log("Data",data)

  return (
    <form onSubmit={(e)=>formValues(e)}>
    {data && <CheckBoxParent data={data} />}
    <button >Submit</button>
    </form>
  )
}

export default Checkbox