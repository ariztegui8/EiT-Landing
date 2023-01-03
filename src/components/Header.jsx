import React, { useState } from 'react'
import logoShop from '../assets/logo-shop.png'
import logo from '../assets/logo.png'
import PublicIcon from '@mui/icons-material/Public';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Button } from '@mui/material';
import World from '../icons/world';
import Phone from '../icons/Phone';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'

const Header = () => {

  const [deleteModal, setDeleteModal] = useState(false);

  const toggleDelete = ()=>{
    console.log(deleteModal);
    setDeleteModal(!deleteModal)
  }

  const navigation = [
    { name: 'Inicio', href: 'inicio' },
    { name: 'Sobre nosotros', href: 'nosotros' },
    { name: 'Soluciones', href: 'soluciones' },
    { name: 'Productos', href: 'productos' },
    { name: 'Clientes', href: 'clientes'},
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }


  return (
    // <div  className="px-28 shadow-md fixed w-full z-50 fondo-celeste">
    //     <nav className='flex justify-between items-center py-3'>
    //         <div>
    //             <img width="170px" src={logoShop} alt="Logo" />
    //         </div>
    //         <div className="flex items-center gap-8">
    //             <Link to="#">Inicio</Link>
    //             <Link to="#">Sobre nosotros</Link>
    //             <Link to="#">Soluciones</Link>
    //             <Link to="#">Productos</Link>
    //             <Link to="#">Clientes</Link>
    //             <Link to="#"><World color="primary"/></Link>
    //             <Button variant="outlined" sx={{textTransform: 'capitalize'}} startIcon={<Phone color="primary" />}>
    //               ¡Contactanos!
    //             </Button>
    //         </div>
    //     </nav>
    // </div>
    <div className="px-6 md:px-28 shadow-md fixed w-full z-50 fondo-celeste">
      <Disclosure as="nav" >
        {({ open }) => (
          <>
            <div className="mx-auto ">
              <div className="relative flex h-16 items-center justify-between gap-3">
                <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset ">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center sm: justify-center  xl:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to="inicio" spy={true} smooth={true} offset={-100} duration={700}>
                      <img
                        className="block h-8 w-auto md:hidden cursor-pointer"
                        src={logoShop}
                        alt="Your Company"
                      />
                    </Link>
                    <Link to="inicio" spy={true} smooth={true} offset={-100} duration={700}>
                      <img
                        className="hidden h-12 w-auto md:block cursor-pointer"
                        src={logoShop}
                        alt="Your Company"
                      />
                    </Link>
                  </div>
                </div>

                <div className="hidden sm:ml-6 xl:block">
                    <div className="flex items-center gap-8">
                      {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            spy={true} smooth={true} offset={-100} duration={700}
                            className="cursor-pointer"
                            // className={classNames(
                            //   item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            //   'px-3 py-2 rounded-md text-sm font-medium'
                            // )}
                            // aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                      ))} 
                      <Link  to="formulario" spy={true} smooth={true} offset={-100} duration={700}>
                        <Button variant="outlined" sx={{textTransform: 'capitalize'}} startIcon={<LocalPhoneOutlinedIcon color="primary" />}>
                          ¡Contactanos!
                        </Button>
                      </Link>
                        
                    </div>
                  </div>
              </div>
            </div>

            <Disclosure.Panel className="xl:hidden">
              {({ close }) => (
                <div className="flex flex-col gap-4 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    spy={true} smooth={true} offset={-70} duration={700}
                    className="cursor-pointer"
                    onClick={close}
                      // className={classNames(
                      //   item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      //   'px-3 py-2 rounded-md text-sm font-medium'
                      // )}
                      // aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                      
                  </Link>
                ))}
                  {/* <Link  to="formulario" spy={true} smooth={true} offset={-100} duration={700}>
                      <Button variant="outlined" sx={{textTransform: 'capitalize'}} startIcon={<LocalPhoneOutlinedIcon color="primary" />}>
                        ¡Contactanos!
                      </Button>
                    </Link> */}
            </div>

             )}
              
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>

  )
}

export default Header