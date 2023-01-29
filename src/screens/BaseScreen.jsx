import { Outlet } from "react-router-dom"
import Footer from "../components/Footer";
import Header from "../components/Header";
import Starbackground from "../components/starbackground";
import PresentationScreen from "./PresentationScreen";
import LoisirScreen from "./loisirScreen";
import TechnoScreen from "./TechnoScreen";
import ExperienceScreen from "./ExperienceScreen";
import ContactScreen from "./ContactScreen";
import HomeScreen from "./homescreen";

const BaseScreen =()=>{

    return(
        <>
            <Starbackground/>
            <main className="z-0 pt-4">
                <Header/>
                <Outlet />
            </main>   
        </>
    )
}
export default BaseScreen;