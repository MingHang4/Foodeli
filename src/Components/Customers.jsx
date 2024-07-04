export default function Customers() {
    return (
        <div>
            <div className="Customers m-10 flex justify-center items-center">
                <div className="img"><img src="./images/customers.png" alt="" /></div>
                <div className="title pl-10">
                    <div className="description">
                        <h1 className="mb-4 text-red-600 font-bold">WHAT THEY SAY</h1>
                        <h1 className="mb-4 font-bold text-3xl ">What Our Customers <br />Say About Us</h1>
                        <p className="mb-10">“Fudo is the best. Besides the many and delicious <br />
                            meals, the service is also very good, especially in <br />
                            the very fast delivey. I highly recommend Fudo <br />
                            to you”.</p>
                    </div>
                    <div className="flex items-center mb-5">
                        <div><img src="./images/profile-review.png" alt="" />
                        </div>
                        <span className="pl-3">
                        <p className="text-base font-bold">Theresa Jordan</p>
                        <p className="text-sm text-gray-400">Food Enthusiast</p>
                        </span>
                    </div>
                    <div className="rating flex -space rtl:space-x-reverse items-center">
                        <img src="./images/star-full.png" alt="" />
                        <img src="./images/star-full.png" alt="" />
                        <img src="./images/star-full.png" alt="" />
                        <img src="./images/star-full.png" alt="" />
                        <img src="/images/star-empety.png" alt="" />
                        <p className="pl-4 text-xs font-semibold">4,8</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
