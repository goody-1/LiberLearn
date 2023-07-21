// import LandingPage from './landing/LandingPage.js';
import './login.css';

function Login(props) {
return (
    <div className="loginContent">
        <img src={props.image} alt='onboarding logo' />
        <div className='loginForm'>
            <OnboardForm />
        </div>
    </div>
);
}

export default Login;


function OnboardForm (props) {
    return (
        <div className='form'>
            <p><span className='welcome'>Welcome Back</span> Login in</p>
            <form className='formBody'>
                <label for="uniqueID">Unique ID:</label>
                <input type='text' placeholder='Enter your Unique ID' name="uniqueID"></input>

                <label for="password">Password:</label>
                <input type='password' placeholder='Enter your password' name="password"></input>

                
            <a href='/courses'>Login</a>
        
            </form>
        </div>
    );
}
