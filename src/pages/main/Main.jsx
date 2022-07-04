import './main.css'
import Nav from "../../components/navigation/Nav";
import Header from "../../components/header/Header";
import ClientSection from "../../components/clientSection/ClientSection";
import ReviewsSection from "../../components/reviewsSection/ReviewsSection";
import Statistics from "../../components/statistics/Statistics";
import CostSection from "../../components/costSection/CostSection";
import ConditionsSection from "../../components/conditionsSection/ConditionsSection";
import StackSection from "../../components/stackSection/StackSection";
import WorkMapSection from "../../components/workMapSection/WorkMapSection";
import Footer from "../../components/footer/Footer";

function Main(){
    return(
        <>
                <Nav/>
                <Header/>
                <ClientSection/>
                <ReviewsSection/>
                <Statistics/>
                <CostSection/>
                <ConditionsSection/>
                <StackSection/>
                <WorkMapSection/>
                <Footer/>
        </>
    )
}
export default Main