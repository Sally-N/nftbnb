import '../../Airbnb/airbnb.css';


export const RentaPlace = () => {
    return (
        <div>
            <div className="words">
                <h3>
                    Rent a Place away from Home in the Metaverse
                </h3>
                <p>
                    we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                </p>
                <div className="search">
                    <input type="text" id="search" placeholder='Search for location' />
                    <button className='Seacrchbtn'>Search</button>
                </div>
            </div>
            <div className="images">
                <img src="../../../../public/Images/image 3.png" alt="" />
                <img src="../../../../public/Images/image 4.png" alt="" />
                <img src="../../../../public/Images/image 5.png" alt="" />
                <img src="../../../../public/Images/image 6.png" alt="" />
            </div>
        </div>
    )
}

 export const Tokens = () => {
    return (
      <div>
        <div className="groupone">
            <img src="./../../public/Images/Group 4038.png" alt="" />
            <p>MBToken</p>
        </div>
        <div className="grouptwo">
            <img src="./../../public/Images/Group 59481.png" alt="" />
            <p>METAMASK</p>
        </div>
        <div className="groupthree">
            <img src="./../../public/Images/Subtract.png" alt="" />
            <p>OpenSea</p>
        </div>
      </div>  
    )
}
