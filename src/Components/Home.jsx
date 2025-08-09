import Banner from './Banner';
import Footer from './Footer';
import HowItWorks from './HowItWorks';
import Navbar from './Navbar';
import PartnersSection from './PartnersSection';
import PromotionalSection from './PromotionalSection';
import Register from './Register';
import ReviewTipsGuides from './ReviewTipsGuides';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <PromotionalSection></PromotionalSection>
           <PartnersSection></PartnersSection>
           <WhyChooseUs></WhyChooseUs>
           <HowItWorks></HowItWorks>
           <ReviewTipsGuides></ReviewTipsGuides>
           <Footer></Footer>
        </div>
    );
};

export default Home;