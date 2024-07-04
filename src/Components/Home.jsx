export default function Hero() {
    return (
        <section className="m-10 bg-white dark:bg-white-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="flex flex-col justify-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Claim Best R on <br />Fast Food & <br />Restaurants </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-black">Our job is to filling your tummy with delicious food <br />and  with fast and free delivery</p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                        <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                            Get started
                            <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="#" className="py-3 px-5 sm:ms-4 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 ">
                            Watch Video
                        </a>
                    </div>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src="./images/hero.png" alt="" srcset="" />
                </div>
                <div className="flex -space-x-4 rtl:space-x-reverse">
                <img src="./images/Ellipse 5.png" alt="" />
                <img src="./images/Ellipse 6.png" alt="" />
                <img src="./images/Ellipse 7.png" alt="" />    
                <img className="pl-5" src="./images/Group 8.png" alt="" />           
                </div>
            </div>
        </section>

    )
}