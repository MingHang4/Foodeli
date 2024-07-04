import Customers from "../Components/Customers";
import Footer from "../Components/Footer";
import GetApp from "../Components/GetApp";
import Hero from "../Components/Home";
import Nav from "../Components/Nav";
import Services from "../Components/Services";

export default function HomePage() {
    return (
        <>
            <Nav />
            <Hero />
            <Services />
            <Customers/>  
            <GetApp/> 
            <Footer/>
        </>
    )
}