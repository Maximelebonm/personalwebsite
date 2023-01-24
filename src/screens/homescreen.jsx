import Undertitle from "../components/undertitle";
import { Link } from "react-router-dom";
import { CgChevronDoubleRightO } from "react-icons/cg"
import LoisirScreen from "./loisirScreen";
import PresentationScreen from "./PresentationScreen";
import TechnoScreen from "./TechnoScreen";
import ExperienceScreen from "./ExperienceScreen";
import ContactScreen from "./ContactScreen";
const HomeScreen = () => {

    return (
        <>
            <div className="HomeContent">
                <div class="text-white text-center flex flex-1 flex-col justify-center">
                    <div class="font-bold text-3xl pt-4 flex justify-center">
                    </div>
                    <div class="HomeDivOne">
                        <div className="homeDivTwo flex items-center flex-col lg:flex-row">
                            <div className="MyName p-2 align-center flex flex-col items-center">
                                <div className="font-bold text-3xl">Maxime Lebon</div>
                                <div className="font-bold text-xl"> Concepteur Developpeur d'Application</div>
                                {/* <Link to="/presentation"> <CgChevronDoubleRightO className="w-20 h-20 mt-6 text-slate-500 hover:text-slate-200 duration-200" /></Link> */}
                            </div>
                            <Link to="/presentation"><img class="ImageHome w-32 h-32" src={process.env.PUBLIC_URL + '/img/max.jpeg'} /></Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="hello">
                            Bonjour, moi c'est Maxime, développeur javascript fullStack, mes frameworks de prédilections sont React JS pour le front et Node Js pour le back.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeScreen;