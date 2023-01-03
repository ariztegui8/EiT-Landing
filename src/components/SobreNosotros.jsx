import { useEffect, useState } from "react"
import { createClient } from "contentful"

const SobreNosotros = () => {

    const [mostarSobreNosotros, setMostrarSobreNosotros] = useState([])
    console.log(mostarSobreNosotros);

    const client = createClient({
        space: 'a1emqjt240oh',
        accessToken: 'FBDUv3LuvwNejAfMrD-YTVxfOgEAROqHVhTRw__XhUI'
      })
    
      useEffect(()=>{
        const consultarApi = async ()=>{
          try {
            const res = await client.getEntries({
                content_type: 'sobreNosotros'
            })
            console.log(res);
            setMostrarSobreNosotros(res.items)
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
    <div className="fondo-celeste pt-20" id="nosotros">
      <h2 className="text-sky-900 text-3xl md:text-4xl font-semibold text-center">Sobre nosotros</h2>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-20 px-6 md:px-28 pt-20 pb-20">
          {mostarSobreNosotros.map( nosotros =>(
            <div className="flex flex-col gap-4 items-center text-center" key={nosotros.sys.id}>
              <img  className="mb-6" src={nosotros.fields.image.fields.file.url} alt="" />
                <p className="text-2xl font-semibold ">{nosotros.fields.title}</p>
                <p className="text-sm text-gray-400">{nosotros.fields.text}</p>
            </div>  
          ))}  
      </div>
    </div>
    </>
  )
}

export default SobreNosotros