import CardProject from "../components/CardProject"
import "../CSS/Card.css"
import Undertitle from "../components/undertitle"
import CardHobbie from "../components/CardHobbie"
const LoisirScreen = () => {
    return (
        <div className="text-white text-center flex flex-col justify-center lg:pb-16 pt-20 pb-20 m-2">
            <div className="Titleloisir font-bold text-2xl">
                Mes différents projets personnels
            </div>
            <Undertitle className="underTitleLoisir rounded-lg"/>
            <div className="pt-4 grid grid-cols-1 lg:grid-cols-3 justify-center w-11/12 m-auto">
                <CardProject className="cardLoisir" title="BeMusician"src={process.env.PUBLIC_URL + '/img/bemusician.png'} desc="Projet d'application pour apprendre à jouer d'un instrument (en cours de développement)." link="/projet/bemusician" textLien="Découvrir le projet Be Musician"/>
                <CardProject className="cardLoisir2" title="Dou'Crochet"src={process.env.PUBLIC_URL + '/img/doucrochet.png'} desc="Création d'un site E-commerce de doudou dans une équipe de développeurs en utilisant la méthode agile (scrum)." link="/projet/doucrochet" textLien="Découvrir le projet Dou'Crochet"/>
                <CardProject className="cardLoisir3" title="Allo Movie"src={process.env.PUBLIC_URL + '/img/themovieDb.jpeg'} desc="Création d'un site en utilisant une API externe." link="/projet/allomovie" textLien="Découvrir le projet Allo Movie"/>
            </div>
            <div className="Titleloisir2 font-bold pt-4 text-2xl">
                Mes Loisirs
            </div>
            <Undertitle className="underTitleLoisir2 rounded-lg"/>
            <div className="pt-4 grid grid-cols-1 lg:grid-cols-3 justify-center w-11/12 m-auto">
                <div></div>
                <CardHobbie className="cardLoisir4" title="Maks Nobel" id="maksnobel" src={process.env.PUBLIC_URL + '/img/maksnobel.png'} desc="Projet musical dont je suis le compositeur, ingénieur du son, monteur vidéo." lien="https://www.youtube.com/channel/UCVFn1CHWxddOMmr1p8-UFJA" textLien="Découvrir mon projet musical"/>
            </div>
        </div>
    )
}
export default LoisirScreen