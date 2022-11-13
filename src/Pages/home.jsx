import Navbar from "../Components/Airbnb/Navbar/navbar";
import { RentaPlace } from "../Components/Airbnb/RentAPlace/rentaplace";
import { Tokens } from "../Components/Airbnb/RentAPlace/rentaplace";


const HomePage = () => {
    return (
        <div className="page">
            <div className="smallsection">
                <Navbar />
                <RentaPlace />
                <Tokens />
            </div>
        </div>

    );
}

export default HomePage;


