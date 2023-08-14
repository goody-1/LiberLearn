import './Button.css';

function Button(props) {
	return (
		<a className="buttons" target="_blank" rel="noopener noreferrer"
			style={{ backgroundColor: props.bgColor }} href={props.url} >
			<button>{props.buttonText}</button>
		</a>
	);
}
export default Button;
