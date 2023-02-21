import React from 'react'

const AvisoModal = ({ setModalAviso,setNext }) => {
    return (
        <div className='fixed bg-gray-700/40 w-full h-full top-0 z-50 right-0 flex justify-center' onClick={() => setModalAviso(false)}>
            <div className='bg-white w-full h-min pb-6 mx-4 mt-6 rounded relative' onClick={(e)=>e.stopPropagation()}>
                <button onClick={() => setModalAviso(false)} className='absolute right-4 text-2xl mt-3'>X</button>
                <h5 className='font-semibold text-xl mt-3 border-b py-3 px-3'>Paquete retenido.</h5>
                <p className='px-3 mt-4 border-b pb-4 text-justify'>El paquete con guía de rastreo N°: 7589223. Se encuentra retenido. debe actualizar los datos de envio y realizar el pago de impuestos al iva por un valor de: $8.689 COP.</p>
                <div className='w-full flex justify-end px-6 mt-4'>
                    <button onClick={()=>setNext(true)} className='bg-yellow-400 text-white px-4 py-2'>Actualizar datos.</button>
                </div>
            </div>
        </div>
    )
}

export default AvisoModal