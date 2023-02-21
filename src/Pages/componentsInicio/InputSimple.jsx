import React from 'react'

const InputSimple = ({place,handlerChange,data,nameInput,type}) => {
    return (
        <input
            className='border-2 placeholder:text-gray-500 h-14  w-full uppercase 
                text-xl  py-1 outline-none px-2 rounded-md border-blue-100
            '
            type={type}
            onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}
            onChange={handlerChange}
            value={data || ""}
            name={nameInput}
            placeholder={place}
            maxLength={30}
        />
    )
}

export default InputSimple