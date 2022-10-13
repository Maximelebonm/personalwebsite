import Card from "../components/Card";

const TechnoScreen=()=> {

        return (
            <div class="pt-12">
                <div class="flex justify-center mt-2">
                    <div class="grid lg:grid-cols-3 sm:grid-cols-2 justify-self-center">
                        <Card title="HTML5" subtitle="Langage informatique" desc="Utilisation de HTML5 pour structurer une page web ou une application notament que ce soit en vanilla ou en dans un return JSX de react" src={process.env.PUBLIC_URL + '/iconSvg/html5.svg'}/>
                        <Card title="CSS3" subtitle="Langage informatique" desc="Utilisation de css3 pour mettre en page différents sites web, mais aussi pour animé différents éléments" src={process.env.PUBLIC_URL + '/iconSvg/css3.svg'} />
                        <Card title="Javascript" subtitle="Langage informatique" desc="Utilisaiton de l'algorythmie avec javascipt pour dévellopper des fonctionnalités, déclencher des évènement, ou faire des requête vers un Api rest" src={process.env.PUBLIC_URL + '/iconSvg/javascript.svg'} />
                        <Card title="ReactJS" subtitle="Framework javascript déployé par facebook" desc="Utilisation de react JS pour divers projets, utilisation des Hooks, des classes, des fonctions ainsi que des props pour passer des informations d'un composant à un autre." src={process.env.PUBLIC_URL + '/iconSvg/react.svg'} id="reactjs"/>
                        <Card title="NodeJS" subtitle="FrameWork Javascript" desc="Utilisation de nodeJS pour developper divers api rest, mise en place de routes, de models, de services, de controllers, de configs pour la sécurité ou les environements dev/prod" src={process.env.PUBLIC_URL + '/iconSvg/nodejs.svg'}/>
                        <Card title="MySql" subtitle="Langage informatique" desc="Pour la création mais aussi la modification de base de données j'ai appris à utilisé Mysql coupler avec PHPmyAdmin" src={process.env.PUBLIC_URL + '/iconSvg/mysql.svg'} />
                        <Card title="TailWind" subtitle="Framework CSS" desc="Pour plus d'éfficacité et un code moins lourd la bibliothèque tailwind me permet de développer éfficacement divers sites web et application" src={process.env.PUBLIC_URL + '/iconSvg/tailwind-css-2.svg'} />
                        <Card title="InDesign" subtitle="Editeur de texte" desc="J'ai dans ma carrière de graphiste utilisé illustrator pour différents support papier contenant plusieur page type livret ou flyer pliable" src={process.env.PUBLIC_URL + '/iconSvg/indesign.svg'} />
                        <Card title="Photoshop" subtitle="Logiciel de retouche photo" desc="Pour la retouche photo mais aussi les dessins utilisant des pinceau ou brush rien de mieux que photoshop pour faire de l'art" src={process.env.PUBLIC_URL + '/iconSvg/photoshop.svg'} />
                        <Card title="Illustrator" subtitle="Logiciel d'illustration vectorisé" desc="Ici nous utilisons illustrator pour dessiner mais l'aantage est qu'ils sont vectoriel." src={process.env.PUBLIC_URL + '/iconSvg/illustrator.svg'}/>
                    </div>
                </div>
            </div>
        )
   
}
export default TechnoScreen