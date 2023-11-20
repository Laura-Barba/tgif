"use client";
import React from 'react';
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Logo from '../assets/images/omegapoint-logo.png'
import TgifLogo from '../assets/images/tgif.png'
import Menu from '../assets/images/menu.png'

import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navigation from '../Components/Navigation/Navigation';

export const Header = () => {
    const [navigation, setNavigation] = useState(false)
    const [showCloseButton, setShowCloseButton] = useState(false)

    const showNavigation = () => {
        setNavigation(true);
        setShowCloseButton(true);
    }

    const closeNavigation = () => {
        setNavigation(false);
        setShowCloseButton(false);
    }

    return (
        <div className="bg-darkGreen fixed w-full z-10">
            <div className="hidden lg:flex container flex flex-row justify-between items-center relative top-1/2 h-16 lg:h-28 p-3 md:p-5 ">
                <div className="grow basis-0">
                    <Link href='/'>
                        <Image
                            src={Logo}
                            alt="Omegapoint-logo"
                        />
                    </Link>
                </div>
                <div>
                    <Link href='/'>
                        <Image
                            src={TgifLogo}
                            alt="Tgif-logo"
                            className="max-w-[80%] md:max-w-[100%]"
                        />
                    </Link>
                </div>
                <nav className="grow basis-0">
                    <ul className="flex flex-row justify-center text-xl">
                        <li><a href="/upcoming-events" className="no-underline text-white px-5">Kommande</a></li>
                        <li><a href="/book-techmentor" className="no-underline text-white px-5">TechMentor</a></li>
                        <li><a href="/past-events" className="no-underline text-white px-5">Föregående</a></li>
                    </ul>
                </nav>
            </div>
            <div className="block lg:hidden container flex justify-between items-center relative top-1/2 h-16 lg:h-28 p-3 md:p-5 ">
                <div className="grow basis-0 hidden md:block">
                    <Link href='/'>
                        <Image
                            src={Logo}
                            alt="Omegapoint-logo"
                        />
                    </Link>
                </div>
                <div>
                    <Link href='/'>
                        <Image
                            src={TgifLogo}
                            alt="Tgif-logo"
                            className="max-w-[80%] md:max-w-[100%]"
                        />
                    </Link>
                </div>
                {!showCloseButton && (
                    <div className="grow basis-0">
                        <Image
                            src={Menu}
                            alt="menu"
                            onClick={() => {setNavigation(true);
                                        setShowCloseButton(true);}}
                            className="ml-auto"
                        />
                    </div>
                )}

                {showCloseButton && (
                    <div className="grow basis-0 text-right">
                        <FontAwesomeIcon icon={faX} inverse size="2x" onClick={closeNavigation} className="p-5" />
                    </div>
                )}
            </div>

            {navigation && (
                <Navigation 
                setNavigation={setNavigation}
                />
            )
            }




        </div >
    );
};

