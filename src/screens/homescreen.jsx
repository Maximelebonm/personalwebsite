import { BsFillCursorFill } from "react-icons/bs";

const HomeScreen = () => {
    const clique = new Audio('../sound/cliqueApple.wav');

    const copied = (e)=>{
        console.log(e)
        navigator.clipboard.writeText(e.target.textContent)
        e.target.className = "text-lg bg-green-800 rounded-full h-12 w-80 mt-2"
        clique.play()
        e.target.textContent = "copié"
    }

    const AfficherPdf = () => {

    }

    return (
        <>
            <div className="HomeContent">
                <div className="text-white text-center flex flex-1 flex-col justify-center pt-20">
                    <div className="font-bold text-3xl pt-4 flex justify-center">
                    </div>
                    <div className="HomeDivOne">
                        <div className="homeDivTwo flex items-center flex-col lg:flex-row">
                            <div className="MyName p-2 align-center flex flex-col items-center">
                                <div className="font-bold text-3xl">Maxime Lebon</div>
                                <div className="font-bold text-xl"> Concepteur Développeur d'Application</div>
                                {/* <Link to="/presentation"> <CgChevronDoubleRightO className="w-20 h-20 mt-6 text-slate-500 hover:text-slate-200 duration-200" /></Link> */}
                            </div>
                            <img className="ImageHome w-32 h-32" src={process.env.PUBLIC_URL + '/img/max.jpeg'} />
                        </div>
                    </div>
                    <div className="">
                        <div className="hello">
                            Bonjour, moi c'est Maxime, développeur javascript FullStack, mes frameworks de prédilections sont React JS pour le front-end et Node Js pour le back-end.
                        </div>
                        <div className="homeRecruterCard mt-8 p-8 m-4 rounded-lg shadow-2xl lg:w-1/2 lg:mx-auto bg-pink-800/[.3]">
                        <div className="text-2xl font-bold">Recruteur et pas le temps ? </div>
                        <a href="./pdf/CvMaximeLebon .pdf" target="_blank">
                            <button className="bg-pink-800 hover:bg-slate-900 w-40 h-12 rounded-full hover:duration-300 align-middle p-1 mx-1 mt-4" onClick={AfficherPdf}>
                                Consulter mon CV
                            </button>
                        </a>
                          
                        <div>
                        </div>
                        <div className="mt-4 font-bold"> Copier l'adresse e-mail pour me contacter:</div>
                            <button className="text-lg bg-pink-800 hover:bg-slate-900 rounded-full h-12 w-80 mt-2" onClick={copied}>lebon.maxime.m@gmail.com<BsFillCursorFill className="absolute"/></button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeScreen;