import '../../shared/base.css'
import './Footer.css'
import logo from '../../resources/logos/white_logo.png'
import location from '../../resources/icons/location.png'
import telephone from '../../resources/icons/telephone.png'
import email from '../../resources/icons/email.png'
import facebook from '../../resources/icons/facebook.png'
import instagram from '../../resources/icons/instagram.png'
import thread from '../../resources/icons/thread.png'
import twitter from '../../resources/icons/twitter.png'
import linkedin from '../../resources/icons/linkedin.png'

function Footer() {
	return (
		<footer className='background-purple'>
			<section className='footer-top'>
				<div className="footer-top-left">
					<h1>Support</h1>
					<p>Our Partners</p>
					<p>Help</p>
					<p>FAQs</p>
					<img src={logo} alt="Logo" />
				</div>
				<div className="footer-top-right">
					<h1>Contact</h1>
					<p>
						<img src={location} alt="address icon" className="contact-icon" />
						11, Abajo Street, Ikeja, Lagos
					</p>
					<p>
						<img src={email} alt="email" className="contact-icon" />
						liberlearn.edsa@outlook.com
					</p>
					<p>
						<img src={telephone} alt="telephone" className="contact-icon" />
						+234-707-546-8110
					</p>
					<div className="social-icons">
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
			</section>
			<p>&copy; 2023 LiberLearn</p>
		</footer>
	)
}
export default Footer;


function SocialIcons(props) {
	return (
		<a href={props.url} className="socials">
			<img src={props.imageLink} alt={props.socialName} />
		</a>
	)
}
