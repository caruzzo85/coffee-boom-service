import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "About us.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        link: 'Learn more'
    }
]

const Aboutus = () => {
    return (
        <div className="">
                    <div id="aboutus-section" className="mx-auto max-w-7xl sm:py-20 lg:px-8 my-16 text-xl">
            <h2 className="text-center text-4xl pb-10 sm:text-65xl font-black">Трішки про нас</h2>
            <p className="pb-5">
                Компанія Coffee-Boom Service працює на ринку кавового обладнання України більше 20 років.
                За цей час було відремонтовано більше ніж 6000 автоматичних кавомашин, більше ніж 3000 професійних кавомашин
                та іншого обладнання.
            </p>
            <p>
                На нашому сайті Ви можете ознайомитися з повним переліком послуг, що надаються нашою компанією. У разі виникнення питання зателефонуйте нам за вказаними телефонами,
                або замовте <Link href={"#callback"} className="underline font-bold">зворотній дзвінок</Link>.
            </p>
        </div>
        </div>

    )
}

export default Aboutus;