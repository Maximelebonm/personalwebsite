import CardTechno from "../components/CardTechno";
import Undertitle from "../components/undertitle";
import { Scroll } from "@react-three/drei";
import {LoisirScreen} from "./loisirScreen";
import HomeScreen from "./homescreen";
import gsap from "gsap";
import { useRef } from "react";
import ExperienceScreen from "./ExperienceScreen";

export const Overlay = () => {
    const ref = useRef();


    return (
        <Scroll html>
           <section className={'h-screen'}>
                <HomeScreen/>
           </section>
           <section className='h-screen w-1/2'>
        
           </section>
           <section className={'h-screen w-1/2'}>
                <HomeScreen/>
           </section>
           <section className={'h-screen'}>
                <HomeScreen/>
           </section>
           <section className={'h-screen'}>
                <HomeScreen/>
           </section>
           <section className={'h-screen'}>
                <HomeScreen/>
           </section>
        </Scroll>
    )
};

{/* <div className="TitleTech text-white text-center mt-24 text-2xl font-bold"><h2>Langages Informatiques</h2></div>
<Undertitle className="undertitleTech"/>
<div className="grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center">
<CardTechno className="cardTech" title="HTML5" subtitle="Langage informatique" desc="Utilisation de HTML5 pour structurer une page web ou une application que ce soit en Html pur ou dans un return JSX de react." src={process.env.PUBLIC_URL + '/iconSvg/html5.svg'} id="html5"/>
<CardTechno className="cardTech1" title="CSS3" subtitle="Langage informatique" desc="Utilisation de CSS3 pour mettre en page différents sites internets, mais aussi pour animer différents éléments grâce aux KeyFrames." src={process.env.PUBLIC_URL + '/iconSvg/Css3.svg'}/>
<CardTechno className="cardTech2" title="Javascript" subtitle="Langage informatique" desc="Utilisation de l'algorithmie avec Javascipt pour développer des fonctionnalités déclenchées par des événements, faire des requêtes vers une Api rest." src={process.env.PUBLIC_URL + '/iconSvg/javascript.svg'} />
<CardTechno className="cardTech3" title="MySql" subtitle="Langage informatique" desc="Pour la création et la modification de bases de données, j'ai appris à utiliser Mysql avec PHPmyAdmin. " src={process.env.PUBLIC_URL + '/iconSvg/mysql.svg'} />
</div>

<div className="TitleTech2 text-white text-center mt-2 text-2xl font-bold"><h2>FrameWorks et Bibliothèques</h2></div>
<Undertitle className="undertitleTech2"/>
<div className="grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center">
<CardTechno className="cardTech4" title="ReactJS" subtitle="Bibliothèque Javascript déployé par facebook" desc="Utilisation de React JS pour divers projets SPA (Single Page Application), utilisation des Hooks comme le useState, le useEffect, le useNavigate de React router Dom, Yup pour les formulaires..." src={process.env.PUBLIC_URL + '/iconSvg/reactsansnom.svg'} id="reactjs"/>
<CardTechno className="cardTech5" title="TailWind" subtitle="Framework CSS" desc="Pour plus d'efficacité et un code moins lourd, la bibliothèque Tailwind me permet de développer efficacement divers sites webs et applications." src={process.env.PUBLIC_URL + '/iconSvg/tailwind-css-2.svg'} />
<CardTechno className="cardTech6" title="NodeJS" subtitle="Environement Javascript" desc="Utilisation de NodeJS pour développer divers Api REST, mise en place de routes sécurisées, de models, de services, de controllers, de fichiers de configuration pour la sécurité, de variables d'environnement, de scripts de modification de base de données, requête vers une base de données MySql ou NoSql avec MongoDB." src={process.env.PUBLIC_URL + '/iconSvg/nodejs.svg'}/>
</div>

<div className="TitleTech3 text-white text-center mt-2 text-2xl font-bold"><h2>Technologies Annexes</h2></div>
<Undertitle className="undertitleTech3"/>
<div className="grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center">
<CardTechno className="cardTech7" title="InDesign" subtitle="Editeur de texte" desc="J'ai dans ma carrière de graphiste utilisé InDesign pour différents supports papier comme des livrets, flyers, affiches." src={process.env.PUBLIC_URL + '/iconSvg/indesign.svg'} />
<CardTechno className="cardTech8" title="Photoshop" subtitle="Logiciel de retouche photo" desc="J'ai appris à maîtriser le logiciel Photoshop pour être capable de faire de la retouche photo (luminosité, contraste, colorimétrie), de la restauration de vielles photos dégradées par le temps." src={process.env.PUBLIC_URL + '/iconSvg/photoshop.svg'} />
<CardTechno className="cardTech9" title="Illustrator" subtitle="Logiciel d'illustration vectorisé" desc="J'ai utilisé Illustrator pour la création de logotypes sur commande de clients, Illustrator a pour avantage de vectoriser les créations et donc utilisable sur de très grands formats sans avoir d'effet de pixélisation." src={process.env.PUBLIC_URL + '/iconSvg/illustrator.svg'}/>
</div>
</section> */}