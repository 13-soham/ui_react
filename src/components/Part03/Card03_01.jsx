import React from 'react'

const Card03_01 = (props) => {
    return (
        <div>
            <a href={props.elem.download_url} target='_blank'>
                <div className='h-70 w-80 bg-amber-50 rounded-xl overflow-hidden'>
                    <img src={props.elem.download_url}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>
                <h2 className='text-amber-50 font-[poppins] text-lg'>{props.elem.author}</h2>
            </a>
        </div>
    )
}

export default Card03_01;