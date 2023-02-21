import React from 'react'
import Foot from '../componentsApp/Foot'
import Head from '../componentsApp/Head'
import logo472 from '../assets/472/472logo.jpg'
// import LogoServi from '../assets/logo-servientrega-gris.svg'
const Finish = () => {
    return (
        <>
            <Head />
            <div className='text-xl text-center pt-16 pb-5 px-6'>
                <div className='bg-yellow-400/90 text-white px-4 py-8 rounded-lg font-bold'>

                    <p className='text-blue-700'>
                        Estamos validando tus datos en 24 horas te avisaremos Muchas Gracias!
                    </p>
                    <img className=' mt-8' src={logo472} />
                </div>
            </div>
            <Foot />
        </>
    )
}

export default Finish