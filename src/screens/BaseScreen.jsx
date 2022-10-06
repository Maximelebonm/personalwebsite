import { Outlet } from "react-router-dom"
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