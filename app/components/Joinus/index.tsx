
const Join = () => {

    const createAccount = async (formData: FormData) => {
        "use server";
    
        const name = formData.get("name");
        const phone = formData.get("phone");
    
        console.log({ name, phone });
      };
      
    return (
        <div className="my-32">
            <div className='mx-auto max-w-3xl lg:max-w-7xl sm:py-4 lg:px-8'>

                <div className="text-center">
                    <h3 className="text-4xl sm:text-6xl font-bold my-6 leading-10">Отримати консультацію</h3>
                    <p className="text-lightblack text-base font-normal">Якщо у вас є запитання, залишіть будь ласка ім&apos;я та номер телефону, аби наш менеджер зв&apos;язався з Вами</p>
                </div>

                <form action={createAccount} method="POST">
                <div className="mx-auto max-w-4xl pt-5">
                    <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
                        <div>
                            <input type="name" className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black"
                            placeholder="Ім&apos;я"
                            maxLength={32}
                            autoComplete="off" />
                        </div>
                        <div>
                            <input type="phone" 
                                  maxLength={13}
                                 className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:border-l border-linegrey bg-lightgrey focus:outline-none bg-emailbg focus:text-black" placeholder="Телефон" autoComplete="off" />
                        </div>
                        <div className="sm:mr-3">
                            <button type="submit" className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue whitespace-nowrap">
                                Зателефонуйте мені!
                            </button>
                        </div>
                    </div>
                </div>
                </form>

            </div>
        </div>
    )
}

export default Join;
