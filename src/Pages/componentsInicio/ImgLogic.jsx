import React from 'react'

const ImgLogic = ({ imgBg, title, textData }) => {
    return (
        <div className='border-2 shadow-md rounded-md overflow-hidden mt-5'>
            <img src={imgBg} />
            <div className='px-2 mt-5'>
                <p className='font-extrabold text-xl mb-10'>{title}</p>

                <div className='mb-8'>
                    {textData?.map((item) => {
                        return <p className='text-red-600 font-bold text-sm my-3'>{item} {">"}</p>
                    })}
                </div>
            </div>
        </div>
    )
}

export default ImgLogic