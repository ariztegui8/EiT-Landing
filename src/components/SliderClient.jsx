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

const SliderClient = () => {

    const [mostarSlider, setMostrarSlider] = useState([])
    console.log(mostarSlider);

    const client = createClient({
        space: 'a1emqjt240oh',
        accessToken: 'FBDUv3LuvwNejAfMrD-YTVxfOgEAROqHVhTRw__XhUI'
      })
    
      useEffect(()=>{
        const consultarApi = async ()=>{
          try {
            const res = await client.getEntries({
                content_type: 'clientes'
            })
            console.log(res);
            setMostrarSlider(res.items)
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
        <div className="px-6 md:px-28 pt-6 pb-20" id="clientes">
          <h2 className="text-sky-900 text-3xl md:text-4xl font-semibold text-center mb-10 px-6 md:px-28">Nuestros clientes</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
                spaceBetween={50}
                slidesPerView={2}
                loop={true}
                // navigation 
                centeredSlides={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                grabCursor={true}
                // effect={"fade"}
                className="mySwiper"
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                // data-aos="fade-up" data-aos-duration="2000"
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                  968: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                  1200: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                
                }}
            >
    
                
                {mostarSlider.map( slider =>(
                    <SwiperSlide key={slider.sys.id}>
                        <div >
                            <img width="170px" src={slider.fields.image.fields.file.url} alt="" />
                        </div>  
                    </SwiperSlide>
                ))}  
            </Swiper>
        </div>
    </>
  )
}

export default SliderClient