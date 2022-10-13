const HomeScreen=()=>{
    const handlesubmit=()=>{

    }

    return(
        <div class="pt-12 h-screen text-white text-center">
            <div class="font-bold pt-4">
                Bienvenu sur mon site portfolio !
            </div>
            <div class="pt-4">
                Pour commencer, une rapide présentation de moi, je m'appel Maxime j'ai 31 ans,
                j'ai terminé une reconversion professionnelle et souhaites trouver mon 1er emploie en tant que développeur junior.
            </div>
            <div class="">
                Mes soft compétences
            </div>
            <div class="flex justify-center">

            <div class="circle transition ease-in-out duration-500 rounded-full bg-sky-500 h-24 w-24 m-4 hover:bg-sky-900 hover:scale-125"></div>
            <div class="circle transition ease-in-out duration-500 rounded-full bg-sky-500 h-24 w-24 m-4 hover:bg-sky-900 hover:scale-125"></div>
            </div>
        </div>
    )
}
export default HomeScreen