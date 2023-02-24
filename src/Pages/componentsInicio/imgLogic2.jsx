import React from 'react'

const ImgLogic2 = ({ imgBg, title, textData }) => {
    return (
        <div className='shadow-md overflow-hidden mt-8'>
            <img className='px-2' src={imgBg} />
            <div className='px-2 mt-5'>
                <p className='font-extrabold text-xl mb-4'>{title}</p>

                <p>{textData}</p>
            </div>
            <button className='w-full mt-6 bg-red-600 text-white py-2 rounded-md font-bold'>Aprenda más</button>
        </div>
    )
}

export default ImgLogic2