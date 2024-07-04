export default function MenuItem() {
    const menuItems = [
        {
            id: 1,
            name: "California Pizza",
            price: 7.5,
            image: "/images/Pizza 1.png",
        },
        {
            id: 2,
            name: "Margherita Pizza",
            price: 6.5,
            image: "/images/Pizza 2.png",
        },
        {
            id: 3,
            name: "Pepperoni Pizza",
            price: 8.0,
            image: "/images/Pizza 3.png",
        },
        {
            id: 4,
            name: "California Pizza",
            price: 7.5,
            image: "/images/Pizza 1.png",
        },
        {
            id: 5,
            name: "Margherita Pizza",
            price: 6.5,
            image: "/images/Pizza 2.png",
        },
        {
            id: 6,
            name: "Pepperoni Pizza",
            price: 8.0,
            image: "/images/Pizza 3.png",
        },
        // Tambahkan menu lainnya sesuai kebutuhan
    ];

    return (
        <div className="flex justify-center">
            <div className="flex gap-8 flex-wrap">
                {menuItems.map((item) => (
                    <div key={item.id} className="card-menu border border-gray-400 text-center py-4 px-4 rounded-2xl hover:scale-[1.02] cursor-pointer">
                        <img className="w-50" src={item.image} alt="" />
                        <h1>{item.name}</h1>
                        <p>${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
