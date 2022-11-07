import Card from "../components/Card"
import "../CSS/Card.css"
import Undertitle from "../components/undertitle"
const LoisirScreen=()=>{


    return(
        <div class="h-screen text-white text-center">
            <div class="font-bold pt-4 text-lg">
                Mes différents projets personnel
            </div>
            <Undertitle/>
            <div class="pt-4 grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center">
                    <Card title="Maks Nobel" id="maksnobel" src={process.env.PUBLIC_URL + '/img/maksnobel.png'} desc="Projet musical dont je suis le musicien, ingénieur du son, monteur vidéo, communicant." lien="https://www.youtube.com/channel/UCVFn1CHWxddOMmr1p8-UFJA" textLien="Découvrir mon projet musical" cssLien="p-2 mt-2 text-white font-bold bg-sky-900 hover:bg-sky-600 hover:text-white transition diration-700"/>
                    <Card title="BeMusician" src={process.env.PUBLIC_URL + '/img/bemusician.png'} desc="Projet d'application pour apprendre à jouer d'un instrument (en cours de développement)." lien="http://bemusician.fr" textLien="découvrir Mon projet d'application"cssLien="p-2 mt-2 text-white font-bold bg-sky-900 hover:bg-sky-600 hover:text-white transition diration-700"/>
            </div>
        </div>
    )
}
export default LoisirScreen