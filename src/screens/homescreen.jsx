import Undertitle from "../components/undertitle";
const HomeScreen=()=>{
    return(
        <div class="text-white h-screen text-center">
            <div class="font-bold text-2xl pt-4 flex justify-center">
                <div className="title w-96 p-1">
                    Bienvenue sur mon site portfolio !
                </div>
            </div>
            <Undertitle/>
            <div class="items-center z-10 mt-2">
                <div className="flex justify-center">
                    <img class="rounded-full w-40 h-40" src={process.env.PUBLIC_URL + '/img/max.jpeg'}/>

            </div>
            <div class="pt-4">
                <div className="pl-12 pr-12">
                    Pour commencer, une présentation de moi, et de mon histoire.
                </div>
            <div className="">
            <div class="font-bold text-xl mt-16">
                Mon histoire avec le développement !
            </div>
            <Undertitle/>
            <div className="pl-12 pr-12 mt-4 pb-8">
                Mon histoire avec le développement commence au lycée avec le <strong>site du zéro </strong>qui est maintenant devenu Open Classroom et avec <strong>Nodepad++ </strong>comme Ide, j'y ai découvert le html et le css et un peu le javascript sans le comprendre. J'ai vite atteint mes limites car nous sommes dans les années 2006-2009, facebook n'a pas encore révolutionné le numérique et en campagne le developpement web est quasi inconnu, j'ai alors lâché le développement web pour le remplacer par le montage vidéo (avec Sony Vegas Pro), mais aussi la musique assistée par ordinateur (sur fruity loops).<br/> 
                Le code a fini par me rattraper pendant mes études en communication où j'ai découvert le Jquery et bootstrap ainsi que visual studio code, mais j'ai fais le choix des supports communication papier simplement par goût.
            </div>
                <div class="font-bold text-xl mt-16">
                    Mon époque freeLance !
                </div>
                <Undertitle/>
                <div className="pl-12 pr-12 mt-4">
                Suite à mes études, j'ai été accompagné par la BGE Haut de France où j'ai suivie une formation pour devenir auto-entrepeneur,
                cela m'a permis de partir sur de bonnes bases, après très peu d'administratif, me voilà freelance, les clients ne se bouscule pas mais j'ai quelques missions. <br/>
                Au fur et à mesure du temps et des clients je fais finalement un peu le tour de mon métier et malgrès le faites de rencontrer des personnes au parcours varié avec de beaux projets, le faite de travailler seul est devenu pesant, moi qui suis plutôt sociable. 
                J'ai donc décidé après 2ans de freiner mon activité de freelance et de partir vers d'autres horizons.
                </div>
            </div>
            <div class="font-bold text-xl mt-16">
                Ma reconversion professionnelle !
            </div>
            <Undertitle/>
            <div className="pl-12 pr-12 mt-4">
                Plusieurs choix s'offraient à moi, soit partir en agence ou service de communication soit faire une reconversion professionnelle, c'est là que mon conseillé pôle emploi m'a trouvé la formation de Concepteur Développeur d'Application à l'AFPA, c'etait l'occasion pour moi de revenir sur une passion mise de côté, j'y rencontre des personnes bienveillante que ce soit les collègues ou le formateur Laurent Bedu, 
                j'y apprends énormément de choses et me rends compte que ce métier est constamment en évolution et qu'il comblerait ma soif d'apprendre.<br/>
                Me voci aujourd'hui à la recherche d'un premier travail en tant developpeur web juniors.
            </div>
            
            </div>
          
            </div>
        </div>
    )
}
export default HomeScreen