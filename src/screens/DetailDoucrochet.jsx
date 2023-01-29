const DetailDouCrochetScreen = () => {
    return (
            <>
        <div>
            <div className=" text-slate-50 flex flex-1 flex-col items-center text-center pt-20 pb-16">
                <div>
                <img className="w-48" src={process.env.PUBLIC_URL + '/img/doucrochet.png'} />
                </div>
                <div>
                    <div className=" font-bold text-lg p-2 mt-8 ">Raison du projet Dou'Crochet </div>
                    <div className="p-2">Après le projet de montée en compétences sur Allo Movie, l'incubateur met en place une équipe pour travailler sur un projet fictif d'E-commerce. Lors de la réunion pour
               choisir le thème de ce projet, j'ai proposé la vente de doudou fait main confectionné par un de mes proches, l'équipe a accepté, nous avont donc travailé sur dou'crochet. </div>
                </div>
                <div>
                    <div className=" font-bold text-lg p-2 mt-8 ">Particularités du projet </div>
                    <div className="p-2">Ce projet fût pour moi l'occasion de travailler en équipe pour la première fois, nous avons travaillé avec la méthode agile (Scrum),
                    c'est à dire des réunion appelé "daily" tout les jours en présentielle ou distancielle, et une plus grosse réunion appelé "review" toutes les deux semaines pour finir ce que l'on appel un "sprint" ou une étape de développement, 
                    système de "poker planning" pour prévoir les tâches à faire ainsi que leurs temps, et la mise en commun avec git et gitHub.
                    Pour finir, j'ai naturellement été choisis (car anciennement graphiste) pour faire le logo que vous pouvez voir juste au dessus. </div>
                </div>
                <div className="font-bold text-lg mt-8">Technologies Utilisées:</div>
                <div className="flex flex-col lg:flex-row mt-2">
                    <div className="p-2">
                        <div className="font-bold text-base mt-4">Front-End</div>
                            <div className="text-start">
                                <ul>
                                    <li>- Utilisation du langage Javascript et du framework ReactJS</li>
                                    <li>- Développement des pages et composants avec React JS</li>
                                    <li>- Mise en place de formulaires avec Formik</li>
                                    <li>- utilisation de Yup pour encadrer l'utilisation des formulaires</li>
                                    <li>- Utilisation de tailwind</li>
                                    <li>- Responsive avec tailwind</li>
                                    <li>- Logo et chartre graphique avec la suite Adobe</li>
                                    <li>- Utilisation d'axios pour les requêtes CRUD vers une API</li>
                                    <li>- Sauvegardes et mise en commun (merge) avec git et gitLab</li>
                                </ul>
                            </div>
                        </div>
                    <div className="p-2">
                        <div className="font-bold text-base mt-4">Back-End</div>
                            <div className="text-start">
                                <ul>
                                    <li>- Utilisation du frameWork NodeJS</li>
                                    <li>- Mise en place de models MongoDb</li>
                                    <li>- Mise en place de route Express</li>
                                    <li>- Mise en place de controllers</li>
                                    <li>- Gestion des CRUD dans des services avec Sequelize</li>
                                    <li>- Requêtes avec les fonctions "mongoose"</li>
                                    <li>- Utilisation de git et gitlab pour les sauvegardes et la mise en commun (merge)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <div className="flex">
                <a className="w-full h-full mx-1" href="https://github.com/Maximelebonm/doucrochetfront"> <button className="mt-8 font-bold hover:text-slate-900 hover:bg-pink-800 duration-200 bg-slate-900 w-40 h-12 rounded-full border-slate-700">GitHub Front</button></a>
                <a className="w-full h-full mx-1" href="https://github.com/Maximelebonm/doucrochetback"> <button className="mt-8 font-bold hover:text-slate-900 hover:bg-pink-800 duration-200 bg-slate-900 w-40 h-12 rounded-full border-slate-700">GitHub Back</button></a>

                </div>
            </div>
        </div>
    </>
     
    )
}
export default DetailDouCrochetScreen

