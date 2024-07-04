import Hero from "../Components/Home";
import Nav from "../Components/Nav";
import Services from "../Components/Services";
import ShowMenu from "../Components/ShowMenu";

export default function HomePage() {
    return (
        <>
            <Nav />
            <Hero />
            <Services />
            <ShowMenu/>
        </>
    )
}