import React from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const Arrow = (props) => {
    return (
        <div className="bg-[radial-gradient(circle_at_top_right,#fde68a,transparent_45%),radial-gradient(circle_at_bottom_left,#fb7185,transparent_50%),linear-gradient(135deg,#020617,#f59e0b,#ef4444,#facc15,#020617)] flex justify-evenly p-1 rounded sticky bottom-0 md:static">
            <div
                onClick={() => {
                    props.prev();
                }}
                className="p-3 bg-black/20 backdrop-blur-2xl rounded-full active:scale-95"
            >
                <ArrowBigLeft color="white" size={40} />
            </div>
            <div
                onClick={() => {
                    props.next();
                }}
                className="p-3 bg-black/20 backdrop-blur-2xl rounded-full active:scale-95"
            >
                <ArrowBigRight color="white" size={40} />
            </div>
        </div>
    );
};

export default Arrow;
