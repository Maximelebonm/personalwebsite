import Experience from "../components/Experience";
import Undertitle from "../components/undertitle";


const ExperienceScreen = () => {
    
    return (
        <div>
        <div className="flex flex-col sm:w-2/3 lg:w-1/2 justify-center pb-20 pt-20 lg:pb-16 mx-2 sm:mx-auto">
            <div className="TitleExp text-white text-2xl m-auto w-96 font-bold text-center"><h2>Expériences professionnelles dans le développement</h2></div>
            <Undertitle className="barexperience rounded-lg"/>
            <div className="flex flex-col justify-center mt-4">
                <Experience className='experienceSlide' Date="Septembre 2022 - janvier 2023" Title="Incubateur chez M2I formation / AFPA" desc="Intégration d'une équipe de travail sur un projet e-commerce, mise en place de la méthode agile, conception (MCD,MLD,UseCase,Maquettage...), développement du site internet deskstop front-end avec ReactJS, développement du back-end avec NodeJS." />
                <Experience className='experienceSlide1' Date="Juin-Aout 2022" Title="Stage Tales and Keys (3mois)" desc="Conception d'application (MCD, UserCase, Maquettage, diagramme de séquence),
                développement sur flutter, utilisation de FlutterFlow"/>
            </div>
            <div className="TitleExp2 text-white text-2xl m-auto w-96 font-bold text-center"><h2>Expériences professionnelles avant ma reconversion</h2></div>
            <Undertitle className="undertitleExp1 rounded-lg"/>
            <div className="flex flex-col justify-center mt-4">
                <Experience 
                    className='experienceSlide3' 
                    Date="Depuis mai 2018" 
                    Title="Chef d'entreprise" 
                    desc="Freelance dans mon entreprise MaxGraphiste, je fus en charge de la réalisation de différents logotypes, chartes graphiques, affiches, flyers, cartes de visites, de retouches photos, reconstitution de photos, mais aussi de la gestion de mon entreprise." 
                />
                <Experience className='experienceSlide4' Date="Juin 2017" Title="Stage Service Communication SEM (6 mois)" desc="Responsable graphisme et communication au Syndicat Mixte de l'Escaut pour soutenir les animations et préventions sur l'environnement." />
                <Experience className='experienceSlide5' Date="Avril 2016" Title="Stage Service communication Mairie Douchy-les-mines (3mois)" desc="Responsable graphiste, réalisation de flyers, affiches pour les divers événements de l'imaginaire de Douchy-les-Mines." />
                <Experience className='experienceSlide6' Date="Mai 2015" Title="Stage Service communication BoxEvent Solesmes (2mois)" desc="Responsable graphiste dans l'entreprise BoxEvent, réalisation de supports papier et de contenu web."/>
                <Experience className='experienceSlide7' Date="Juin 2013" Title="Stage gestionnaire d'Event Pasino Saint-Amand-Les-Eaux" desc="Assistant événementiels lors de concerts, de spectacles de théâtre, mais aussi de séminaires et autres événements privés." />
                <Experience className='experienceSlide8' Date="2008 à 2015" Title="Animateur Bafa Centre de Loisir le Pommereuil" desc="Animateur en centre aéré pour des enfants de 6 à 9 ans puis de 10 à 12 ans et enfin pour des groupes d'adolescent, mise en place de jeux, de règles de vie et de sécurité au sein de groupes d'enfants."  />
            </div>
        </div>
        </div>
    )
}
export default ExperienceScreen;