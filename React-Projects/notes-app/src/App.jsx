import React, { useState } from "react";

const App = () => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    const [task, setTask] = useState([]);
    const submitHandler = (event) => {
        event.preventDefault();

        setTask((prev) => [...prev, { title, details }]);
        console.log(task);

        setDetails("");
        setTitle("");
    };

    return (
        <div className="h-screen w-full overflow-hidden">
            <div className="h-screen w-full flex flex-col md:flex-row bg-slate-900">
                <div className="p-2  w-full md:w-1/2 lg:w-1/3  items-start  ">
                    <form
                        onSubmit={(event) => {
                            submitHandler(event);
                        }}
                        className="flex gap-4 text-white flex-col "
                    >
                        <input
                            onChange={(event) => {
                                setTitle(event.target.value);
                            }}
                            value={title}
                            className="px-6 w-full text-2xl py-1 outline-none border-2 border-white rounded-sm"
                            type="text"
                            placeholder="Heading"
                        />
                        <textarea
                            onChange={(event) => {
                                setDetails(event.target.value);
                            }}
                            value={details}
                            className="flex-1 px-6 resize-none overflow-y-auto w-full text-2xl py-1 outline-none border-2 border-white rounded-sm"
                            type="text"
                            placeholder="Your Task"
                        />
                        <button className="bg-white w-full  text-black  rounded">
                            Add Note
                        </button>
                    </form>
                </div>
                <div className="h-full p-2 w-full ">
                    <div className="bg-slate-600 flex flex-wrap gap-3 items-start rounded w-full h-full p-3 ">
                        <h1 className="text-2xl h-[5%] text-white font-extrabold bg-sky-950 h-fit w-full px-5 py-2 rounded  ">
                            Your Notes!
                        </h1>
                        <div
                            id="notes-container"
                            className="w-full h-[95%] flex  flex-wrap justify-start overflow-y-scroll  "
                        >
                            {task.map((val, index) => {
                                return (
                                    <div className="bg-sky-200 w-1/2 min-h-[250] overflow-hidden max-h-[300px] md:w-1/2 lg:w-1/3 xl:w-1/4   2xl:w1/4 -[350px] border-5 border-slate-600 rounded-xl p-2   ">
                                        <h1 className="bg-sky-700 min-h-[40px] max-h-[90px] flex  flex-wrap capitalize text-justify text-white font-extrabold text-xl px-2 py-1 rounded  ">
                                            {val.title}
                                        </h1>
                                        <div
                                            id="notes-container"
                                            className="overflow-y-scroll h-full"
                                        >
                                            <p>{val.details}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
