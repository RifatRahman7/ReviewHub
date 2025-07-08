import Banner from './Banner';
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
        </div>
    );
};

export default Home;