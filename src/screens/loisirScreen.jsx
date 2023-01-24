import CardProject from "../components/CardProject"
import "../CSS/Card.css"
import Undertitle from "../components/undertitle"
import CardHobbie from "../components/CardHobbie"
const LoisirScreen = () => {

    return (
        <div className="text-white text-center flex flex-col justify-center lg:pb-16 pb-20 m-2">
            <div className="font-bold text-2xl">
                Mes différents projets personnels
            </div>
            <Undertitle />
            <div className="pt-4 grid grid-cols-1 lg:grid-cols-3 justify-center w-11/12 m-auto">
                <CardProject className={"cardLoisir"}title="BeMusician"src={process.env.PUBLIC_URL + '/img/bemusician.png'} desc="Projet d'application pour apprendre à jouer d'un instrument (en cours de développement)." link="/projet/bemusician" textLien="découvrir Mon projet d'application"/>
                <CardProject className={"cardLoisir2"}title="Dou'Crochet"src={process.env.PUBLIC_URL + '/img/doucrochet.png'} desc="Création d'un site E-commerce de doudou dans un équipe de développeurs utilisant la méthode Agile" link="/projet/doucrochet" textLien="découvrir le projet Dou'Crochet"/>
                <CardProject className={"cardLoisir3"}title="Allo Movie"src={process.env.PUBLIC_URL + '/img/themovieDb.jpeg'} desc="Création d'un site utilisant une API externe" link="/projet/allomovie" textLien="découvrir le projet Allo Movie"/>
            </div>
            <div className="font-bold pt-4 text-2xl">
                Mes Loisirs
            </div>
            <Undertitle />
            <div className="pt-4 flex flex-col lg:flex-row lg:justify-center">
                <CardHobbie className={"cardLoisir4"} title="Maks Nobel" id="maksnobel" src={process.env.PUBLIC_URL + '/img/maksnobel.png'} desc="Projet musical dont je suis le musicien, ingénieur du son, monteur vidéo, communicant." lien="https://www.youtube.com/channel/UCVFn1CHWxddOMmr1p8-UFJA" textLien="Découvrir mon projet musical"/>
            </div>
        </div>
    )
}
export default LoisirScreen