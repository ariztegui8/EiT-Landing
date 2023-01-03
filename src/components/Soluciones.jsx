import { useEffect, useState } from "react"
import { createClient } from "contentful"
import { Button } from "@mui/material"
import { Link } from "react-scroll"

const Soluciones = () => {

    const [mostarSoluciones, setMostrarSoluciones] = useState([])
    console.log(mostarSoluciones);

    const client = createClient({
        space: 'a1emqjt240oh',
        accessToken: 'FBDUv3LuvwNejAfMrD-YTVxfOgEAROqHVhTRw__XhUI'
      })
    
      useEffect(()=>{
        const consultarApi = async ()=>{
          try {
            const res = await client.getEntries({
                content_type: 'solucionesCard'
            })
            console.log(res);
            setMostrarSoluciones(res.items)
            // await client.getEntries().then(entries =>{
            //     setCards(entries.items)
            // })
          } catch (error) {
            console.log(error);
          }
        }
        consultarApi()
      }, [])

  return (

    <>
      <div className="fondo-soluciones pt-20" id="soluciones">
        <h2 className="text-sky-900 text-3xl md:text-4xl font-semibold text-center mb-10 px-6 md:px-28">Soluciones</h2>
        <p className="text-sm md:text-base text-gray-400 md:text-gray-400 text-center px-6 md:px-28 max-w-6xl m-auto">Ofrecemos un equipo de Ingenieros, Diseñadores y Técnicos con experiencia en el mercado que colaboran conjuntamente en el desarrollo de soluciones POP a fin de lograr una integración punta a punta.</p>

        <div className="px-6 md:px-28 pt-20 pb-20">
            {mostarSoluciones.map( solucion =>(
                <div className=" flex-padre mb-10 flex justify-center" key={solucion.sys.id}>
                    <div className=" flex-custom flex flex-col  md:flex-row md:max-w-full bg-white shadow-lg">
                        <img className="w-full h-64 md:h-auto object-cover md:w-60 lg:w-80 xl:w-full" src={solucion.fields.image.fields.file.url} alt="" />
                        <div className="p-8 flex flex-col items-start justify-start">
                            <p className="text-2xl font-semibold text-sky-900 mb-3">{solucion.fields.title}</p>
                            <p className="mb-3 text-sm leading-7 md:leading-6 md:text-base ">{solucion.fields.text}</p>
                            <Link to="formulario" spy={true} smooth={true} offset={-100} duration={700}>
                              <Button variant="outlined">{solucion.fields.button}</Button>
                            </Link>
                           
                        </div>
                    </div>
                </div>
            ))}  
        </div>
      </div>
    </>
  )
}

export default Soluciones