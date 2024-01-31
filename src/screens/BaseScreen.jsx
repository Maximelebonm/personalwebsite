import { Outlet } from "react-router-dom"
import Header from "../components/Header";
import Starbackground from "../components/starbackground";


const BaseScreen =()=>{

    return(
        <>
            <Starbackground/>
            <main className="z-0">
                {/* <Header/> */}
                <Outlet />
            </main>   
        </>
    )
}
export default BaseScreen;