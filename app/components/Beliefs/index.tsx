
const Beliefs = () => {
    return (
        <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

                {/* COLUMN-1 */}

                <div className="bg-build py-10 px-10 sm:px-18 md:pb-70 rounded-3xl">
                   <h3 className="muvokan-tekstas text-4xl sm:text-50xl font-bold text-white leading-snug mb-5 text-center sm:text-start p-2 content-center opacity-80 rounded-2xl">Встановлення кавоварок</h3>
                   <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className="bg-build py-10 px-10 sm:px-18 md:pb-70 rounded-3xl">
                   <h3 className="muvokan-tekstas text-4xl sm:text-50xl font-bold text-white leading-snug mb-5 text-center sm:text-start p-2 content-center opacity-80 rounded-2xl">Встановлення кавоварок</h3>
                   <div className="sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Beliefs;
