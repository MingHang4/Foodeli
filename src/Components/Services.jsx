//rfc (cara cepat)
function ServicesItem({imageSrc, title, description}) {
    return (
        <div className="item w-72">
            <img src={imageSrc} alt="" />
            <div className="text-center">
                <h1 className="text-xl font-bold">{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}
export default function Services() {
    return (
        <div className="">
            <div className="text-center">
                <h1 className="text-red-500 font-bold">
                    WHAT WE SERVE</h1>
                <h1 className="text-4xl font-bold">Your Favourite Food <br />
                    Delivery Partner
                </h1>
            </div>

            <div className="flex justify-center">

                <ServicesItem
                    imageSrc="/images/Services 1.png"
                    title="Easy To Order"
                    description="You only need a few steps in ordering food"
                />
                <ServicesItem
                    imageSrc="/images/Services 2.png"
                    title="Fastest Delivery"
                    description="Delivery that is always ontime even faster"
                />
                <ServicesItem
                    imageSrc="/images/Services 3.png"
                    title="Best Quality"
                    description="Not only fast for us quality is also number one"
                />
            </div>
        </div>
    )
}