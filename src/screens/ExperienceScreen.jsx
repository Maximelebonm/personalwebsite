import Experience from "../components/Experience";
import Undertitle from "../components/undertitle";


const ExperienceScreen = () => {
    return (
        <div class="">
            <div class="mt-2">
            <div class="text-white text-center mt-4 text-lg font-bold"><h2>Expérience professionnel dans le developpement</h2></div>
            <Undertitle/>
            <div class="grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center">
                <Experience Date="depuis Septembre 2022" Title="Incubateur chez M2I formation / AFPA" desc="Intégration d'une équipe de travail sur un projet e-commerce, mise en place de la méthode agile, conception (MCD,MLD,UseCase,Maquettage...), développement du site internet deskstop front-end avec ReactJS, développement du back-end avec NodeJS."/>
                <Experience Date="Juin-Aout 2022" Title="Stage Tales and Keys (3mois)" desc="Conception d'application (MCD, UserCase, Maquettage, diagramme de séquence),
                développement sur flutter, utilisation de FlutterFlow"/>
            </div>
            <div class="text-white text-center mt-2 text-lg font-bold"><h2>Expérience professionnel avant ma reconversion</h2></div>
            <Undertitle/>
            <div class="grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center">
                <Experience Date="Depuis mai 2018" Title="Chef d'entreprise" desc="Freelance dans mon entreprise MaxGraphiste, je fus en charge de la réalisation de différents logotypes, chartes graphiques, affiches, flyers, cartes de visites, de retouches photos, reconstitution de photos, mais aussi de la gestion de mon entreprise."/>
                <Experience Date="Juin 2017" Title="Stage Service Communication SEM (6 mois)" desc="Responsable graphisme et communication au Syndicat Mixte de l'Escaut pour soutenir les animations et préventions sur l'environnement."/>
                <Experience Date="Avril 2016" Title="Stage Service communication Mairie Douchy-les-mines (3mois)" desc="Responsable graphiste, réalisation de flyers, affiches pour les divers événements de l'imaginaire de Douchy-les-Mines."/>
                <Experience Date="Mai 2015" Title="Stage Service communication BoxEvent Solesmes (2mois)" desc="Responsable graphiste dans l'entreprise BoxEvent, réalisation de supports papier et de contenu web."/>
                <Experience Date="Juin 2013" Title="Stage gestionnaire d'Event Pasino Saint-Amand-Les-Eaux" desc="Assistant événementiels lors de concerts, de spectacles de théâtre, mais aussi de séminaires et autres événements privés."/>
                <Experience Date="2008 à 2015" Title="Animateur Bafa Centre de Loisir le Pommereuil" desc="Animateur en centre aéré pour des enfants de 6 à 9 ans puis de 10 à 12 ans et enfin pour des groupes d'adolescent, mise en place de jeux, de règles de vie et de sécurité au sein de groupes d'enfants."/>
            </div>
            </div>
        </div>
    )
}
export default ExperienceScreen;