import React from "react";
import Nav from "../../components/navigation/Nav";
import AboutUs from "../../components/AboutUs/AboutUs";
import Diploms from "../../components/Diploms/Diploms";
import Mistakes from "../../components/Mistakes/Mistakes";
import Mistakes2 from "../../components/Mistakes2/MistakesSec";
import ToVacancy from "../../components/ToVacancy/ToVacancy";

import "./aboutUsPage.scss";
import Environment from "../../components/environment/Environment";
import ClientSection from "../../components/clientSection/ClientSection";
import Footer from "../../components/footer/Footer";

function AboutUsPage() {
    return (
        <>
            <Nav />
            <Environment/>
             <ClientSection/>
            <Mistakes/>
            <Mistakes2 />
            <AboutUs />
            <Diploms />
            {/*<ToVacancy />*/}
            <Footer/>
        </>
    );
}
export default AboutUsPage;