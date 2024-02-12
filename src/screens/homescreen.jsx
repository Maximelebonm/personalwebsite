import { BsFillCursorFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

const HomeScreen = (props) => {
    const clique = new Audio('../sound/cliqueApple.wav');

    const copied = (e)=>{
        navigator.clipboard.writeText(e.target.textContent);
        e.target.className = "text-lg bg-green-800 rounded-full h-12 w-80 mt-2";
        clique.play();
    }

    const AfficherPdf = () => {

    }

    return (
        <>
            <div className="homeContainer text-white text-center flex flex-1 flex-col justify-center pb-10">
                <div className="HomeDivOne mt-10">
                    <div className="homeDivTwo flex items-center flex-col lg:flex-row duration-300">
                        <div className="MyName p-2 align-center flex flex-col items-center">
                            <div className="font-bold text-3xl">Maxime Lebon</div>
                            <div className="font-bold text-xl"> Concepteur Développeur d'Application Web et Mobile</div>
                        </div>
                        <img className="ImageHome w-32 h-32" alt="Profil" src={process.env.PUBLIC_URL + '/img/max.jpeg'} />
                    </div>
                </div>
                    <div className="">
                        <div className="hello">
                            Pour résumer je suis développeur Javascript React / Node ... mais pas que :)
                        </div>
                        <div className="homeRecruterCard mt-4 p-8 m-4 rounded-lg shadow-2xl md:w-1/2 md:mx-auto bg-pink-800/[.3]">
                        <div className="text-2xl font-bold">Recruteur et pas le temps ? </div>
                        <a href="./pdf/CvMaximeLebon .pdf" target="_blank">
                            <button className="buttonEffect bg-pink-800 hover:bg-slate-900 w-40 h-12 rounded-full hover:duration-300 align-middle py-auto px-2 mx-1 mt-4" onClick={AfficherPdf}>
                                Télécharger mon CV
                            </button>
                        </a>
                          
                        <div>
                        </div>
                        <div className="mt-4 font-bold"> Copier mon adresse e-mail pour me contacter:</div>
                            <button className="buttonEffect text-lg bg-pink-800 hover:bg-slate-900 rounded-full h-12 w-80 mt-2" onClick={copied}>lebon.maxime.m@gmail.com<BsFillCursorFill className="absolute"/></button>
                        </div>
                        <div className="text-3xl font-bold flex justify-center">
                            <BiChevronDown/>
                               <div className='mx-4'>
                                    Ou scrollez pour en savoir plus !
                                </div>
                            <BiChevronDown/>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default HomeScreen;