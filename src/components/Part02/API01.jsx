import React, { useState } from 'react'
import axios from 'axios';

const API01 = () => {
    const [data, setdata] = useState([]);
    const getAPI = async () => {
        let response = await axios.get("https://picsum.photos/v2/list");     // using axios
        // console.log(response);
        setdata(response.data);
    }

    return (
        <div>
            <button onClick={() => getAPI()} className='px-4 py-3 bg-emerald-700 border-2 border-black rounded-lg active:scale-95 transition-transform duration-150 cursor-pointer'>GetData</button>
            <div>
                {data.map((elem, idx)=>{
                    return <h3 key={idx}>hello {elem.author}</h3>
                })}
            </div>
        </div>
    )
}

export default API01;