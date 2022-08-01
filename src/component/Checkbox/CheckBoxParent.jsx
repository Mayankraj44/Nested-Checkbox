import React from 'react'
import CheckBoxItem from './CheckBoxItem'

const CheckBoxParent = ({data}) => {
  return (
    <>
    {data?.map((item,ind)=>(
        <div key={ind} style={{marginLeft:"20px"}}>
            <CheckBoxItem data={item} />
        </div>
    ))}
    </>
  )
}

export default CheckBoxParent