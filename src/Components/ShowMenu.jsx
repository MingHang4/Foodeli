import { useState } from "react";


export default function ShowMenu() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(""); // Reset to show all categories
    } else {
      setSelectedCategory(category);
    }
  };
  const data = [
    {
      id: 1,
      name: "Burger",
      image: "./images/Fresh_beef_burger_isolated_-1-removebg-preview.png",
      price: "$7.5",
    },
    {
      id: 2,
      name: "Burger Deluxe",
      image: "./images/Fresh_beef_burger_isolated_-1-removebg-preview.png",
      price: "$7.5",
    },
    {
      id: 3,
      name: "Ramen",
      image: "./images/ramen-removebg-preview.png",
      price: "$7.2",
    },
    {
      id: 4,
      name: "Cupcake",
      image: "./images/Freshly_cupcake_-5-removebg-preview.png",
      price: "$",
    },
    {
      id: 6,
      name: "Burger Wumbo",
      image: "./images/Fresh_beef_burger_isolated_-1-removebg-preview.png",
      price: "$7.5",
    },
    {
      id: 7,
      name: "Burger Mini",
      image: "./images/Fresh_beef_burger_isolated_-1-removebg-preview.png",
      price: "$7.5",
    },
    {
      id: 8,
      name: "Ramen Mini",
      image: "./images/ramen-removebg-preview.png",
      price: "$7.2",
    },
    {
      id: 9,
      name: "Ramen Besar",
      image: "./images/ramen-removebg-preview.png",
      price: "$7.2",
    },
    {
      id: 10,
      name: "Ramen Cup",
      image: "./images/ramen-removebg-preview.png",
      price: "$7.2",
    },
    {
      id: 11,
      name: "California Pizza",
      image: "./images/Pizza 1.png",
      price: "$7.2",
    },
    {
      id: 12,
      name: "Pepperoni Pizza",
      image: "./images/Pizza 2.png",
      price: "$7.5",
    },
    {
      id: 14,
      name: "Beef Pizza",
      image: "./images/Pizza 3.png",
      price: "$7.2",
    },
    {
      id: 15,
      name: "Mushroom Pizza",
      image: "./images/Pizza 4.png",
      price: "$7.2",
    },
  ];

  const filteredData = selectedCategory
  ? data
      .filter((item) =>
        item.name.toLowerCase().includes(selectedCategory.toLowerCase())
      )
      .slice(0, 4) 
  : data.slice(0, 4); 

  return (
    <div className="mt-12 px-8 mx-14 mb-10">
      <div>
        <span className="text-[#EB0029] font-bold">OUR MENU</span>
        <h1 className="text-2xl font-bold my-2">Menu That Always <br />
          Makes You Fall In Love
        </h1>
        <div className="flex gap-4 mt-10">
          <div className="flex-shrink-0">
            <button className={`bg-red-600 pr-[4rem] pl-2 py-3 rounded-full text-white flex gap-4 ${selectedCategory === "Pizza" ? "bg-green-600" : ""
              }`} onClick={() => handleCategoryClick("Pizza")} >

              <span className=" bg-white rounded-full p-1">
                <img
                  className="max-h-[20px] "
                  src="./images/pizza-icon.png"
                  alt=""
                />
              </span>
              Pizza
            </button>
          </div>
          <div className="flex-shrink-0">
            <button className={`bg-red-600 pr-[4rem] pl-2 py-3 rounded-full text-white flex gap-4 ${selectedCategory === "Burger" ? "bg-green-600" : ""
              }`} onClick={() => handleCategoryClick("Burger")} >

              <span className=" bg-white rounded-full p-1">
                <img
                  className="max-h-[20px] "
                  src="./images/burger-icon.png"
                  alt=""
                />
              </span>
              Burger
            </button>
          </div>
          <div className="flex-shrink-0">
            <button className={`bg-red-600 pr-[4rem] pl-2 py-3 rounded-full text-white flex gap-4 ${selectedCategory === "Cupcake" ? "bg-green-600" : ""
              }`} onClick={() => handleCategoryClick("Cupcake")} >

              <span className=" bg-white rounded-full p-1">
                <img
                  className="max-h-[20px] "
                  src="./images/cupcake-icon.png"
                  alt=""
                />
              </span>
              Cupcake
            </button>
          </div>
          <div className="flex-shrink-0">
            <button className={`bg-red-600 pr-[4rem] pl-2 py-3 rounded-full text-white flex gap-4 ${selectedCategory === "Ramen" ? "bg-green-600" : ""
              }`} onClick={() => handleCategoryClick("Ramen")} >

              <span className=" bg-white rounded-full p-1">
                <img
                  className="max-h-[20px] "
                  src="./images/ramen-icon.png"
                  alt=""
                />
              </span>
              Ramen
            </button>
          </div>
        </div>
        <div className="flex flex-row flex-wrap gap-12 mt-10 mx-auto justify-center ">
        {filteredData.map((d) => (
                    <div
                      key={d.id} className="flex flex-row gap-12 mx-[8px] px-[50px] py-[30px] border-2 rounded-[15px]" >

                      <div className="flex flex-col  items-center">
                        <img src={d.image} alt="" className="max-w-[100px]" />
                        <p className="font-semibold">{d.name}</p>
                        <p className=" text-justify">{d.price}</p>
                      </div>
                    </div>
                  ))}
        </div>
      </div>
    </div>
  )
}
