import '../../Airbnb/airbnb.css';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="container-fluid">

                <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" className="" />
                <h4>Metabnb</h4>
                <div className="collapse navbar-collapse" id="navbarNav">
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
                </div>
                <button className="modal-dialog modal-dialog-centered" id="myModal">
                    ...
                </button>
            </div>
        </nav>
    )

}

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

export default Navbar;