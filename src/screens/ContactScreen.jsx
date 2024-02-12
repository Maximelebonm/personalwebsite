import { BsFillCursorFill } from "react-icons/bs";
import Undertitle from "../components/undertitle";
const ContactScreen=()=>{
    const clique = new Audio('../sound/cliqueApple.wav');

    const copied = (e)=>{
        console.log(e)
        navigator.clipboard.writeText(e.target.textContent)
        e.target.className = "text-xl bg-green-800 rounded-full h-12 w-80"
        clique.play()
        e.target.textContent = "copié"
    }
    return(
        <div className="pt-16">
            <div className="text-white text-center p-2 m-2 rounded-lg">
            <div className="TitleContact text-2xl font-bold">Contact</div>
            <Undertitle className="barexperience"/>
            <div className="contactCard">
            <div className="text-xl font-bold mt-8">Par mail : </div>
                <button className="buttonEffect text-xl bg-pink-800 hover:bg-slate-900 rounded-full h-12 w-80" onClick={copied}>lebon.maxime.m@gmail.com<BsFillCursorFill className="absolute"/></button>
            </div>   
            </div>
                <div className="contactCard2 text-white text-center mt-8 rounded-lg flex flex-col items-center">
                    <div className="text-xl">
                        Par linkedin :
                    </div>
                    <a className="w-full h-full" href="https://www.linkedin.com/in/maxime-lebon-929581234/" target="_blank" rel="noreferrer">
                        <button className="buttonEffect bg-pink-800 hover:bg-slate-900 w-40 h-12 rounded-full hover:duration-300 align-middle p-1">
                            En cliquant ici
                        </button>
                    </a>
                </div>
            </div>
    )
}
export default ContactScreen