import Link from "next/link";

const Beliefs = () => {
    return (
        <div id="vstanovlennya-avtomativ" className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

            <Link href={process.env.NEXT_PUBLIC_HOST + '/vstanovlennia-vendyngovyh-avtomativ'}>
            <div className="bg-build-2 py-10 px-10 sm:px-18 md:pb-70 rounded-3xl">
                <h3 className="muvokan-tekstas text-4xl sm:text-50xl font-bold text-white leading-snug mb-5 text-center p-2 content-center opacity-80 rounded-2xl">Встановлення вендингових автоматів</h3>
                </div>
                </Link>

                <Link href={process.env.NEXT_PUBLIC_HOST + '/vstanovlennia-avtomatychnyh-kavovarok'}>
                <div className="bg-build py-10 px-10 sm:px-18 md:pb-70 rounded-3xl">
                   <h3 className="muvokan-tekstas text-4xl sm:text-50xl font-bold text-white leading-snug mb-5 text-center p-2 content-center opacity-80 rounded-2xl">Встановлення <br/> кавомашин</h3>
                </div>
                </Link>


            </div>
        </div>
    )
}

export default Beliefs;
