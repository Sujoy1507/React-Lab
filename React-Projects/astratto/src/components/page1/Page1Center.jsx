import React from "react";

const Page1Center = () => {
    return (
        <div className="w-[56vw] h-[60vh] text-center flex flex-col gap-5">
            <p>Igniting the Spark of Inspiration</p>

            <h2 className="text-8xl [word-spacing:30px] leading-28">
                Unleash Your Brand{" "}
                <span className="border-4 border-purple-600 inline-block text-6xl rounded-full">
                    <i className="ri-shining-fill bg-orange-500 text-white m-1 rounded-full text-6xl"></i>
                </span>{" "}
                with Our{" "}
                <span className="inline-block bg-amber-100 rounded-xl rotate-6 px-2  ">
                    Mágico
                </span>{" "}
                Design
            </h2>
        </div>
    );
};

export default Page1Center;
