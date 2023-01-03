import { createTheme, TextField } from '@mui/material'
import React, { useState } from 'react'
import whatsapp from '../assets/whatsapp.png'
import eyt from '../assets/eyt.png'
import linkedin from '../assets/Linkedin.png'
import facebook from '../assets/Facebook.png'
import google from '../assets/Google.png'
import instagram from '../assets/Instagram.png'
import { Link } from 'react-router-dom'


const Footer = () => {

const [formFooter, setFormFooter] = useState({
    email: ''
})

const handleFormFooter = e =>{
    setFormFooter({
        ...formFooter,
        [e.target.name] : e.target.value
    })
}

const {email} = formFooter;

const handleFormSubmit = e =>{
    e.preventDefault()
    console.log(formFooter);
}

  return (
    <div className="bg-sky-900 px-6 md:px-28 py-16" >
        <footer className="grid sm:grid-cols-1 lg:grid-cols-4 gap-16 justify-center md:justify-start">

            <div className="flex flex-col gap-5 items-center md:items-start">
                <Link>
                    <img width="80px" className="cursor-pointer" src={eyt} alt="" />
                </Link>
                {/* <Link>
                    <img width="40px" src={whatsapp} alt="" />
                </Link> */}
            </div>

            <div className="flex flex-col gap-5 items-center md:items-start">
                <p className="text-lg text-white font-semibold">Contacto</p>
                <div className="flex flex-col gap-3 items-center md:items-start">
                    <p className="text-sm text-white">info@eypop.com</p>
                    <p className="text-sm text-white">Tel/Fax: +54 11 43012355</p>
                    <p className="text-sm text-white">Magallanes 1162 </p>
                    <p className="text-sm text-white">C1166ADF - C.A.B.A.</p>
                    {/* <form onSubmit={handleFormSubmit} className='flex items-center'>
                        <input
                            type="email"
                            placeholder='Enter Email'
                            className="p-2 border-none outline-none rounded-l w-full text-gray-400"
                            onChange={handleFormFooter}
                            name="email"
                            value={email}
                        />
                        <button
                            type='submit'
                            className="p-2 border-none outline-none rounded-r bg-sky-500 "
                        >
                            <SendIcon sx={{color: '#fff'}} />
                        </button>
                    </form> */}
                </div>
            </div>

            <div className="flex flex-col gap-5 items-center md:items-start">
                <p className="text-lg text-white font-semibold">Empresa</p>
                <div className="flex flex-col gap-3 items-center md:items-start">
                    <p className="text-sm text-white">Nosotros</p>
                    <p className="text-sm text-white">Ubicación</p>
                </div>
            </div>

            <div className="flex flex-col gap-5 items-center md:items-start">
                <p className="text-lg text-white font-semibold">¡Seguinos en redes!</p>
                <div className="flex flex-col gap-3 items-center md:items-start">
                    <div className="flex gap-4 text-gray-400">
                        <Link>
                            <img src={linkedin} alt="" />
                        </Link>
                        <Link>
                            <img src={facebook} alt="" />
                        </Link>
                        <Link>
                            <img src={google} alt="" />
                        </Link>
                        <Link>
                            <img src={instagram} alt="" />
                        </Link>
                    </div>
                </div>
            </div>

        </footer>
    </div>
  )
}

export default Footer