import { Outlet } from "react-router-dom"
import Footer from "../components/Footer";
import Header from "../components/Header";
import Starbackground from "../components/starbackground";

const BaseScreen =()=>{

    return(
        <>
            <Starbackground/>
            <Header />
                <main className="z-0 pt-16">
                <Outlet />
            </main>   
        </>
    )
}
export default BaseScreen;