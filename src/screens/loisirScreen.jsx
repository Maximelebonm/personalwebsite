import Card from "../components/Card"
const LoisirScreen=()=>{


    return(
        <div class="pt-12 h-screen text-white text-center">
            <div class="font-bold pt-4">
                Mes différents projets personnel
            </div>
            <div class="pt-4">
                    <Card title="Maks Nobel" src="" desc="Projet musical dont je suis le musicien, ingénieur du son, monteur vidéo, communicant"/>
                    <Card title="BeMusician" src="" desc="Projet d'application pour apprendre à jouer d'un instrument"/>
            </div>
        </div>
    )
}
export default LoisirScreen