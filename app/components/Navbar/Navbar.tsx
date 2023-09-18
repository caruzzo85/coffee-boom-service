"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from './Contactus';
import ContactsPopup from './ContactsPopup';

import { usePathname } from 'next/navigation'

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Хто ми є', href: '#aboutus-section', current: false },
    { name: 'Ремонт', href: '#services-section', current: false },
    { name: 'Встановлення', href: '#services-section', current: false },
    { name: 'Доставка', href: '#services-section', current: false },
    { name: 'Для кафе', href: '#services-section', current: false },
    { name: 'Магазин', href: '#services-section', current: false },
    { name: 'Статті', href: '/articles', current: false },

]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname()

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center justify-between">

                            {/* LOGO */}

                            <div className="">
                                <Link href="/" className='text-2xl sm:text-2xl font-semibold text-black'>
                                    <span className='max-md:hidden'>
                                        <Image
                                            src="/images/logo/logo.svg"
                                            width={150}
                                            height={150}
                                            alt="Picture of the author" /></span>
                                    <span className='md:hidden'>C</span>
                                </Link>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center ">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={'http://localhost:3000/'+item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900' : 'navlinks hover:text-black',
                                                'px-3 py-4 rounded-md text-md font-normal'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                            </div>
                            <Contactusform />
                            <ContactsPopup />

                            {/* DRAWER FOR MOBILE VIEW */}

                            {/* DRAWER ICON */}

                            <div className='block lg:hidden'>
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                            </div>

                            {/* DRAWER LINKS DATA */}

                            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                                <Drawerdata />
                            </Drawer>
                        </div>



                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
