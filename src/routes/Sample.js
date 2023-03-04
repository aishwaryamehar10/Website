import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Brands from '../components/Brands';
import Stories from '../components/Stories';
import Footer from '../components/Footer';
import FooterBottom from '../components/FooterBottom';

function Sample() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                title="We crush minimal design."
                text="MONOCHROME is a creative agency based in Chicago. We evelope the Genesis Framework and build mobile optimized themes for WordPress."
            />
            <Experience
                buttonText="Learn More"
                url="/"
                btnClass="show" />
            <Brands
                cName="brands"
                brandImg="https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                title="We design brands."
                text="A simple look is all you need to crush your competition" />
            <Stories />
            <Footer
                buttonText="Learn More"
                url="/"
                btnClass="show"
            />
            <FooterBottom />
        </>

    )
}

export default Sample;