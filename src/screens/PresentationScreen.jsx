import Undertitle from "../components/undertitle";

const PresentationScreen = () => {
    return (
        <>
            <div class="text-white text-center bg-sky-800 bg-opacity-10 my-8 h-screen">
                <div class="pt-4">
                    <div className="pl-12 pr-12 text-3xl font-bold">
                        Presentation
                    </div>
                    <Undertitle />
                    <div className="p-12">
                        <div class="animTitle">
                            Moi c'est Maxime Lebon, développer javascript fullStack, mes framework de prédilection sont React JS pour le front et Node Js pour le back.
                        </div>
                        <div> Ce que j'aime le plus c'est les animations CSS / javascript</div>
                        <div>Ce que j'aime le moins, c'est les configurations et les lettres qui passe en majuscule sans mon autoRiSaTION </div>
                        <div> Pour voir directement mes projets ici</div>
                        <div> Scroll vers l'infini et au dela pour voir </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PresentationScreen;