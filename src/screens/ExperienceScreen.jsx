import Experience from "../components/Experience";

const ExperienceScreen = () => {
    return (
        <div class="pt-12 h-screen">
            <div class="text-white text-center mb-5 mt-2 text-lg font-bold"><h2>Expérience professionnel dans le developpement</h2></div>
            <div class="flex flex-row">
            <Experience Date="Septembre 2022" Title="Incubateur chez M2I formation / AFPA" desc="Intégration d'une équipe de travail sur un projet e-commerce 
                    mise en place de la méthode agile, conception (MCD,MLD,UseCase,Maquettage...)
                    Devellopement de du site internet deskstop front-end avec ReactJS 
                    Developpement du back-end avec NodeJS."/>
            <Experience Date="Juin-Aout 2022" Title="Stage Chez Tales and Keys" desc="Conception d'application (MCD, UserCase, Maquettage, diagramme de séquence),
            developpement sur flutter, utilisation de FlutterFlow"/>

            </div>
            <div class="text-white text-center mb-5 mt-2 text-lg font-bold"><h2>Expérience professionnel Avant ma reconversion</h2></div>
        </div>
    )
}
export default ExperienceScreen;