import Undertitle from "../components/undertitle";
const HomeScreen=()=>{
    return(
        <div class="text-white text-center pb-4">
            <div class="font-bold text-lg pt-4 flex justify-center">
                <div className="title w-96 p-1">
                    Bienvenue sur mon site portfolio !
                </div>
            </div>
            <Undertitle/>
            <div class="flex flex-col items-center z-10 mt-2">
            <img class="rounded-full w-40 h-40" src={process.env.PUBLIC_URL + '/img/max.jpeg'}/>
            <div class="pt-4">
            Pour commencer, une présentation de moi, et de mon histoire.
            <div className="">
                <div class="font-bold text-lg mt-4">
                    Mon époque freeLance !
                </div>
                <Undertitle/>
                <div className="pl-16 pr-16 mt-2">
                Précédemment graphiste Freelance, j'étais spécialisée dans les supports de communication papier et des logotypes, 
                qui me permettais d'avoir une vraie liberté mais a pour contrepartie de travailler seul... tout le temps, 
                au fur et à mesure du temps j'ai finalement fait le tour de mon métier et être seul est devenu pesant, moi qui suis plutôt sociable. 
                J'ai donc décidé de freiner mon activité de freelance et de partir vers d'autres horizons.
                </div>
            </div>
            <div class="font-bold text-lg mt-4">
                Ma reconversion professionnel !
            </div>
            <Undertitle/>
            <div className="pl-16 pr-16 mt-2">
                Plusieurs choix s'offrait à moi, soit partir en agence de communication soit faire une reconversion professionnelle, c'est là que mon conseillé pôle emploi m'a trouvé la formation de Concepteur Développeur d'Application à l'AFPA et ce fut pour moi une petite révolution, j'y rencontre des personnes bienveillante que ce soit les collègues ou le formateur Laurent Bedu. j'y apprends énormément de choses et me rends compte que ce métier est constamment en évolution et qu'il comblerait ma soif d'apprendre de nouvelles choses.
            </div>
            
            </div>
            <div class="font-bold text-lg mt-4">
                Mon histoire avec le développement !
            </div>
            <Undertitle/>
            <div className="pl-16 pr-16 mt-2">
                Je ne suis pas partie de rien, mon histoire avec le développement web a commencé au lycée avec le site du zéro et maintenant devenu open classroom et nodepad++ comme ide, le html et le css me passionnaient, mais en autodidacte j'ai vite atteint mes limites et le développement n'était pas très à la mode dans mon entourage, j'ai alors lâché le développement web pour partir vers le montage vidéo, le graphisme, mais aussi la musique assistée par ordinateur. Le code a fini par me rattraper pendant mes études en communication où j'ai découvert le Jquery et bootstrap ainsi que visual studio code, mais j'ai fais le choix du print et non du web.
            </div>
            </div>
        </div>
    )
}
export default HomeScreen