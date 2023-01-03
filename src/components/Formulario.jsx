import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import avion from '../assets/avion-papel.svg'
import mensaje from '../assets/mensaje.svg'

const Formulario = () => {

    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        tel: '' ,
        asunto: '' ,
        multiline: '' ,
    })

    const handleChange = e =>{
        setFormulario({
            ...formulario,
            [e.target.name] : e.target.value
        })
    }

    const {nombre, email, tel, asunto, multiline} = formulario;


    const handleSubmit = e =>{
        e.preventDefault()
        console.log(formulario);
    }

  return (
    <div  className='grid sm:grid-cols-1 lg:grid-cols-2 items-center' id="formulario">
        <div className='flex items-center justify-center' >
            <div className='sm: hidden lg:block pl-28 py-10'>
                <img src={mensaje} alt="img-mensaje" />
            </div>
        </div>

        <div  className='px-6 md:px-28 py-10 fondo-soluciones '>
            <form  onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center">
                <div className='flex items-center gap-4 m-auto'>
                    <h3 className=' text-sky-900 text-4xl font-semibold text-center'>Contacto</h3>
                    {/* <img  src={avion} alt="img-mensaje" /> */}
                </div>
                <Box>
                    <TextField
                        type="text"
                        label="Nombre"
                        onChange={handleChange}
                        name="nombre"
                        value={nombre}
                        fullWidth
                        required
                        sx={{background: '#fff'}}
                    />
                </Box>

                <Box>
                    <TextField
                        type="email"
                        label="Email"
                        onChange={handleChange}
                        name="email"
                        value={email}
                        fullWidth
                        required
                        sx={{background: '#fff'}}
                    />
                </Box>

                <Box>
                    <TextField
                        type="number"
                        label="Teléfono"
                        onChange={handleChange}
                        name="tel"
                        value={tel}
                        fullWidth
                        required
                        sx={{mb: 3, background: '#fff'}}
                    />
                </Box>

                <Box>
                    <TextField
                        type="text"
                        label="Asunto"
                        onChange={handleChange}
                        name="asunto"
                        value={asunto}
                        fullWidth
                        sx={{background: '#fff'}}
                    />
                </Box>

                <Box>
                    <TextField
                        type="text"
                        multiline
                        label="Escriba aquí su consulta"
                        onChange={handleChange}
                        name="multiline"
                        value={multiline}
                        fullWidth
                        minRows="3"
                        sx={{background: '#fff'}}
                    />
                </Box>

                <Box sx={{textAlign: 'right'}}>
                    <Button type='submit' variant="contained" size="large">Enviar</Button>
                </Box>
            </form>
        </div>
    </div>
  )
}

export default Formulario