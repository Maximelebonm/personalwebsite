const DetailAlloMovie =()=> {
    return (
        <>
        <div>
            <div className="pt-2 text-slate-50 flex flex-1 flex-col items-center text-center pb-32">
                <div>
                <img className="w-48" src={process.env.PUBLIC_URL + '/img/themovieDb.jpeg'} />
                </div>
                <div>
                    <div className="mt-8 font-bold text-lg p-2">Raison du projet Allo Movie </div>
                    <div className="p-2">lors demon arrivé à l'incubateur en septembre 2022, il m'a été demandé de choisir un projet de monté en compétences qui m'accompagnerai pendant 2 semaines,
                    j'ai choisis AlloMovie qui utilise l'api the Movie DB, qui sert à créer une application / site web pour un cinéma fictif</div>
                </div>
                <div>
                    <div className="mt-8 font-bold text-lg p-2 mt-8 ">Particularités du projet </div>
                    <div className="p-2">ce projet dou'crochet fut pour l'occasion de travailler en équipe pour la première fois, nous avons travaillé avec la méthode Scrum (agile), 
                    donc daily tout les jours, review toutes les deux semaines, système de carte pour definir les taches à faire et la mise en commun avec git et gitHub. </div>
                </div>
                <div className="font-bold text-lg mt-8"> Technologies Utilisées :</div>
                <div className="flex flex-col lg:flex-row mt-2">
                    <div className="p-2">
                        <div className="font-bold mt-4">Front-End</div>
                        <div className="text-start">
                            <ul>
                                <li>- Utilisation du langage Javascript et du framework ReactJS</li>
                                <li>- Développement des pages et composants avec React JS</li>
                                <li>- Utilisation de tailwind pour le CSS et donc le responsive</li>
                                <li>- Utilisation d'axios pour les requêtes get l'API the Movie Db</li>
                                <li>- Sauvegarde avec github</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="font-bold text-base mt-4">Back-End</div>
                        <div className="text-start">
                           Pas de réel backend sur ce projet, il y a eu un peu de config pour utiliser l'Api, rien de bien compliqué.
                        </div>
                    </div>
                </div>
                <a className="w-full h-full" href="https://github.com/Maximelebonm/alloMovie"><button className="font-bold hover:text-slate-900 hover:bg-pink-800 duration-200 bg-slate-900 w-40 h-12 rounded-full border-slate-700">gitHub</button></a>
            </div>
        </div>
    </>
    )
}
export default DetailAlloMovie;