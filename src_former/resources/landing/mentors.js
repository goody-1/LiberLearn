import './mentors.css';

function Mentors(props) { 
    return (
      <div className="mentors">
            <img src={props.image} alt={ props.mentor } />
        <h2>{props.mentor}</h2>
        <h3>{props.title}</h3>
        <p>{props.information}</p>
      </div>
    );
}

export default Mentors;