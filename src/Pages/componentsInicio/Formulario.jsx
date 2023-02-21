import React from 'react'
import logo472 from '../../assets/472/472logo.jpg'
import finalForm from '../../assets/472/footerForm.jpg'
import f4 from '../../assets/472/f4.jpg'
import { useState } from 'react'
import Modal from './Modal'
import { useLayoutEffect } from 'react'
import FormPay from './FormPay'
import InputSimple from './InputSimple'
const initialState = {
  CI: "",
  name: "",
  cel: "",
  email: "",
  direc: "",
  city: ""
}

const Form = () => {
  const [modal, setModal] = useState(false)
  const [infoPay, setInfoPay] = useState(initialState)
  const [showForm, setShowForm] = useState(false)
  
  const handlerChange = (e) => {
    setInfoPay({ ...infoPay, [e.target.name]: e.target.value })
  }

  const pagar = (e) => {

    setShowForm(true)
    e.preventDefault()
    // setModal(true)
  }

  useLayoutEffect(() => {
    if (infoPay.CI.length > 10) {
      setInfoPay({ ...infoPay, CI: infoPay.CI.slice(0, 10) })
    }

    if (infoPay.cel.length > 10) {
      setInfoPay({ ...infoPay, cel: infoPay.cel.slice(0, 10) })
    }
  }, [infoPay.CI, infoPay.cel])

  return (
    <div className='flex w-full flex-col'>
      {showForm ? <FormPay infoPay={infoPay} />
        : <>
          <img src={logo472} />

          <form className='px-6'>
            <div className='my-10  '>
              <InputSimple place={"NOMBRE"}
                handlerChange={handlerChange}
                data={infoPay.name}
                nameInput={"name"}
                type={"text"}
              />
            </div>

            <div className='my-10'>
               <InputSimple place={"APELLIDO"}
                handlerChange={handlerChange}
                data={infoPay.apellido}
                nameInput={"apellido"}
                type={"text"}
              />
            </div>

            <div className='my-10'>             
               <InputSimple place={"NUMERO DE DOCUMENTO"}
                handlerChange={handlerChange}
                data={infoPay.CI}
                nameInput={"CI"}
                type={"number"}
              />
            </div>

            <div className='my-10'>
               <InputSimple place={"TELEFONO DE CONTACTO"}
                handlerChange={handlerChange}
                data={infoPay.cel}
                nameInput={"cel"}
                type={"number"}
              />
            </div>

            <div className='my-10'>
               <InputSimple place={"CIUDAD DE ENTREGA"}
                handlerChange={handlerChange}
                data={infoPay?.city}
                nameInput={"city"}
                type={"text"}
              />
            </div>

            <div className='my-10'>
              <InputSimple place={"DIRECCION DE ENTREGA"}
                handlerChange={handlerChange}
                data={infoPay?.direc}
                nameInput={"direc"}
                type={"text"}
              />
            </div>

            <div className='mt-10'>
              <InputSimple place={"CORREO ELECTRONICO"}
                handlerChange={handlerChange}
                data={infoPay?.email}
                nameInput={"email"}
                type={"text"}
              />
            </div>

            <button onClick={(e) => pagar(e)}
              className='w-full py-2 mt-5 bg-blue-700/90 text-white rounded-md text-3xl'
            >
              Continuar
            </button>
          </form>
          <img className='mt-96' src={finalForm} />
          <img src={f4} />
        </>}
    </div>
  )
}

export default Form