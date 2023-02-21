import React from 'react'
import btnSelect from '../../../assets/472/arrow.png'
const Seleccion = ({ nameSelect, setInfo, info, arr,notificacion }) => {
    const handlerChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
        // // notificacion && setNotificacion(false)
    }
    return (
        <div className={`relative border rounded-md  h-10 ${notificacion?"border-red-600":""} w-16 mr-1 flex items-center`}>
            <select onChange={handlerChange} name={nameSelect} className='w-full bg-transparent  z-10 appearance-none px-1 font-medium flex relative outline-none bg-white focus:border-blue-300 '>
                <option value={""} className='ml-1 '>{`${nameSelect}`}</option>

                {arr.map((item) => {
                    return <option key={item} value={item}>
                        {item}
                    </option>
                })}

            </select>
            <img className='w-6 absolute right-0 z-0' src={btnSelect}/>
        </div>
    )
}

export default Seleccion