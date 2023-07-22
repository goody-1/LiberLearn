import "./divFour.css";
import Mentors from '../landing/mentors';
import mentor1 from '../Image/admin.png';

function DivFour() {
  return (
    <div className="landingFour">
      <h1>Our Expert Mentors</h1>
      <div className="mentorsList">
        <Mentors
          image={mentor1}
          mentor="Oluwaseyi Sorinade"
          title="Product Manager"
          information="UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse."
        />
        <Mentors
          image={mentor1}
          mentor="Goodness Atunde"
          title="Backend Developer"
          information="UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse."
        />
        <Mentors
          image={mentor1}
          mentor="Anuoluwa Balogun"
          title="UX/UI Product Manager"
          information="UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse."
        />
      </div>
    </div>
  );
}

export default DivFour;
