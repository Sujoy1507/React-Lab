import React from 'react'

const CardIMG = (props) => {
  return (
    <img className="max-w-2/3 min-w-1/2 max-h-2/3 min-h-1/2 p-3 rounded-xl m-auto object-cover border-2 bg-white/20 backdrop-blur-3xl border-slate-300  " src={props.img}  alt="" />
  )
}

export default CardIMG
