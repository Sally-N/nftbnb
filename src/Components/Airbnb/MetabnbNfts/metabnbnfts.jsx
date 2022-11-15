import './../../Airbnb/airbnb.css';
import SeveralOne from './../../../Images/image 9.png'
import SeveralTwo from './../../../Images/image 7.png'
import SeveralThree from './../../../Images/image 8.png'

export const MetabnbSection = () => {
    return (
        <div className="MetaSec">
            <div className="metaText">
                <h4>
                    Metabnb NFTs
                </h4>
                <p>
                    Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs.
                    These NFTs gives our cutomer access to loads of our exclusive services.
                </p>
                <button>Learn More</button>
            </div>
            <div className="severalImages">
                <img src={SeveralOne} alt="" id='severalOne'/>
                <img src={SeveralTwo} alt=""  id='severalTwo'/>
                <img src={SeveralThree} alt="" id='severalThree' />
                
            </div>
        </div>
    )
}