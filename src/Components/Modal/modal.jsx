import './../Airbnb/airbnb.css'
import mimg from './../../Images/image 66.png'
import wimg from './../../Images/image 69.png'
import arrow from './../../Images/Vector (12).png'


export const Modal = ({ open, onClose }) => {
    if (!open) return null
    return (
        <div onClick={onClose} class="modal-dialog modal-dialog-centered modal-dialog-scrollable" id="
        connectwalletModal">
            <div className="modalContainer">
                <div className="walletheader">
                    <h2>Connect Wallet</h2>
                    <p onClick={onClose} className='CloseBtn'>X</p>
                </div>
                <div className="walletbody">
                    <p>Choose your preffered wallet:</p>
                    <div className="metamask">
                        <img src={mimg} alt="" />
                        <p>Metamask</p>
                        <img src={arrow} alt="" />
                    </div>
                    <div className="metamask">
                        <img src={wimg} alt="" />
                        <p>Wallet Connect</p>
                        <img src={arrow} alt="" />
                    </div>
                </div>
            </div>

        </div>



    )
}