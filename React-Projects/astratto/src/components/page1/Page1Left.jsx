import React from "react";

const Page1Left = () => {
    return (
        <div className="flex justify-between py-8 flex-col h-[calc(100vh-80px)]">
            {/* Top Part */}
            <div className="">
                {" "}
                {/* SVG clip path definition */}
                <svg width="0" height="0">
                    <defs>
                        <clipPath
                            id="curveTop"
                            clipPathUnits="objectBoundingBox"
                        >
                            <path d="M0,0.35 Q0.5,-0.3 1,0.35 V1 H0 Z" />
                        </clipPath>
                    </defs>
                </svg>
                console.log('Sujoy Saha ')
                {/* Clipped shape */}
                <div
                    className="w-72 h-96 rotate-170 rounded-xl overflow-hidden "
                    style={{ clipPath: "url(#curveTop)" }}
                >
                    <img
                        src="https://inspgr.id/app/uploads/2024/05/typography-axel-vincent-02-1536x1536.jpg"
                        alt=""
                    />
                </div>
            </div>

            {/* Middle Part */}

            <svg viewBox="0 0 600 80" className="w-60 mx-auto" fill="none">
                <path
                    d="M0 40
       C50 10, 100 10, 150 40
       S250 70, 300 40
       S400 10, 450 40
       S550 70, 600 40"
                    stroke="#f97316"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg>
            {/* Bottom Part */}
            <div className="flex justify-center items-center -rotate-6">
                <p className="border-2 border-orange-500 rounded-3xl px-3 py-1 text-3xl">Create Magic</p>
                <i className="ri-asterisk p-1 bg-blue-500 text-white font-bold rounded-full px-2 text-4xl"></i>
            </div>
        </div>
    );
};

export default Page1Left;
