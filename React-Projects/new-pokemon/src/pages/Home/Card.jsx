import React from "react";
import CardIMG from "./CardIMG";
import Name from "./Name";

const Card = (props) => {


    // Gradients for bg color based on typeGradient
    const typeGradient = {
        grass: "bg-[radial-gradient(circle_at_top_left,#7CFF9B,transparent_55%),linear-gradient(135deg,#0f3d2e,#1faa59,#0b2f1f)]",

        fire: "bg-[radial-gradient(circle_at_top_right,#FFD36A,transparent_55%),linear-gradient(225deg,#3a0f0f,#ff6a00,#8b0000)]",

        water: "bg-[radial-gradient(circle_at_bottom_right,#7dd3fc,transparent_55%),linear-gradient(135deg,#020617,#0284c7,#0f172a)]",

        bug: "bg-[radial-gradient(circle_at_left,#bef264,transparent_55%),linear-gradient(180deg,#14532d,#4d7c0f,#052e16)]",

        normal: "bg-[radial-gradient(circle_at_top,#e5e7eb,transparent_55%),linear-gradient(180deg,#404040,#737373,#171717)]",

        poison: "bg-[radial-gradient(circle_at_bottom_left,#e879f9,transparent_55%),linear-gradient(135deg,#2e026d,#7e22ce,#020617)]",

        electric:
            "bg-[radial-gradient(circle_at_center,#fff59d,transparent_45%),linear-gradient(90deg,#78350f,#facc15,#92400e)]",

        ground: "bg-[radial-gradient(circle_at_bottom,#fde68a,transparent_55%),linear-gradient(180deg,#78350f,#a16207,#1c1917)]",

        fairy: "bg-[radial-gradient(circle_at_top_right,#fbcfe8,transparent_55%),linear-gradient(135deg,#831843,#f472b6,#701a75)]",

        fighting:
            "bg-[radial-gradient(circle_at_left,#fca5a5,transparent_55%),linear-gradient(225deg,#7f1d1d,#ea580c,#1c1917)]",

        psychic:
            "bg-[radial-gradient(circle_at_top,#f0abfc,transparent_55%),linear-gradient(90deg,#1e1b4b,#9333ea,#312e81)]",

        rock: "bg-[radial-gradient(circle_at_top_left,#d6d3d1,transparent_55%),linear-gradient(135deg,#44403c,#78716c,#1c1917)]",

        ghost: "bg-[radial-gradient(circle_at_center,#6366f1,transparent_50%),linear-gradient(180deg,#020617,#312e81,#000000)]",
    };

    const mainType = props.type[0];
    const gradient = typeGradient[mainType];

    return (
        <div className={`h-[265px] rounded p-3 flex flex-col gap-4 ${gradient} `}>
            <CardIMG img={props.img} />
            <Name name={props.name} type={props.type} />
        </div>
    );
};

export default Card;
