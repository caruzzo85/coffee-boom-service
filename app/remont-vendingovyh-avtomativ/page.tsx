'use client'

import { notFound } from 'next/navigation'
import type { Metadata, ResolvingMetadata } from 'next'
import ContactsPopup from '../components/Navbar/ContactsPopup';
import Join from '../components/Joinus';


export default async function RepairVendingovyhAvtomativ() {

   return (
<>

      <main className="relative flex flex-col justify-center bg-white overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
  
      <div className="px-6 py-10 mx-auto">
  
  <div className="mt-10">
  
  <div className="mb-4 md:mb-0 w-full max-w-screen-lg mx-auto relative">
  <h2 className="text-4xl font-semibold text-gray-100 leading-tight bg-white">
     Ремонт кавових автоматів у Києві
    </h2>
  </div>
  
  <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-lg mx-auto text-lg leading-relaxed">
  <h1>Миттєве відновлення роботи кавових автоматів з Coffee Boom Service</h1>

<p>Чи виникали колись у вас проблеми з кавовим автоматом у найбільш незручний момент?
Ми розуміємо, що кожна хвилина простою обладнання може коштувати вам клієнтів і
прибутку. Відчуйте спокій, знаючи, що Coffee Boom Service завжди поруч, готовий
забезпечити швидкий та професійний ремонт кавових автоматів будь-якої складності.</p>

<h2>Наші переваги:</h2>
<ol>
    <li>Ефективна діагностика проблеми. Висококваліфіковані фахівці оперативно виявлять
    джерело поломки та негайно розпочнуть роботу по виправленню проблеми.</li>
    <li>Швидкий та надійний ремонт. Ми пропонуємо швидке відновлення роботи кавових
    автоматів, забезпечуючи найвищу якість ремонтних робіт та використовуючи тільки
    якісні та оригінальні запчастини.</li>
    <li>Технічна підтримка. Після завершення ремонту ми забезпечуємо технічну підтримку
    та консультації з експлуатації кавового автомата, щоб ви могли уникнути подібних
    проблем у майбутньому.</li>
</ol>

<p>Відновіть роботу свого кавового автомата негайно з Coffee Boom Service. Наші
професіонали готові допомогти в будь-який день, забезпечуючи безперебійне
функціонування вашого обладнання.</p>
  </div>
  </div>
    </div>
    <Join/>
      </div>
    </main>
  
  </>
  );
  } 