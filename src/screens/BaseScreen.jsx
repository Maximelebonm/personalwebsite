import { Outlet } from "react-router-dom"
import Footer from "../components/Footer";
import Header from "../components/Header";
import Starbackground from "../components/starbackground";

const BaseScreen =()=>{
    return(
        <>
            <Starbackground/>
            <Header />
                <Outlet />
            <main className="z-0">
            </main>   
        </>
    )
}
export default BaseScreen;