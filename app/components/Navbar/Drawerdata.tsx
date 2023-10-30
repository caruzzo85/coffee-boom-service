"use client"

import React, { useState } from "react";

import Link from "next/link";
import ContactsPopup from "./ContactsPopup";
import Contactusform from "./Contactus";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Хто ми є', href: '/#aboutus-section', current: false },
    { name: 'Ремонт', href: '/#services-section', current: false },
    { name: 'Встановлення', href: '#vstanovlennya-avtomativ', current: false },
    { name: 'Доставка', href: '/dostavka-kavy-ta-obladnannia', current: false },
    { name: 'Для кафе', href: '/dlia-kafe', current: false },
    { name: 'Магазин', href: 'https://coffee-boom.com.ua/', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {

    return (
        <>
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="mt-4"></div>

                      <Contactusform/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Data;
