'use client';

import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { sendEmail } from './sendEmail';
import { validateHeaderValue } from 'http';

export type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

const Join: FC = () => {


    const { control, register, handleSubmit, reset, formState } = useForm<FormData>();
    const {errors} = formState;
    const [isPopupOpen, setIsPopupOpen] = useState(false); // Add state variable

    function onSubmit(data: any) {
        
        sendEmail(data);
        setIsPopupOpen(true);
        reset();
        setTimeout(() => {
            setIsPopupOpen(false);
            errors
        }, 5000);
    }

    return (
        <>

            <div className="my-32">
                <div className='mx-auto max-w-3xl lg:max-w-7xl sm:py-4 lg:px-8'>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold my-6 leading-10">Отримати консультацію</h3>
                        <p className="text-lightblack text-base font-normal">Якщо у вас є запитання, залишіть будь ласка ім&apos;я та номер телефону, аби наш менеджер зв&apos;язався з Вами</p>
                    </div>


                    {isPopupOpen && (
                        <div className="fixed right-0 bottom-0 bg-gold text-center py-2 rounded-full lg:px-2">
                        <div className="p-2 bg:indigo-800 items-center text-indigo-100 leading-none flex lg:inline-flex" role="alert">
                          <span className="font-semibold mr-2 text-left flex-auto">Дякуємо! Ми звяжимось з вами найближчим часом</span>
                      
                          <button onClick={() => setIsPopupOpen(false)}> &#10006;</button>
                        </div>
                      </div>
                    )}
                              
                    {isPopupOpen}

        {errors.email && (
          <div className="invalid-feedback">Please enter a valid email.</div>
        )}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mx-auto max-w-4xl pt-5">
                            <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
                                <div>
                                    <input type="name" className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black"
                                        placeholder="Ім&apos;я"
                                        maxLength={32}
                                        autoComplete="off" />

                                </div>
                                <div>
                                    
                                    <input 
                                    
                                    type="tel"
                                        className={`${errors.phone ? "border-b border-red " : ""} my-4 py-4 sm:pl-6 lg:text-xl text-black bg-lightgrey focus:outline-none bg-emailbg focus:text-black`}
                                        placeholder="* Телефон"
                                        autoComplete="off" 
                                        {...register('phone', {
                                            required: {value: true, message: 'Введіть будь-ласка коректний номер телефону. Наприклад: 0441234567'},
                                            validate: {},
                                            pattern: {
                                                value: /^[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                                                message: 'Введіть будь-ласка керектний номер телефону. Наприклад "0441234567"'
                                            }
                                             })} />

                                </div>
                                <div className="sm:mr-3">
                                    <button type="submit" className="px-4 py-5 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-green hover:bg-darkgreen whitespace-nowrap md:text-md">
                                        Зателефонуйте мені
                                    </button>
                                </div>
                            </div>
                            {errors.phone?.types?.pattern === 'required' && (<p>Phone number only</p>)}
                            {errors.name?.message || errors.phone?.message}
                        </div>
                    </form>

                </div>
            </div>
        </>)
}

export default Join;
