import Customers from "../Components/Customers";
import Footer from "../Components/Footer";
import GetApp from "../Components/GetApp";
import ShowMenu from '../Components/ShowMenu';
import Hero from "../Components/Home";
import Nav from "../Components/Nav";
import Services from "../Components/Services";
import NavUser from "../Components/NavUser";
import { useAuth } from "../Components/AuthProvider";


export default function HomePage() {
   const {user} = useAuth();
    return (
        <>
            {user ? <NavUser/> : <Nav/>}
            <Hero />
            <Services />
            <ShowMenu/>
            <Customers/>  
            <GetApp/> 
            <Footer/>
        </>
    )
}