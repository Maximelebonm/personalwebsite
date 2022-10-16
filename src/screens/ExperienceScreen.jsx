import Experience from "../components/Experience";
import Undertitle from "../components/undertitle";


const ExperienceScreen = () => {
    return (
        <div class="pt-16">
            <div class="mt-2">
            <div class="text-white text-center mt-4 text-lg font-bold"><h2>Expérience professionnel dans le developpement</h2></div>
            <Undertitle/>
            <div class="grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center">
                <Experience Date="depuis Septembre 2022" Title="Incubateur chez M2I formation / AFPA" desc="Intégration d'une équipe de travail sur un projet e-commerce 
                    mise en place de la méthode agile, conception (MCD,MLD,UseCase,Maquettage...)
                    Devellopement de du site internet deskstop front-end avec ReactJS 
                    Developpement du back-end avec NodeJS."/>
                <Experience Date="Juin-Aout 2022" Title="Stage Chez Tales and Keys (3mois)" desc="Conception d'application (MCD, UserCase, Maquettage, diagramme de séquence),
                developpement sur flutter, utilisation de FlutterFlow"/>
            </div>
            <div class="text-white text-center mt-2 text-lg font-bold"><h2>Expérience professionnel avant ma reconversion</h2></div>
            <Undertitle/>
            <div class="grid lg:grid-cols-3 sm:grid-cols-2 justify-items-center">
                <Experience Date="Depuis mai 2018" Title="Chef d'entreprise" desc="Freelance dans mon entreprise MaxGraphiste, je fût en charge de la réalisation de différents logotypes, chartres graphique, affiches, flyer, cartes de visites, ainsi que de retouches photos
                mais aussi de la gestion de mon entreprise"/>
                <Experience Date="Juin 2017" Title="Stage Service Communication SEM (6 mois)" desc="Responsable graphisme et communication au syndicat myxte de l'escaut pour soutenir les animaitons et préventions sur l'environement. "/>
                <Experience Date="Avril 2016" Title="Stage Service communication Mairie Douchy-les-mines (3mois)"/>
                <Experience Date="Mai 2015" Title="Stage Service communication BoxEvent Solesmes (2mois)"/>
                <Experience Date="Juin 2013" Title="Stage gestionnaire d'Event Pasino Saint-Amand-Les-Eaux"/>
                <Experience Date="2008 à 2015" Title="Animateur Bafa Centre de Loisir le Pommereuil"/>
            </div>
            </div>
        </div>
    )
}
export default ExperienceScreen;