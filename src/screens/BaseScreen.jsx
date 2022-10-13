import { Outlet } from "react-router-dom"
import Footer from "../components/Footer";
import Header from "../components/Header";

const BaseScreen =()=>{
    return(
        <>
            <Header />
            <main className="">
                <Outlet />
            </main>   
        </>
    )
}
export default BaseScreen;