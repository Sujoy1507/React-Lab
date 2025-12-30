import React from "react";

const App = () => {
    const submitHandler = (event) => {
        event.preventDefault();
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
                            className="px-6 w-full text-2xl py-1 outline-none border-2 border-white rounded-sm"
                            type="text"
                            placeholder="Heading"
                        />
                        <textarea
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
                        <div className="w-full h-[95%] flex  flex-wrap justify-center overflow-y-scroll  ">
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5  2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5   2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5   2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5   2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5   2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5   2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5   2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5   2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5   2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5   2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5 2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                            <div className="bg-sky-200 w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/5   2xl:w1/5 h-[350px] border-5 border-slate-600 rounded-xl p-2   "></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
