import React from 'react'

const Washroom = (props) => {
  return (
    <div style={{backgroundColor:props.color}} className='bg-orange-600 px-9 py-2 rounded font-extrabold text-white mt-8 w-fit '>
      {props.text}
      <h1 className='bg-[conic-gradient(from_0deg,#ff004c,#ff9100,#ffe600,#00ff9d,#00c3ff,#7b2cff,#ff00c8,#ff004c)]'>sujoy</h1>
    </div>
  )
}

export default Washroom
