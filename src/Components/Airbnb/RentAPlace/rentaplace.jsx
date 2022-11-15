import '../../Airbnb/airbnb.css';
import rentalOne from "./../../../Images/image 4.png"
import rentalTwo from "./../../../Images/image 3.png"
import rentalThree from "./../../../Images/image 6.png"
import rentalFour from "./../../../Images/image 5.png"
import mbImg from "./../../../Images/Group 4038.png"
import metaImg from "./../../../Images/Group 59481.png"
import openSeaImg from "./../../../Images/Subtract.png"
// import { Modal } from '../../Modal/modal';
// import { useState } from 'react';



export const RentaPlace = () => {
    // const [openModal, setOpenModal] = useState(false);

    return (
        // <div>
        <div className='RentAplaceSection'>
            <div className="wordsSec">
                <h3> Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
                </h3>
                <p>
                    we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                </p>
                <div className="search">
                    <input type="text" id="search" placeholder='Search for location' />
                    <button className='Searchbtn'>Search</button>
                </div>
            </div>
            <div className="imagesSec">
                <div className="leftrentals">
                    <img src={rentalOne} alt="" id="rentalOne" />
                    <img src={rentalThree} alt="" id="rentalthree" />
                </div>
                <div className="rightrentals">
                    <img src={rentalTwo} alt="" id="rentaltwo" />
                    <img src={rentalFour} alt="" id="rental4" />

                </div>
            </div>
        </div>
        // {/* <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
        // </div>
    )
}

export const Tokens = () => {
    return (
        <div className='tokens'>
            <div className="groupone">
                <img src={mbImg} alt="mmb token img" />
                <p>MBToken</p>
            </div>
            <div className="grouptwo">
                <img src={metaImg} alt="metamask img" />
                <p>METAMASK</p>
            </div>
            <div className="groupthree">
                <img src={openSeaImg} alt="opensea img" />
                <p>OpenSea</p>
            </div>
        </div>
    )
}
