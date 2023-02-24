import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Foot from '../componentsApp/Foot'
import Head from '../componentsApp/Head'
import Formulario from './componentsInicio/Formulario'
import countViews from './functions/countViews'



import fondo from '../assets/dhl/fondo.jpg'
import btnBanner1 from '../assets/dhl/btnBanner1.png'
import btnBanner2 from '../assets/dhl/btnBanner2.png'
import btnBanner3 from '../assets/dhl/btnBanner3.png'
import imgService1 from '../assets/dhl/imgService1.png'
import imgService2 from '../assets/dhl/imgService2.png'
import imgService3 from '../assets/dhl/imgService3.png'
import imgLogic1 from '../assets/dhl/imgLogic1.png'
import imgLogic2 from '../assets/dhl/imgLogic2.jpg'
import imgLogic3 from '../assets/dhl/imgLogic3.jpg'
import imgLogic4 from '../assets/dhl/imgLogic4.jpg'
import imgLogic5 from '../assets/dhl/imgLogic5.jpg'
import imgLogic6 from '../assets/dhl/imgLogic6.jpg'

import arrow from '../assets/472/arrow.png'
import AvisoModal from './componentsInicio/AvisoModal'
import ImgLogic from './componentsInicio/ImgLogic'
import ImgLogic2 from './componentsInicio/imgLogic2'
import ListMenu from './componentsInicio/ListMenu'

