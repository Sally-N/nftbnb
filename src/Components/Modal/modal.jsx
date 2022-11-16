import './../Airbnb/airbnb.css'
import mimg from './../../Images/image 66.png'
import wimg from './../../Images/image 69.png'
import arrow from './../../Images/Vector (12).png'
// import x from './../../Images/x.png'


export const Modal = ({ open, onClose }) => {
    if (!open) return null
    return (
        <div className="bg-black bg-opacity-50 backdrop-blur-lg" id="connectwalletModal" onClick={onClose} >
            <div className="modalContainer">
                <div className="walletheader">
                    <h2>Connect Wallet</h2>
                    <p onClick={onClose} className='CloseBtn'>X</p>
                </div>
                <div className="walletbody">
                    <p id='choosew'>Choose your preffered wallet:</p>
                    <div className="metamask">
                        <div className="imgText">
                            <img src={mimg} alt="" />
                            <p>Metamask</p>
                        </div>
                        <img src={arrow} alt="" />
                    </div>
                    <div className="metamask">
                        <div className="imgText">
                            <img src={wimg} alt="" />
                            <p>Wallet Connect</p>
                        </div>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}