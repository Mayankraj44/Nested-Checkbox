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


    
    console.log("Data",data)

  return (
    <>
    {data && <CheckBoxParent data={data} />}
    </>
  )
}

export default Checkbox