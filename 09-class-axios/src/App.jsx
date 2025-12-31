import React, { useState } from "react";
import axiox from "axios";

const App = () => {
    const [allUser, setAllUser] = useState([]);
    const getData = async () => {
        let { data } = await axiox.get("https://jsonplaceholder.typicode.com/todos");
        setAllUser(data);
        console.log(data)
    };

    return (
        <div>
            <button
                className="bg-red-600"
                onClick={() => {
                    getData();
                }}
            >
                Get Data
            </button>

                {allUser.map((val,index)=>{
                    return <h1 key={index}>{val.title}</h1>
                })}
        </div>
    );
};

export default App;
