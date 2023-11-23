// slide.tsx
import Image from "next/image";
import Link from "next/link";

interface SlideProps {
  buttonFirstText: string;
  buttonSecondText: string;
  title: string;
  imageSrc: string;
  link: string;
}

const Slide = ({ buttonFirstText, buttonSecondText, title, imageSrc, link }: SlideProps) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16">
        <div className="grid justify-items-center mx-auto">
          <div className="py-3 text-center lg:text-start">
            {/*
            <button className="text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
              {buttonFirstText}
            </button>
             */}
          </div>
          <div className="py-3 text-center lg:text-start max-w-2xl">
            <h1 className="text-4xl sm:text-65xl font-bold text-darkpurple text-center">
              {title}
            </h1>
          </div>
          <div className="my-7 text-center lg:text-start">
            <Link href={link as string} className="btn text-sm md:text-xl font-semibold hover:shadow-xl bg-green text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-darkgreen">
              {buttonSecondText}
            </Link>
          </div>
        </div>
        <div className="mx-auto">
          <Image src={imageSrc} alt="hero-image" width={800} height={642} />
        </div>
      </div>
    </>
  );
};

export default Slide;


