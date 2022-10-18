import Undertitle from "../components/undertitle";
const HomeScreen=()=>{

    return(
        <div class="h-screen text-white text-center">
            <div class="font-bold pt-4">
                Bienvenu sur mon site portfolio !
            </div>
            <Undertitle/>
            <div class="flex flex-col items-center z-10">
            <img class="rounded-full w-40 h-40" src={process.env.PUBLIC_URL + '/img/max.jpeg'}/>
            <div class="pt-4 w-96">
            Pour commencer, une rapide présentation de moi, je m'appelle Maxime, j'ai 31 ans,
            j'ai terminé une reconversion professionnelle avec une formation Concepteur Développeur d'Application à l'AFPA
            et souhaite trouver mon 1er emploi en tant que développeur junior.
            </div>
            <div class="">
                Mes soft compétences
            </div>
            </div>
        </div>
    )
}
export default HomeScreen