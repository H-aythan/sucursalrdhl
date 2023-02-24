import React from 'react'
import yt from '../assets/dhl/yt.svg'
import face from '../assets/dhl/face.svg'
import ins from '../assets/dhl/ins.svg'
import lk from '../assets/dhl/lk.svg'

const list = ["Conocimiento sobre Fraudes", "Aviso Legal",
    "Condiciones de Uso", "Aviso de Privacidad",
    "Resolución de Disputas", "Información adicional", "Configuración de cookies",
]
const Foot = () => {
    return (
        <div className='border-t bg-neutral-200/70 px-5'>
            <div className='py-2'>
                <p className='w-full font-bold text-sm'>Deutsche Post DHL Group</p>
                <div className='grid grid-cols-2'>
                    {list.map((item) => {
                        return <p className='text-sm my-4 text-gray-600'>{item}</p>
                    })}
                </div>
            </div>
            <div>
                <p className='font-bold mb-3'>Síganos</p>
                <div className='flex'>
                    <img className='mx-2 w-8' src={yt} />
                    <img className='mx-2 w-8' src={face} />
                    <img className='mx-2 w-8' src={lk} />
                    <img className='mx-2 w-8' src={ins} />
                </div>
                <p className='text-sm text-center my-10'>2023 © - todos los derechos reservados</p>
            </div>
        </div>
    )
}

export default Foot