import './divTwo.css';
import image1 from '../Image/Little boy listening to his teacher through headphones.png';
import image2 from '../Image/LittleBoy.png';
import image3 from '../Image/Small black boy elearning on a computer at home.png';

function DivTwo () {
    return (
        <div className='landingTwo'>
            <div className='twoLeft'>
                <div className='leftOne'>
                    <img src={image1} alt='Boy Learning' />
                </div>
                <div className='leftTwo'>
                    <div className='leftTwoTop'>
                    <img src={image2} alt='Boy Learning' />
                    </div>
                    <div className='leftTwoBottom'>
                    <img src={image3} alt='Boy Learning' />
                    </div>
                </div>
            </div>
            <div className='twoRight'>
                <div className='twoRightContent'>
                    <h1>About us</h1>
                    <p>Welcome to our educational website, where we ensure juvenile 
                        correctional children have access to education.</p>
                    <p>We aim to create an engaging and interactive learning experience.</p>

                    <button>Know More</button>
                </div>
            </div>
        </div>
    );
}

export default DivTwo;