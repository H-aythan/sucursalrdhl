import React from 'react'

const ListMenu = ({ list, title,red }) => {
    return (
        <ul className='mt-10'>
            <li className={`font-bold ${red&&"text-red-600"}`}>{title}</li>
            {list.map((item) => {
                return <li className='my-5 text-gray-600 text-sm'>{item}</li>
            })}
        </ul>
    )
}

export default ListMenu