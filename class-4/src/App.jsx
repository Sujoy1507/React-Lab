import React from "react";

const App = () => {
    let counter = 0;
    let abc = () => {
        console.log("Hey Sujoy");
        counter++;
        console.log(counter)
    };
    return (
        <div>
            <button
                onClick={abc}
                className="bg-emerald-600 text-white px-3 py-1 rounded active:scale-95 m-2"
            >
                Click to Download
            </button>
        </div>
    );
};

export default App;
