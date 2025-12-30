import React, { useState } from "react";

const App = () => {
    const [title, setTitle] = useState("");
    const [allUsers, setAllUsers] = useState([]);

    const formHandel = (event) => {
        event.preventDefault();

        const oldUsers  = [...allUsers];
        oldUsers.push(title)
        console.log(oldUsers)
        setAllUsers(oldUsers)


        

        setTitle("");
    };

    return (
        <div>
            <form
                onSubmit={(event) => {
                    formHandel(event);
                }}
            >
                <input
                    required
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                    value={title}
                    type="text"
                    placeholder="What is your name"
                />
                <button>Submit</button>
            </form>

            {
                allUsers.map((val,index)=>{
                    return <h1 key={index}>{val}</h1>
                })
            }
        </div>
    );
};

export default App;
