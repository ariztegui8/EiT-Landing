import { useEffect, useState } from "react"
import { createClient } from "contentful"
import { Button } from "@mui/material";
import { Link } from "react-scroll";

const Banners = () => {

  const [mostarContenidoBanner, setMostrarContenidoBanner] = useState([])
    console.log(mostarContenidoBanner);

    const client = createClient({
        space: 'a1emqjt240oh',
        accessToken: 'FBDUv3LuvwNejAfMrD-YTVxfOgEAROqHVhTRw__XhUI'
      })
    
      useEffect(()=>{
        const consultarApi = async ()=>{
          try {
            const res = await client.getEntries({
                content_type: 'contenidoBanner'
            })
            console.log(res);
            setMostrarContenidoBanner(res.items)
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
 
    <div className="banner-home" id="inicio">
       {mostarContenidoBanner.map( contenido =>(
          <div  className=" px-6 md:px-28 pt-36 max-w-3xl" key={contenido.sys.id}>
              <h1 className="leading-8 md:leading-10 text-3xl sm:text-4xl md:text-5xl font-semibold ">{contenido.fields.title}</h1>
              <h1 className="leading-8 md:leading-10 text-3xl sm:text-4xl md:text-5xl text-sky-500 font-black mb-5">{contenido.fields.title2}</h1>
              <p className="mb-4">{contenido.fields.text1}</p>
              <p className="mb-4">{contenido.fields.text2}</p>
              <Link to="formulario" spy={true} smooth={true} offset={-100} duration={700}>
                <Button variant="contained">{contenido.fields.button}</Button>
              </Link>
              
          </div>  
        ))}  
    </div>
  )
}

export default Banners