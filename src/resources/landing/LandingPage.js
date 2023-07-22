
import './LandingPage.css';
import Header from '../Navigation/header';
import Footer from '../Navigation/footer';
import DivOne from '../landing/divOne';
import DivTwo from '../landing/divTwo';
import DivThree from '../landing/divThree';
import DivFour from '../landing/divFour';
import DivFive from '../landing/divFive';



function LandingPage() {
    return (
        <div className='landingCSS'>
            <Header />
            <div className='landingBody'>
                <DivOne />
                <DivTwo />
                <DivThree />
                <DivFour />
                <DivFive />
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;