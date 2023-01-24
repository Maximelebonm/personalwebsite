const DetailDouCrochetScreen = () => {
    return (
            <>
        <div>
            <div className="pt-2 text-slate-50 flex flex-1 flex-col items-center text-center pb-32">
                <div>
                <img className="w-48" src={process.env.PUBLIC_URL + '/img/doucrochet.png'} />
                </div>
                <div>
                    <div className="mt-8 font-bold text-lg p-2 mt-8 ">Raison du projet Dou'Crochet </div>
                    <div className="p-2">Après le projet de monté en compétence sur Allo Movie, l'incubateur met en place une équipe pour travailler sur un projet fictif d'E-commerce. Lors de la réunion pour
               choisir le thème de ce projet j'ai proposé la vente de doudou fait main confectionner par un de mes proche, l'équipe à accepter, nous avont donc travailer sur dou'crochet. </div>
                </div>
                <div>
                    <div className="mt-8 font-bold text-lg p-2 mt-8 ">Particularités du projet </div>
                    <div className="p-2">ce projet dou'crochet fut pour l'occasion de travailler en équipe pour la première fois, nous avons travaillé avec la méthode Scrum (agile), 
                    donc daily tout les jours, review toutes les deux semaines, système de carte pour definir les taches à faire et la mise en commun avec git et gitHub. </div>
                </div>
                <div className="font-bold text-lg mt-8"> Technologies Utilisées :</div>
                <div className="flex flex-col lg:flex-row mt-2">
                    <div className="p-2">
                        <div className="font-bold text-base mt-4">Front-End</div>
                        <div className="text-start">
                            <ul>
                                <li>- Utilisation du langage Javascript et du framework ReactJS</li>
                                <li>- Développement des pages et composants avec React JS</li>
                                <li>- Mise en place de formulaires avec Formik</li>
                                <li>- Utilisation de tailwind</li>
                                <li>- Responsive avec tailwind</li>
                                <li>- Utilisation d'axios pour les requêtes CRUD vers une API</li>
                                <li>- Sauvegardes avec git et gitHub</li>
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
                                <li>- Requêtes avec les fonctions mongoose</li>
                                <li>- Utilisation de git et gitlab pour push, pull, et merge pendant les reviews</li>
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

