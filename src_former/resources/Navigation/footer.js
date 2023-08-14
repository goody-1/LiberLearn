import './footer.css';
import facebook from '../Image/facebook.png';
import logo from '../Image/white Logo & Mark light.png';
import email from '../Image/email.png';
import linkedin from "../Image/linkedin.png";
import instagram from "../Image/instagram.png";
import location from '../Image/location.png';
import telephone from '../Image/telephone.png';
import twitter from '../Image/twitter.png';
import thread from '../Image/thread.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerTopLeft">
          <h1>Support</h1>
          <p>Our Partners</p>
          <p>Help</p>
          <p>FAQs</p>
          <img src={logo} alt="Logo" />
        </div>
        <div className="footerTopRight">
          <h1>Contact</h1>
          <p>
            <img src={location} alt="address icon" className="FooterImage" />
            11, Abajo Street, Ikeja, Lagos
          </p>
          <p>
            <img src={email} alt="email" className="FooterImage" />
            liberlearn.edsa@outlook.com
          </p>
          <p>
            <img src={telephone} alt="telephone" className="FooterImage" />
            +234-707-546-8110
          </p>
          <div className="socialIcons">
            <SocialIcons
              url="https://www.facebook.com"
              imageLink={facebook}
              socialName="Facebook"
            />
            <SocialIcons
              url="https://www.twitter.com"
              imageLink={twitter}
              socialName="Twitter"
            />
            <SocialIcons
              url="https://www.instagram.com"
              imageLink={instagram}
              socialName="Instagram"
            />
            <SocialIcons
              url="https://www.linkedin.com"
              imageLink={linkedin}
              socialName="LinkedIn"
            />
            <SocialIcons
              url="https://www.thread.com"
              imageLink={thread}
              socialName="Thread"
            />
          </div>
        </div>
      </div>
      <p>&copy; 2023 LiberLearn</p>
    </div>
  );
}

export default Footer;

function SocialIcons(props) {
  return (
    <div className="socials">
      <a href={props.url}>
        <img src={props.imageLink} alt={props.socialName} />
      </a>
    </div>
  );
}