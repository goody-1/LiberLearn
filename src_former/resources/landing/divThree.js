import './divThree.css';
import background from '../Image/Books.png';
import arrowImage from '../Image/lucide_arrow-up-right.png';

function DivThree () {
    return (
        <div className='landingThree' style={{backgroundImage: `url(${background})`}}>
            <div className='blueDiv'>
                <div className='blueDivOne'>
                    <h1>Courses</h1>
                    <p>We offer well- detailed subjects in Mathematics, English, Sciences and technical skills. </p>
                </div>
                <div className='blueDivTwo'>
                    <a href='courses' style={{backgroundImage: `url(${arrowImage})`}}>Explore</a>
                </div>
            </div>
        </div>
    );
}

export default DivThree;