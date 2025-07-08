import Banner from './Banner';
import Navbar from './Navbar';
import PartnersSection from './PartnersSection';
import Register from './Register';

const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <PartnersSection></PartnersSection>
        </div>
    );
};

export default Home;