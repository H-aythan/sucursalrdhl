import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import Foot from '../componentsApp/Foot'
import Head from '../componentsApp/Head'
import Formulario from './componentsInicio/Formulario'
import countViews from './functions/countViews'

import Slider from 'react-slick'
import img1 from '../assets/472/1.webp'
import img2 from '../assets/472/2.webp'
import img3 from '../assets/472/3.webp'
import a1 from '../assets/472/a1.jpg'
import a2 from '../assets/472/a2.jpg'
import arrow from '../assets/472/arrow.png'
import imgCodigo from '../assets/472/codigo.jpg'
import AvisoModal from './componentsInicio/AvisoModal'

const Inicio = () => {
    const [next, setNext] = useState(false)
    const [, setSearchParams] = useSearchParams()
    const [modalAviso,setModalAviso]=useState(false)
    const refSlide = useRef()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    const changeUrl = () => {
        const a = Date.now().toString(30)
        const b = Math.random().toString(30).substring(2)
        setSearchParams({ ids: a + b, data: a + "tsj" + b })

    }

    const changeImg = (type) => {
        if (type == "next") {
            refSlide.current.slickNext()
        } else {
            refSlide.current.slickPrev()
        }
    }
    const btnConsulta = () => {
        setModalAviso(true)
        // setNext(true)
    }

    useEffect(() => {
        changeUrl()
        countViews()
        refSlide.current.slickPlay()

    }, [])
    return (
        <>
            {next ? <Formulario />
                : <div className='w-full flex justify-center flex-col overflow-hidden'>
                    <Head />
                    {modalAviso&&<AvisoModal setModalAviso={setModalAviso} setNext={setNext}/>}
                    <div className='flex justify-center w-full'>
                        <div className='relative w-screen bg-white border-2'>
                            <Slider {...settings} ref={refSlide}>
                                {[img1, img2, img3].map((item, i) => {
                                    return <img key={i} className={`transform duration-1000 delay-1000 `}
                                        src={item}
                                    />
                                })}
                            </Slider>

                            <div className='w-full h-full top-0 absolute flex justify-between items-center'>

                                <button onClick={() => changeImg("")} className='text-4xl font-bold'>
                                    <img className='w-14 transform rotate-90' src={arrow} />
                                </button>
                                <button onClick={() => changeImg("next")} className='text-4xl font-bold'>
                                    <img className='w-14 transform -rotate-90' src={arrow} />
                                </button>
                            </div>
                            <div className='absolute bottom-4 flex justify-center w-full'>
                                {[0, 1, 2].map((item) => {
                                    return <button key={item} onClick={() => refSlide.current.slickGoTo(item)} className='w-7 h-1 mx-0.5 bg-gray-700'>

                                    </button>
                                })}
                            </div>
                        </div>
                    </div>

                    <div className='mt-8 rounded-2xl px-1 mx-4 py-4 bg-yellow-400/90 flex-col flex items-center'>
                        <img src={imgCodigo} />
                        <div className='bg-white h-20 w-4/5 rounded-xl flex justify-center items-center relative'>
                            <p className='font-bold text-gray-800/60 w-full '>No. Guia 7589223</p>
                            <button style={{ borderRadius: "10px 45px 45px 10px" }} 
                                onClick={()=>btnConsulta()}
                                className='bg-rose-400 absolute -bottom-10 text-white py-4 px-12
                            '>
                                Consultar
                            </button>
                        </div>
                        <div className='flex mt-7 pt-5'>
                            <input type='checkbox' />
                            <p className='ml-2'>Acepto los terminos y condiciones</p>
                        </div>
                    </div>

                    <div className='mt-12 '>
                        <img src={a1} />
                        <img src={a2} />
                    </div>
                    <Foot />
                </div>

            }
        </>
    )
}

export default Inicio