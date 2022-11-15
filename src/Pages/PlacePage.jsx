import { Category } from "./place";
import { Framefields } from "./place";
import { Navbar } from "../Components/Airbnb/Navbar/navbar";
import { Footer } from "../Components/Airbnb/MetabnbFooter/footer";


export const PlacePage = () => {
    return (
        <div className="placeContainer">
            <Navbar />
            <Category />
            <Framefields />
            <Footer />
        </div>
    )
}