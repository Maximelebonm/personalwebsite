import Card from "../components/Card";
import Undertitle from "../components/undertitle";

const TechnoScreen=()=> {

        return (
            <div class="z-30">
                <div class="flex flex-col justify-center">
                    <div>
                        <div class="text-white text-center mt-2 text-lg font-bold"><h2>Technologie Front-End</h2></div>
                        <Undertitle/>
                        <div class="grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center">
                            <Card title="HTML5" subtitle="Langage informatique" desc="Utilisation de HTML5 pour structurer une page web ou une application que ce soit en Html pur ou dans un return JSX de react." src={process.env.PUBLIC_URL + '/iconSvg/html5.svg'} id="html5"/>
                            <Card title="CSS3" subtitle="Langage informatique" desc="Utilisation de css3 pour mettre en page différents sites webs, mais aussi pour animer différents éléments grâce aux KeyFrames que j'ai utilisées ici pour animer les barres en dessous titres et le fond." src={process.env.PUBLIC_URL + '/iconSvg/Css3.svg'} />
                            <Card title="TailWind" subtitle="Framework CSS" desc="Pour plus d'efficacité et un code moins lourd, la bibliothèque Tailwind me permet de développer efficacement divers sites web et applications. Vous pouvez remarquer ici que tout mon site internet est en Tailwind, avec quelques spécificités en CSS." src={process.env.PUBLIC_URL + '/iconSvg/tailwind-css-2.svg'} />
                            <Card title="ReactJS" subtitle="Framework javascript déployé par facebook" desc="Utilisation de ReactJS pour divers projets SPA (Single Page Application), que ce soit sous forme de classe ou sous forme fonctionnelle, utilisation des Hooks comme le useState, le useEffect, le useNavigate de React router Dom, Link, Yup pour les formulaires..." src={process.env.PUBLIC_URL + '/iconSvg/reactsansnom.svg'} id="reactjs"/>
                        </div>
                    </div>
                    <div>
                        <div class="text-white text-center mt-2 text-lg font-bold mt-4"><h2>Technologie Back-End</h2></div>
                        <Undertitle/>
                        <div class="grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center">
                        <Card title="Javascript" subtitle="Langage informatique" desc="Utilisation de l'algorithmie avec Javascipt pour développer des fonctionnalités déclenchées par des événements, faire des requêtes vers une Api rest." src={process.env.PUBLIC_URL + '/iconSvg/javascript.svg'} />
                        <Card title="NodeJS" subtitle="FrameWork Javascript" desc="Utilisation de NodeJS pour développer divers Api REST, mise en place de routes sécurisées, de models, de services, de controllers, de fichier de config pour la sécurité ou les environnements dev/prod, de scripts de modification de base de données, requête vers une base de données MySql ou NoSql avec MongoDB." src={process.env.PUBLIC_URL + '/iconSvg/nodejs.svg'}/>
                        <Card title="MySql" subtitle="Langage informatique" desc="Pour la création et la modification de base de données, j'ai appris à utiliser Mysql avec PHPmyAdmin. " src={process.env.PUBLIC_URL + '/iconSvg/mysql.svg'} />
                        </div>
                    </div>
                    <div>
                        <div class="text-white text-center mt-2 text-lg font-bold"><h2>Technologie annexe</h2></div>
                        <Undertitle/>
                        <div class="grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center">
                        <Card title="InDesign" subtitle="Editeur de texte" desc="J'ai dans ma carrière de graphiste utilisé InDesign pour différents supports papier comme des livrets, flyers, affiches." src={process.env.PUBLIC_URL + '/iconSvg/indesign.svg'} />
                        <Card title="Photoshop" subtitle="Logiciel de retouche photo" desc="J'ai appris à maîtriser le logiciel Photoshop pour être capable de faire de la retouche photo (luminosité, contraste, colorimétrie), de la restauration de vielles photos dégradées par le temps." src={process.env.PUBLIC_URL + '/iconSvg/photoshop.svg'} />
                        <Card title="Illustrator" subtitle="Logiciel d'illustration vectorisé" desc="J'ai utilisé Illustrator pour la création de logotypes sur commande de clients, Illustrator a pour avantage de vectoriser les créations et donc utilisable sur de très grands formats sans avoir d'effet de pixélisation." src={process.env.PUBLIC_URL + '/iconSvg/illustrator.svg'}/>
                    </div>

                    </div>
                </div>
            </div>
        )
   
}
export default TechnoScreen