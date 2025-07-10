import Image from 'next/image';
import ContactsPopup from '../components/Navbar/ContactsPopup';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Встановлення кавомашин у Києві',
  description: 'Встановлення кавомашин у Києві. Установка кофемашин в Киеве.',
}

export default async function ArticlePage() {



  return (<>
    <main className="relative flex flex-col justify-center bg-white overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">

        <div className="px-6 py-10 mx-auto">

          <div className="mt-10">

            <div className="mb-4 md:mb-0 w-full max-w-screen-lg mx-auto relative">
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight bg-white">
              Кавовий куточок під ключ — це просто!
              </h2>
            </div>


            <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-lg mx-auto text-lg leading-relaxed">
            <Image src="/images/coffee-corner.webp" alt='' width={300} height={300} className='float-left' />
            <p><strong>Реалізація кавового бізнесу з &ldquo;Coffee-Boom Service&ldquo;</strong></p>
    
    <p>Встановити кавовий куточок — це найпростіший спосіб швидко запустити власний прибутковий мікроформат без складних ремонтів, дозвільної документації та зайвих витрат. Компанія &ldquo;Coffee-Boom Service&ldquo; пропонує комплексне рішення для бізнесів у Києві та по всій Україні: повністю готовий кавовий модуль з автоматом, зонами для приготування, зберігання та обслуговування.</p>
    
    <h2>Що входить у кавовий куточок?</h2>
    
    <ul>
        <li>Професійна кавомашина</li>
        <li>Блок видачі стаканів</li>
        <li>Місце для сиропів, цукру, помелу</li>
        <li>Контейнер для відходів</li>
        <li>Освітлення, оформлення та брендована панель</li>
    </ul>
    
    <div className="highlight">
        <p><strong>Усе продумано до деталей — достатньо розетки та 1 м² площі, щоб почати продавати каву.</strong></p>
    </div>
    
    <h2>Чому варто обрати &ldquo;Coffee-Boom Service&ldquo;</h2>
    
    <ul>
        <li>Комплексна реалізація: від дизайну до підключення</li>
        <li>Стильний зовнішній вигляд, що приваблює клієнтів</li>
        <li>Встановлення за 1 день</li>
        <li>Професійне обслуговування і сервісне забезпечення</li>
        <li>Можливість індивідуального брендування</li>
    </ul>
    
    <h2>Для кого це рішення?</h2>
    
    <ul>
        <li>Торгові центри</li>
        <li>Бізнес-центри</li>
        <li>Салони краси, барбершопи</li>
        <li>Автосалони, АЗС</li>
        <li>Готелі, хостели, офіси</li>
    </ul>
    
    <p><strong>Ви надаєте площу — ми робимо все інше.</strong> Не потрібно думати про закупівлю обладнання, монтаж чи оформлення дозволів. Ми встановлюємо, налаштовуємо, навчаємо персонал (за потреби) і надаємо підтримку на всіх етапах.</p>
    
    <h2>Що ми гарантуємо:</h2>
    
    <ul>
        <li>Швидкий старт без інвестицій у ремонт</li>
        <li>Мінімальні витрати на запуск</li>
        <li>Повне технічне забезпечення</li>
        <li>Рентабельну кавову точку за 3 дні</li>
    </ul>
    
    <div className="highlight">
        <p>&ldquo;Coffee-Boom Service&ldquo; — це експерти в створенні автономних кавових рішень. Ми відкриємо для вас кавовий бізнес без стресу — під ключ, із сервісом, який працює на вас.</p>
    </div>
    
    <div className="cta">
        Залишайте заявку — і ваш кавовий куточок буде встановлено вже найближчим часом!
    </div>

              <ContactsPopup align="center" btnName="Звязатися з нами" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </>
  );
}

