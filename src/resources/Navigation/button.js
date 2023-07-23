import './button.css';

function Button(props) {
    return (
        <a className="getStarted" href={props.url} >{props.buttonText}</a>
    );
 }

export default Button;