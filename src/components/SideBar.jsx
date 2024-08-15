import React from 'react';
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure } from '@chakra-ui/react';
import { ImMenu } from "react-icons/im";
import colorPallete from '../context/colors';
import { useTheme } from '../context/themeContext';
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { UpdateTheme } from '../context/themeContext';

function SideBar() {
    const theme = colorPallete();
    const darkTheme = useTheme();
    const toggleTheme = UpdateTheme();
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <div>
            <button onClick={onOpen}>
                <ImMenu color={theme.color} />
            </button>
            <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                <DrawerOverlay />
                <DrawerContent style={{ backgroundColor: theme.bg }}>
                    <DrawerCloseButton style={{ color: theme.color }} />
                    <DrawerBody>
                        <div className='my-6 p-2 border-stone-600'>
                            <div>
                                <a href="#features" className='text-gray-100 lg:text-lg text-2xl hover:text-blue-500' style={{ color: theme.color }}>Features</a>
                            </div>
                            <div className='my-6 border-t p-2 border-stone-600'>
                                <a href="#how" className='text-gray-100 lg:text-lg text-2xl hover:text-blue-500' style={{ color: theme.color }}>How it Works</a>
                            </div>
                            <div className='my-6 border-t p-2 border-stone-600'>
                                <a href="#road" className='text-gray-100 lg:text-lg text-2xl hover:text-blue-500' style={{ color: theme.color }}>Roadmap</a>
                            </div>
                            <div className='my-6 border-t p-2 border-stone-600'>
                                <a href="/api" className='text-gray-100 lg:text-lg text-2xl hover:text-blue-500' style={{ color: theme.color }}>Api</a>
                            </div>
                            <div className='my-6 border-t p-2 border-stone-600'>
                                <a href="/api/#price" className='text-gray-100 lg:text-lg text-2xl hover:text-blue-500' style={{ color: theme.color }}>Price</a>
                            </div>
                            <div className='my-6 border-t p-2 border-stone-600'>
                                <a href="/api" className='text-gray-100 lg:text-lg text-2xl hover:text-blue-500' style={{ color: theme.color }}>Models</a>
                            </div>
                        </div>

                        {/* Theme toggle and login/signup button section */}
                        <div className='mt-8'>
                            <div className='flex items-center justify-between mb-4'>
                                <span className='text-gray-100 text-xl' style={{ color: theme.color }}>Change Theme</span>
                                <button onClick={toggleTheme} className='items-center text-xl flex' style={{ color: theme.color }}>
                                    {darkTheme ? <MdLightMode /> : <MdDarkMode />}
                                </button>
                            </div>
                            <div>
                                <button style={{ color: theme.color }} className='bg-gradient-to-r from-blue-500 to-blue-300 w-full py-4 text-xl rounded-lg hover:bg-blue-600'>
                                    Login/Sign Up
                                </button>
                            </div>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default SideBar;
