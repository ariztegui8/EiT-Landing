import { createClient } from "contentful"
import { useEffect, useState } from "react"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banners from "../components/Banners";
import SliderClient from "../components/SliderClient";
import Formulario from "../components/Formulario";
import SobreNosotros from "../components/SobreNosotros";
import Soluciones from "../components/Soluciones";
import Productos from "../components/Productos";

const Home = () => {



  return (
   <>
        <Header />
        <Banners />
        <SobreNosotros />
        <Soluciones />
        <Productos />
        <SliderClient />
        <Formulario />
        <Footer />
   </>
  )
}

export default Home