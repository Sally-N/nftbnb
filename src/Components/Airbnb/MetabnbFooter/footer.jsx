import './../../Airbnb/airbnb.css'
import houseImg from './../../../Images/Vector (6).png'
import metaLogo from './../../../Images/Vector (7).png'
import FacebookLogo from './../../../Images/Vector (8).png'
import InstaLogo from './../../../Images/instagram-216-721958.png'
import TwitterLogo from './../../../Images/Vector (10).png'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="imagelinks">
                <div className="logosections">
                    <img src={houseImg} alt="Logo" className="houseImg" />
                    <img src={metaLogo} alt="" className='MetabnbImg' />
                </div>
                <div className="socialmedialinks">
                    <img src={FacebookLogo} alt="" id='fb' />
                    <img src={InstaLogo} alt="" id='insta'/>
                    <img src={TwitterLogo} alt="" />
                </div>
                <div className="copyRight">
                    <p><span>&#169;</span>2022 Metabnb</p>
                </div>
            </div>
            <div className="word-links">
                <div className="comm">
                    <p>Community</p>
                    <ul className='ul'>
                        <li>
                            <a  href="/">NFT</a>
                        </li>
                        <li>
                            <a href="/">Tokens</a>
                        </li>
                        <li>
                            <a href="/">Landlords</a>
                        </li>
                        <li>
                            <a href="/">Discord</a>
                        </li>
                    </ul>
                </div>
                <div className="places">
                    <p>Places</p>
                    <ul className='ul'>
                        <li>
                            <a href="/">Castle</a>
                        </li>
                        <li>
                            <a href="/">farms</a>
                        </li>
                        <li>
                            <a href="/">Beach</a>
                        </li>
                        <li>
                            <a href="/">Learn More</a>
                        </li>
                    </ul>

                </div>
                <div className="aboutus">
                    <p>About Us</p>
                    <ul className='ul'>
                        <li>
                            <a href="/">Road Map</a>
                        </li>
                        <li>
                            <a href="/">Careers</a>
                        </li>
                        <li>
                            <a href="/">Creators</a>
                        </li>
                        <li>
                            <a href="/">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}