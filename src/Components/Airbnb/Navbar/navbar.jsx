import '../../Airbnb/airbnb.css';
import navHouse from './../../../Images/Vector (5).png';
import navMet from './../../../Images/Vector (4).png'
import { useState } from 'react';

export const Navbar = () => {
    // eslint-disable-next-line no-unused-vars
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            <nav className="navbar-container">
                <div className="nav-container">
                    <img src={navHouse} alt="Logo" className="house" />
                    <img src={navMet} alt="" className='Metabnb' />
                    <ul className="navbar-nav">
                        <li>
                            <a className="nav-link" aria-current="page" href="#home">Home</a>
                        </li>
                        <li>
                            <a className="nav-link" href="placetostay">Place To Stay</a>
                        </li>
                        <li>
                            <a className="nav-link" href="placetostay">NFTs</a>
                        </li>
                        <li>
                            <a className="nav-link" href="comunity">Community</a>

                        </li>
                    </ul>
                    <button id="connectwallet" onClick={() => setOpenModal(true)}>Connect Wallet</button>
                </div>
            </nav>
        </div>
    )

}
// const Connectwalletbtn = document.getElementById('connectwallet')
// // const myInput = document.getElementById('myInput')

// Modal.addEventListener('shown.bs.modal', () => {
//   Connectwalletbtn.focus()
// })

