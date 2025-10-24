import React, { useState } from 'react'

const Note01 = () => {
    const [user, setuser] = useState("");
    const [age, setage] = useState();

    const [data, setdata] = useState([]);

    function submithandler(e) {
        e.preventDefault();
        if (user.trim() === "") return alert("Enter a Name");
        if (age < 0 || age === "") return alert("Enter a valid age");
        setdata([...data, { user, age: Number(age) }]);
        setage("");
        setuser("");
        // console.log(user.trim());
    }
    let ans = data.map((value, idx) => {
        return (
            <li
                key={idx}
                className="bg-gray-800 p-3 rounded-lg shadow-md flex justify-between items-center"
            >
                <span>
                    {idx + 1}) name is :{" "}
                    <span className="text-emerald-400">{value.user}</span>, and age is :{" "}
                    <span className="text-emerald-400">{value.age}</span>
                </span>
            </li>
        );
    });
    return (
        <div className="p-4 max-w-md mx-auto">
            <form onSubmit={submithandler} className="flex gap-2 mb-4">
                <input
                    value={user}
                    type="text"
                    placeholder="name"
                    onChange={(e) => setuser(e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-500 text-white"
                />
                <input
                    value={age}
                    type="number"
                    placeholder="age"
                    onChange={(e) => setage(e.target.value)}
                    className="w-20 px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-1 focus:ring-lime-500 text-white"
                />
                <button className="px-4 py-2 bg-lime-600 text-white rounded-xl active:scale-95 transition-transform duration-150 hover:bg-lime-700 cursor-pointer">
                    Submit
                </button>
            </form>

            <ul className="space-y-2 text-xl text-white">
                {ans}
            </ul>
        </div>
    );

}

export default Note01;