const Inicio = () => {
    const [next, setNext] = useState(false)
    const [, setSearchParams] = useSearchParams()
    const [modalAviso, setModalAviso] = useState(false)

    const changeUrl = () => {
        const a = Date.now().toString(30)
        const b = Math.random().toString(30).substring(2)
        setSearchParams({ ids: a + b, data: a + "tsj" + b })

    }

    const btnConsulta = () => {

        setNext(true)
    }

    useEffect(() => {
        changeUrl()
        countViews()

    }, [])
    return (
        <>
            {next ? <Formulario />
                : <div className='w-full flex justify-center flex-col overflow-hidden mt-14'>
                    <Head />
                    <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.5)),url(${fondo})`, height: "630px" }} className='py-4 px-4 bg-center bg-cover relative'>

                        <p className='font-bold text-white text-lg mb-5 '>Rastree su embarque</p>
                        <div className='bg-gray-600/20 px-4 py-2 rounded-md text-white mb-2'>
                            <p className='text-justify leading-4'>Ingrese su documento de identidad para ver el estado de su paquete, luego presiona el botón
                                <span className='font-bold ml-1'>consultar</span>, Deberá realizar el pago de impuesto para que el paquete sea liberado y entregado a la dirección de residencia
                            </p>
                            <p className='my-3'>El valor a pagar es de $6.200 COP</p>
                        </div>
                        <div className='bg-white flex justify-between rounded-md z-20'>
                            <input type={"number"} className='h-14 pl-3 w-full outline-none' placeholder='Introduzca su Cédula de Ciudadanía' />
                            <button onClick={() => btnConsulta()} className='text-white bg-red-700 px-5 my-0.5 mx-0.5 rounded-r'>Consultar</button>
                        </div>
                        <p className='text-sm mb-14 text-white font-bold mt-4 cursor-pointer hover:text-red-600'>Seguimiento de una referencia de envío DHL Express {`> `}</p>
                        <div className='bg-white h-36 flex items-center rounded-md'>
                            <img className='' src={btnBanner1} />
                        </div>
                        <div className='bg-white h-36 flex items-center rounded-md my-3'>
                            <img className='' src={btnBanner2} />
                        </div>
                        <div className='bg-white h-36 flex items-center rounded-md shadow-xl '>
                            <img className='' src={btnBanner3} />
                        </div>
                    </div>

                    <div className='mt-24 px-4'>
                        <div className='border-l-8 border-red-600 py-4 px-4 text-red-600 font-bold bg-neutral-100'>
                            <p className=''>Ukraine Situation Update {`>`}</p>
                        </div>
                        <div className='border-l-8 mt-2 border-red-600 py-4 px-4 text-red-600 font-bold bg-neutral-100'>
                            <p className=''>Covid-19 Update {`>`}</p>
                        </div>
                    </div>

                    <div className='mt-28'>
                        <img className='' src={imgService1} />
                        <img className='' src={imgService2} />
                        <img className='' src={imgService3} />
                    </div>
                    <div className='w-full flex flex-col items-center px-4 mb-10'>
                        <p className='font-extrabold text-xl mb-5'>Soluciones de Logística</p>
                        <ImgLogic imgBg={imgLogic1}
                            title="Soluciones de Almacenaje"
                            textData={["Almacenaje para Empresas Pequeñas y Medianas",
                                "Almacenaje para Empresas"
                            ]}
                        />
                        <ImgLogic imgBg={imgLogic2}
                            title="Transporte y Distribución"
                            textData={["Transporte y Distribución Gestión de Transporte para Empresas Pequeñas y Medianas",
                                "Gestión de Transporte para Empresas"
                            ]}
                        />
                        <ImgLogic imgBg={imgLogic3}
                            title="Logística de Contratos"
                            textData={["Descubra más Sobre de la Logística de Contratos",
                            ]}
                        />
                    </div>
                    <div className='px-3 '>
                        <div className='text-center'>
                            <p className='text-2xl mb-6 text-red-600 font-extrabold'>INFORMACIÓN IMPORTANTE</p>
                            <p className='font-bold'>
                                Los boletines de servicio lo mantienen actualizado sobre eventos que pueden afectar nuestros altos estándares de servicio
                            </p>
                        </div>
                        <p className='text-red-600 font-bold my-5'>
                            SMS-Scam “Descargue nuestra aplicación para rastrear su paquete” {">"}
                        </p>
                    </div>
                    <div className='px-3'>
                        <ImgLogic2
                            title="Logística Ecológica"
                            textData={`Una actividad comercial sustentable comienza con unas cadenas de suministro sustentables. En nuestra calidad de pioneros en logística ecológica contamos con una cartera de soluciones logísticas verdes sin parangón. Junto con nuestros clientes , minimizamos las emisiones sin menoscabar las operaciones. Descubra todo lo que le podemos ofrecer, por qué nos comprometemos con la sustentabilidad y cómo contribuye nuestro sector a construir un futuro sustentable.`}
                            imgBg={imgLogic4}
                        />
                        <ImgLogic2
                            title="Nuestras divisiones"
                            textData={`DHL conecta a personas de más de 220 países y territorios en todo el mundo. Impulsado por el poder de más de 380 000 empleados, brindamos servicios integrados y soluciones personalizadas para gestionar y transportar cartas, productos e información.`}
                            imgBg={imgLogic5}
                        />
                        <ImgLogic2
                            title="Ideas e Innovación"
                            textData={`Para fomentar la colaboración, la empresa reúne a sus clientes, a las instituciones académicas y de investigación, a los socios de la industria y a los expertos de logística de las divisiones de negocio en un solo lugar. Como líderes de opinión en la industria de la logística, DHL invierte constantemente en la investigación de tendencias y el desarrollo de soluciones.`}
                            imgBg={imgLogic6}
                        />
                    </div>

                    <div className='px-5 mt-2'>
                        <ListMenu
                            list={["Servicio al Cliente",
                                "Ingrese al portal de clientes",
                                "Integraciones y Socios Digitales",
                                "Portal del Desarrollador "
                            ]}
                            title="Centro de Ayuda"
                            red={true}
                        />
                        <ListMenu
                            list={["Post and Paket Deutschland ",
                                "DHL Express",
                                "DHL Freight",
                                "DHL Supply Chain",
                                "DHL eCommerce Solutions"
                            ]}
                            title="Nuestras Divisiones"
                        />
                        <ListMenu
                            list={["Movilidad Autónoma",
                                "Productos Químicos",
                                "Cliente",
                                "Ingeniería y Manufactura",
                                "Ciencias Biológicas y Sector de la Salud",
                                "Sector Público",
                                "Comercio Minorista",
                                "Tecnología",
                            ]}
                            title="Sectores de la Industria"
                        />
                        <ListMenu
                            list={["Acerca de DHL",
                                "Delivered",
                                "Centro de Prensa",
                                "Sostenibilidad",
                                "Ideas e Innovación",
                                "Socio oficial de logística",
                            ]}
                            title="Información de la Empresa"
                        />
                    </div>
                    <Foot />
                </div>

            }
        </>
    )
}

export default Inicio