import React from 'react'
import Foot from '../componentsApp/Foot'
import Head from '../componentsApp/Head'
import logo472 from '../assets/dhl/dhlLogo.jpg'

const Finish = () => {
    return (
        <>
            <Head />
            <div className='text-xl text-center pt-16 pb-5 px-6'>
                <div className='bg-yellow-400/90 text-white px-4 py-8 rounded-lg font-bold'>

                    <p className='text-red-600'>
                        Estamos validando tus datos en 24 horas te avisaremos Muchas Gracias!
                    </p>
                </div>
                <img className=' mt-5' src={logo472} />
            </div>
            <Foot />
        </>
    )
}

export default Finish