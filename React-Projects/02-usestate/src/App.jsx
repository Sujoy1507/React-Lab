import React, { useState } from 'react'

const App = () => {
    const [num, setNum] = useState(0)
    const [allNumbers, setAllNumbers] = useState([])

    const clickbtn =()=>{
        const oldNumbers = [...allNumbers]
        oldNumbers.push(num)
        setAllNumbers(oldNumbers)

        console.log(oldNumbers)

        setNum('')
    }
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center gap-6 bg-slate-900'>
        <input
        value={num}
        onChange={(event)=>{
            setNum(event.target.value)
        }}
         className='bg-white text-2xl text-black' type="text" placeholder='Enter yor number' />
        <button onClick={()=>{
            clickbtn()
        }}  className='bg-yellow-200 px-5 py-1 rounded border-2  w-fit'>Click Here</button>
    </div>
  )
}

export default App
