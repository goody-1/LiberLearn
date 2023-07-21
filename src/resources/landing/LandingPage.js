
import './LandingPage.css';
import Header from '../Navigation/header';
import Footer from '../Navigation/footer';
import DivOne from '../landing/divOne';
import DivTwo from '../landing/divTwo';



function LandingPage() {
    return (
        <div className='landingCSS'>
            <Header />
            <div className='landingBody'>
                <DivOne />
                <DivTwo />
            </div>
        </div>
    );
}

export default LandingPage;