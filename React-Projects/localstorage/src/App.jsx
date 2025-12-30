import React from 'react'
import axios from 'axios'

const App = () => {


    const getData=async ()=>{

        const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(responce.data)
    }


  return (
    <div>
      <button 
      onClick={()=>{
        getData()
      }}
       className='bg-red-600 px-5 py-1 rounded font-bold m-39'>Get Data</button>
    </div>
  )
}

export default App
