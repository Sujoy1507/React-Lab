import React from "react";
import { Plus,Instagram,Twitter,Chromium } from "lucide-react";
const Card = (props) => {
    console.log( props.user.profilePhoto)
    return (
        <div>
            {/* Main Card */}
            <div className="h-[400px] w-[300px] border-2 p-1.5 bg-amber-50 overflow-hidden border-amber-200 rounded-xl">
                {/* Top Part */}
                <div className="w-full h-[30%] bg-amber-50 relative">
                    <img
                        className="w-full h-full object-cover object-top rounded-3xl"
                        src={props.user.coverImage}
                        alt=""
                    />
                    <button className="absolute top-1 right-2 flex justify-center items-center gap-1 bg-amber-50 text-slate-950 rounded-3xl py-1 px-2 ">
                        Follow <Plus size={18} />
                    </button>
                </div>
                {/* Profile Picture Part */}
                <div className="-translate-y-12 flex items-center justify-between">
                    <div className=" ml-6 p-1 bg-white w-[100px] h-[100px] rounded-full">
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src={props.user.profilePhoto}
                            alt=""
                        />
                    </div>
                    <p className=" text-black mr-5 translate-y-2.5">
                        exp{" "}
                        <span className="text-red-500 text-sm">
                            | | | |{" "}
                            <span className="text-blue-500">| | | | | |</span> |
                            | | |
                        </span>
                    </p>
                </div>

                {/* Name Part */}
                <div className="-translate-y-6">
                    <h1 className="font-bold text-2xl">{props.user.fullName}</h1>
                    <h2 className="text-sm mt-2 opacity-65">
                        {props.user.bio}
                    </h2>
                </div>

                {/* Bottom Part */}

                <div className="p-2 flex justify-evenly  border-y border-gray-300">
                    <div className="font-bold flex flex-col justify-center items-center ">
                        {props.user.likeCount}
                        <p className="opacity-65 text-[.7rem] font-normal">
                            Like
                        </p>
                    </div>
                    <div className="font-bold flex flex-col justify-center items-center ">
                        {props.user.postCount}
                        <p className="opacity-65 text-[.7rem] font-normal">
                            Post
                        </p>
                    </div>
                    <div className="font-bold flex flex-col justify-center items-center ">
                        {props.user.viewCount}
                        <p className="opacity-65 text-[.7rem] font-normal">
                            Views
                        </p>
                    </div>
                </div>

                {/* Icons */}

                <div className="flex w-full justify-evenly p-1.5"> <Instagram /> <Twitter /> <Chromium /></div>
            </div>
        </div>
    );
};

export default Card;
