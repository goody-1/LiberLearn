import './footer.css';
import facebook from '../Image/admin.png';
import logo from '../Image/white Logo & Mark light.png';

function Footer() {
    return (
      <div className="footer">
        <div className="footerTop">
          <div className="footerTopLeft">
            <h1>Support</h1>
            <p>Our Partners</p>
            <p>Help</p>
                    <p>FAQs</p>
                    <img src={logo} alt='Logo' />
          </div>
          <div className="footerTopRight">
            <h1>Contact</h1>
            <p>11, Abajo Street, Ikeja, Lagos</p>
            <p>liberlearn.edsa@outlook.com</p>
            <p>+234-707-546-8110</p>
            <div className='socialIcons'>
                <SocialIcons imageLink={ facebook } socialName="Facebook"/>
                <SocialIcons imageLink={ facebook } socialName="Facebook"/>
                <SocialIcons imageLink={ facebook } socialName="Facebook"/>
                <SocialIcons imageLink={ facebook } socialName="Facebook"/>
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
        <div className='socials'>
            <img src={props.imageLink} alt={props.socialName} />
        </div>
    );
}