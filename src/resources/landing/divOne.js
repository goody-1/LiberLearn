import './divOne.css';

function DivOne () {
    return (
        <div className='landingDiv'>
            <div className='topLeft'>
                <div className='green1'></div>
                <h1><span className='blueText'>Empowering</span>  Minds, 
                <br />Shaping <span className='blueText'>Futures</span></h1>
                <p>We are committed to providing exceptional, <br />learning experience that is
                             engaging, interactive and fun.</p>
                        <div className='green2'></div>
                        <button>Get Started</button>
                        
                    </div>
                    <div className='topRight' >
                        <div className='rightTop'></div>
                        <div className='rightMid' > </div>
                        <div className='rightLower'></div>
                    </div>
        </div>
    );
}

export default DivOne;