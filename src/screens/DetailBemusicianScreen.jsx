const DetailBeMusicianScreen = () => {
    return (
        <>
            <div>
                <div className="pt-2 text-slate-50 flex flex-1 flex-col items-center text-center pb-32">
                    <div>
                    <img className="w-48" src={process.env.PUBLIC_URL + '/img/bemusician.png'} />
                    </div>
                    <div>
                        <div className="mt-8 font-bold text-lg p-2">Raison du projet Bemusian </div>
                        <div className="p-2">BeMusician est à la base un projet "fil rouge", il nous sert à montrer nos capacités lors de l'entretiens final pour obtenir le diplome de concepteur d'application.
                        par la suite j'ai décidé d'aller plus loin et de le publier pour continuer à monter en compétence et notament découvrir la mise en ligne d'API.  </div>
                    </div>
                    <div className="font-bold text-lg"> Technologies Utilisées :</div>
                    <div className="flex flex-col lg:flex-row mt-2">
                        <div className="p-2">
                            <div className="font-bold text-base">Front-End</div>
                            <div className="text-start">
                                <ul>
                                    <li>- Utilisation du langage Javascript et du framework ReactJS</li>
                                    <li>- Développement des pages et composants avec React JS</li>
                                    <li>- Mise en place de formulaires avec Formik</li>
                                    <li>- Développement des animations avec keyframes CSS et javascript</li>
                                    <li>- Utilisation de tailwind</li>
                                    <li>- Responsive avec media Query</li>
                                    <li>- Utilisation d'axios pour les requêtes CRUD vers une API</li>
                                    <li>- Mise en ligne avec Firebase</li>
                                    <li>- Sauvegardes avec <a className="bg-slate-900 hover:bg-pink-800" href="https://github.com/BeMusicianApp/BeMusicianFrontV1/" target="_blank">gitHub</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-2">
                            <div className="font-bold text-base">Back-End</div>
                            <div className="text-start">
                                <ul>
                                    <li>- Utilisation du langage Javascript et du frameWork NodeJS</li>
                                    <li>- Mise en place de models Sequilize</li>
                                    <li>- Mise en place de route Express</li>
                                    <li>- Mise en place de controllers</li>
                                    <li>- Gestion des CRUD dans des services avec Sequelize</li>
                                    <li>- Requêtes sequilize et MySqL</li>
                                    <li>- Mise en ligne avec Heroku</li>
                                    <li>- Gestion des variables d'environements</li>
                                    <li>- Sauvegardes avec gitHub (Pour la sécurité le repositorie est privé)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                        <button className="font-bold hover:text-slate-900 hover:bg-pink-800 duration-200 bg-slate-900 w-40 h-12 rounded-full border-slate-700"><a href="https://bemusician.fr">Aller sur le site</a></button>
                </div>
            </div>
        </>
    )
}
export default DetailBeMusicianScreen