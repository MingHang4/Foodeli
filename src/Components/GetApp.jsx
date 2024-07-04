export default function GetApp() {
  return (
    <div>
        <div className="m-20 p-5 flex bg-orange-100 justify-around items-center rounded-3xl">
        <div className="m-5">
            <h1 className="mb-5 text-red-600 font-bold">DOWNLOAD APP</h1>
            <h1 className="mb-5 text-3xl font-bold">Get Started With <br />
            Fudo Today!</h1>
            <p className="mb-5">Discover food wherever and whenever and get <br />
            your food delivered quickly.</p>
            <a href="" className="inline-flex justify-center items-center py-4 px-10 text-base text-center text-white rounded-full bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">Get The App</a>
        </div>
        <div>
            <img className="m-5" src="./images/getapp.png" alt="" />
        </div>  
    </div>
    </div>
  )
}
