/* eslint-disable no-undef */
import { Navbar } from "../Components/Airbnb/Navbar/navbar";
import { RentaPlace } from "../Components/Airbnb/RentAPlace/rentaplace";
import { Tokens } from "../Components/Airbnb/RentAPlace/rentaplace";
import AdventureSection from "../Components/Airbnb/Adventure/adventure";
import { MetabnbSection } from "../Components/Airbnb/MetabnbNfts/metabnbnfts";
import { Footer } from "../Components/Airbnb/MetabnbFooter/footer";
import { Modal } from "flowbite-react";
import React, { useState } from "react";

const HomePage = () => {
    // eslint-disable-next-line no-unused-vars
    const [showMyModal, setShowModal] = useState(false);

    return (
        <div className="page">
            <Modal open={showMyModal} />
            <Navbar />
            <RentaPlace />
            <Tokens />
            <AdventureSection />
            <MetabnbSection />
            <Footer />
        </div>

    );
}

export default HomePage;


