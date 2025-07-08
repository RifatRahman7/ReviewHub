import Banner from './Banner';
import Footer from './Footer';
import HowItWorks from './HowItWorks';
import Navbar from './Navbar';
import PartnersSection from './PartnersSection';
import Register from './Register';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <PartnersSection></PartnersSection>
           <WhyChooseUs></WhyChooseUs>
           <HowItWorks></HowItWorks>
           <Footer></Footer>
        </div>
    );
};

export default Home;