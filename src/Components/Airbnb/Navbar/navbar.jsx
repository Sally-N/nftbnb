import '../../Airbnb/airbnb.css';
import navHouse from './../../../Images/Vector (5).png';
import navMet from './../../../Images/Vector (4).png'
import { useState } from 'react';
import { Modal } from '../../Modal/modal';

// import AdventureSection from '../Adventure/adventure';


export const Navbar = () => {
    // eslint-disable-next-line no-unused-vars
    const [showMyModal, setShowModal] = useState(false);


    const handleOnClose = () => setShowModal(false)
    return (
        <div className="navbar-container">
            <section className="nav-container">
                <img src={navHouse} alt="Logo" className="house" />
                <img src={navMet} alt="" className='Metabnb' />
                <ul className="navbar-nav">
                    <li>
                        <a className="nav-link" aria-current="page" href="#home">Home</a>
                    </li>
                    <li>
                        <a className="nav-link" href="/place">Place To Stay</a>
                    </li>
                    <li>
                        <a className="nav-link" href="placetostay">NFTs</a>
                    </li>
                    <li>
                        <a className="nav-link" href="comunity">Community</a>

                    </li>
                </ul>
                <button id="connectwallet" onClick={() => setShowModal(true)}>Connect Wallet</button>
                <Modal onClose={handleOnClose} open={showMyModal} />
                           
            </section> 
        </div>
    )

}


