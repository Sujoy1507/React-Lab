import React from 'react'

const Navbar = (props) => {
  return (
    <div style={{backgroundColor:props.color}} className=' text-3xl p-2 flex justify-between'>
        <h1>{props.title}</h1>
        <div className='flex gap-5 '>
            {props.links.map((val , index)=>{
               return <h2 key={index} >{val}</h2>
            })}
        </div>
    </div>
  )
}

export default Navbar
