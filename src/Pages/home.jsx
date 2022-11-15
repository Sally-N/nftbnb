import { Navbar } from "../Components/Airbnb/Navbar/navbar";
import { RentaPlace } from "../Components/Airbnb/RentAPlace/rentaplace";
import { Tokens } from "../Components/Airbnb/RentAPlace/rentaplace";
import AdventureSection from "../Components/Airbnb/Adventure/adventure";
import { MetabnbSection } from "../Components/Airbnb/MetabnbNfts/metabnbnfts";
import { Footer } from "../Components/Airbnb/MetabnbFooter/footer";

const HomePage = () => {
    return (
        <div className="page">
            <div className="smallsection">
                <Navbar />
                <RentaPlace />
                <Tokens />
                <AdventureSection />
                <MetabnbSection />
                <Footer />
            </div>
        </div>

    );
}

export default HomePage;


