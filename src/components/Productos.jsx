import { useEffect, useState } from "react"
import { createClient } from "contentful"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button, Paper } from "@mui/material";
import { Link } from "react-scroll";

const Productos = () => {

    const [miniStands, setMiniStands] = useState([])
    const [laterales, setLaterales] = useState([])
    const [islasPunteras, setIslasPunteras] = useState([])
    const [revestimientos, setRevestimientos] = useState([])
    const [ambientaciones, setAmbientaciones] = useState([])
    const [popLiviano, setPopLiviano] = useState([])
    const [tabs, setTabs] = useState('1');
 
    console.log(miniStands);
    console.log(laterales);
    console.log(islasPunteras);
    console.log(revestimientos);
    console.log(ambientaciones);
    console.log(popLiviano);
    console.log(tabs);

    const handleChange = (event, newValue) => {
      setTabs(newValue);
    };
    

    const client = createClient({
        space: 'a1emqjt240oh',
        accessToken: 'FBDUv3LuvwNejAfMrD-YTVxfOgEAROqHVhTRw__XhUI'
      })
    
      useEffect(()=>{
        const consultarApi = async ()=>{
          try {
            const res = await client.getEntries({
                content_type:  'productosMiniStands'
            })
            console.log(res);
            setMiniStands(res.items)
          
          } catch (error) {
            console.log(error);
          }
        }
        consultarApi()
      }, [])

      useEffect(()=>{
        const consultarApi = async ()=>{
          try {
            const res = await client.getEntries({
                content_type:  'productosLaterales'
            })
            console.log(res);
            setLaterales(res.items)
        
          } catch (error) {
            console.log(error);
          }
        }
        consultarApi()
      }, [])

      useEffect(()=>{
        const consultarApi = async ()=>{
          try {
            const res = await client.getEntries({
                content_type:  'productosIslasPunteras'
            })
            console.log(res);
            setIslasPunteras(res.items)
        
          } catch (error) {
            console.log(error);
          }
        }
        consultarApi()
      }, [])

      useEffect(()=>{
        const consultarApi = async ()=>{
          try {
            const res = await client.getEntries({
                content_type:  'productosRevestimientos'
            })
            console.log(res);
            setRevestimientos(res.items)
        
          } catch (error) {
            console.log(error);
          }
        }
        consultarApi()
      }, [])

      useEffect(()=>{
        const consultarApi = async ()=>{
          try {
            const res = await client.getEntries({
                content_type:  'productosAmbientaciones'
            })
            console.log(res);
            setAmbientaciones(res.items)
        
          } catch (error) {
            console.log(error);
          }
        }
        consultarApi()
      }, [])

      useEffect(()=>{
        const consultarApi = async ()=>{
          try {
            const res = await client.getEntries({
                content_type:  'productosPopLiviano'
            })
            console.log(res);
            setPopLiviano(res.items)
        
          } catch (error) {
            console.log(error);
          }
        }
        consultarApi()
      }, [])

  return (

    <>
        <div className="px-6 md:px-28 py-16" id="productos">
          <h2 className="text-sky-900 text-3xl md:text-4xl font-semibold text-center mb-10 px-6 md:px-28">Productos</h2>
          <Box sx={{ width: '100%', }}>
            <TabContext 
              value={tabs}
            >
              <Box display="flex" justifyContent="center" width="100%">
                <TabList onChange={handleChange}
                   variant="scrollable"
                   scrollButtons
                   allowScrollButtonsMobile
                >
                  <Tab label="Mini Stands" value="1" />
                  <Tab label="Laterales" value="2" />
                  <Tab label="Islas punteras" value="3" />
                  <Tab label="Revestimientos" value="4" />
                  <Tab label="Ambientaciones" value="5" />
                  <Tab label="POP liviano" value="6" />
                </TabList>
              </Box>
                <TabPanel value="1">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation 
                    // autoplay={{delay: 1000}}
                    grabCursor={true}
                    // effect={"fade"}
                    className="mySwiper"
                    // pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      968: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      1200: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                    }}
                  >
      
                  
                  {miniStands.map( producto =>(
                      <SwiperSlide key={producto.sys.id}>
                            <div className="flex flex-col text-center items-center gap-6 border py-6 px-10 rounded-3xl">
                              <img width="170px" className="mb-6" src={producto.fields.image.fields.file.url} alt="" />
                              <p>{producto.fields.title}</p>
                              <Link to="formulario" spy={true} smooth={true} offset={-100} duration={700}>
                                <Button variant="contained">¡Lo quiero!</Button>
                              </Link>
                              
                            </div>
                      </SwiperSlide>
                  ))}  
                </Swiper>
              </TabPanel>

              <TabPanel value="2">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation 
                    // autoplay={{delay: 1000}}
                    grabCursor={true}
                    // effect={"fade"}
                    className="mySwiper"
                    // pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      968: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      1200: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                    }}
                  >
      
                  
                  {laterales.map( producto =>(
                      <SwiperSlide key={producto.sys.id}>
                            <div className="flex flex-col text-center items-center gap-6 border py-6 px-10 rounded-3xl">
                              <img width="170px" className="mb-6" src={producto.fields.image.fields.file.url} alt="" />
                              <p>{producto.fields.title}</p>
                              <Link to="formulario" spy={true} smooth={true} offset={-100} duration={700}>
                                <Button variant="contained">¡Lo quiero!</Button>
                              </Link>
                            </div>
                      </SwiperSlide>
                  ))}  
                </Swiper>
              </TabPanel>

              <TabPanel value="3">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation 
                    // autoplay={{delay: 1000}}
                    grabCursor={true}
                    // effect={"fade"}
                    className="mySwiper"
                    // pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      968: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      1200: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                    }}
                  >
      
                  
                  {islasPunteras.map( producto =>(
                      <SwiperSlide key={producto.sys.id}>
                            <div className="flex flex-col text-center items-center gap-6 border py-6 px-10 rounded-3xl">
                              <img width="170px" className="mb-6" src={producto.fields.image.fields.file.url} alt="" />
                              <p>{producto.fields.title}</p>
                              <Link to="formulario" spy={true} smooth={true} offset={-100} duration={700}>
                                <Button variant="contained">¡Lo quiero!</Button>
                              </Link>
                            </div>
                      </SwiperSlide>
                  ))}  
                </Swiper>
              </TabPanel>

              <TabPanel value="4">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation 
                    // autoplay={{delay: 1000}}
                    grabCursor={true}
                    // effect={"fade"}
                    className="mySwiper"
                    // pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      968: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      1200: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                    }}
                  >
      
                  
                  {revestimientos.map( producto =>(
                      <SwiperSlide key={producto.sys.id}>
                            <div className="flex flex-col text-center items-center gap-6 border py-6 px-10 rounded-3xl">
                              <img width="170px" className="mb-6" src={producto.fields.image.fields.file.url} alt="" />
                              <p>{producto.fields.title}</p>
                              <Link to="formulario" spy={true} smooth={true} offset={-100} duration={700}>
                                <Button variant="contained">¡Lo quiero!</Button>
                              </Link>
                            </div>
                      </SwiperSlide>
                  ))}  
                </Swiper>
              </TabPanel>

              <TabPanel value="5">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation 
                    // autoplay={{delay: 1000}}
                    grabCursor={true}
                    // effect={"fade"}
                    className="mySwiper"
                    // pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      968: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      1200: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                    }}
                  >
      
                  
                  {ambientaciones.map( producto =>(
                      <SwiperSlide key={producto.sys.id}>
                            <div className="flex flex-col text-center items-center gap-6 border py-6 px-10 rounded-3xl">
                              <img width="170px" className="mb-6" src={producto.fields.image.fields.file.url} alt="" />
                              <p>{producto.fields.title}</p>
                              <Link to="formulario" spy={true} smooth={true} offset={-100} duration={700}>
                                <Button variant="contained">¡Lo quiero!</Button>
                              </Link>
                            </div>
                      </SwiperSlide>
                  ))}  
                </Swiper>
              </TabPanel>

              <TabPanel value="6">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation 
                    // autoplay={{delay: 1000}}
                    grabCursor={true}
                    // effect={"fade"}
                    className="mySwiper"
                    // pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      968: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      1200: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                    }}
                  >
      
                  
                  {popLiviano.map( producto =>(
                      <SwiperSlide key={producto.sys.id}>
                            <div className="flex flex-col text-center items-center gap-6 border py-6 px-10 rounded-3xl">
                              <img width="170px" className="mb-6" src={producto.fields.image.fields.file.url} alt="" />
                              <p>{producto.fields.title}</p>
                              <Link to="formulario" spy={true} smooth={true} offset={-100} duration={700}>
                                <Button variant="contained">¡Lo quiero!</Button>
                              </Link>
                            </div>
                      </SwiperSlide>
                  ))}  
                </Swiper>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
    </>
  )
}

export default Productos