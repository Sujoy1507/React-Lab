import React, { useState } from "react";
import Washroom from "./components/Washroom";

const App = () => {
    const [gender, setGender] = useState('Male')
    let changeGender=()=>{
       if(gender==='Male'){
         setGender("Female")
       }else if(gender==="Female"){
         setGender("Male")
       }
    }

    return (
        <div className="p-8">
            <h1 className="bg-red-400 p-7 rounded-2xl h-fit w-fit text-2xl " >{gender}</h1>
            <button onClick={changeGender} className="bg-green-400  p-7  active:scale-95 rounded-2xl h-fit w-fit text-2xl">Change</button>
            {gender==="Male"?<Washroom color={'blue'} text={'Male Washroom'} />:<Washroom text={'Female Washroom'} color={'orange'}/>}
        </div>
    );
};

export default App;
