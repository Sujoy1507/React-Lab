import React from "react";
import Card from "./components/Card";

const App = () => {
    const users = [
        {
            fullName: "Amit Sharma",
            coverImage:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            profilePhoto:
                "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
            bio: "Frontend developer and tech enthusiast from Delhi.",
            likeCount: 1240,
            postCount: 86,
            viewCount: 45210,
        },
        {
            fullName: "Priya Verma",
            coverImage:
                "https://images.unsplash.com/photo-1503264116251-35a269479413",
            profilePhoto:
                "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
            bio: "UI designer who loves clean and minimal designs.",
            likeCount: 980,
            postCount: 64,
            viewCount: 38900,
        },
        {
            fullName: "Rahul Singh",
            coverImage:
                "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
            profilePhoto:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
            bio: "JavaScript learner building projects every day.",
            likeCount: 1560,
            postCount: 102,
            viewCount: 61230,
        },
        {
            fullName: "Neha Gupta",
            coverImage:
                "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
            profilePhoto:
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
            bio: "Content creator and lifestyle blogger.",
            likeCount: 2210,
            postCount: 140,
            viewCount: 80540,
        },
        {
            fullName: "Sourav Das",
            coverImage:
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
            profilePhoto:
                "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
            bio: "Full stack developer from West Bengal.",
            likeCount: 870,
            postCount: 58,
            viewCount: 30120,
        },
        {
            fullName: "Anjali Roy",
            coverImage:
                "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
            profilePhoto:
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
            bio: "Photography lover and travel explorer.",
            likeCount: 1980,
            postCount: 112,
            viewCount: 73450,
        },
        {
            fullName: "Vikas Mishra",
            coverImage:
                "https://images.unsplash.com/photo-1500534623283-312aade485b7",
            profilePhoto:
                "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
            bio: "Backend developer focused on Node and APIs.",
            likeCount: 640,
            postCount: 41,
            viewCount: 22980,
        },
        {
            fullName: "Pooja Nair",
            coverImage:
                "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
            profilePhoto:
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
            bio: "Digital marketer and brand strategist.",
            likeCount: 1340,
            postCount: 77,
            viewCount: 49860,
        },
        {
            fullName: "Karan Patel",
            coverImage:
                "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
            profilePhoto:
                "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
            bio: "Startup enthusiast and product builder.",
            likeCount: 910,
            postCount: 53,
            viewCount: 34410,
        },
        {
            fullName: "Ritu Malhotra",
            coverImage:
                "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXxlbnwwfHwwfHx8MA%3D%3D",
            profilePhoto:
                "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
            bio: "Student learning React and modern web tools.",
            likeCount: 520,
            postCount: 29,
            viewCount: 18760,
        },
    ];

    return (
        <div className="flex gap-1.5 justify-center items-center bg-slate-800 h-screen flex-wrap overflow-auto">
            {users.map((user, index) => {
                return <Card key={index} user={user} />;
            })}
        </div>
    );
};

export default App;
