
export default function Footer() {
  return (
    <div className="m-10">
      <div className="flex justify-around">
        <div className="flex flex-col gap-7">
          <div className="flex items-center ">
            <img src="./images/Frame 1.png" alt="" />
            <h1 className="ml-5 font-bold text-2xl">Foodeli</h1>
          </div>
          <div>
            <p>Our job is to filling your tummy with<br />
              delicious food and  with fast and <br />
              free delivery.</p>
          </div>
          <div className="flex gap-5">
            <img src="./images/instagram.png" alt="" />
            <img src="./images/facebook.png" alt="" />
            <img src="./images/twitter.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl">About</h1>
          <p>About Us</p>
          <p>Features</p>
          <p>News</p>
          <p>Menu</p>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl">Company</h1>
          <p>Why Foodeli?</p>
          <p>Partner With Us</p>
          <p>FAQ</p>
          <p>Blog</p>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl">Support</h1>
          <p>Account</p>
          <p>Support Center</p>
          <p>Feedback</p>
          <p>Contact Us</p>
          <p>Accessibilty</p>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-2xl">Get in Touch</h1>
          <p>Question or feedback?</p>
          <p>We’d love to hear from you</p>
          <a href="" className="inline-flex justify-center items-center py-4 px-10 text-base text-center border-2 text-black rounded-full bg-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-900">
            Email Address
            <span className="pl-4">
              <img src="./images/carbon_send.png" alt="" />
            </span></a>
        </div>

      </div>
    </div>

  )
}
