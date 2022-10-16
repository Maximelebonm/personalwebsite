import { Link } from "react-router-dom";
import "../CSS/Header.css"

const Header = () => {
    const nav = document.querySelector('nav')

// J'en fait une fonction pour pouvoir l'appeler au chargement de la page car
// le scoll n'est pas forcément en haut au chargement.

window.addEventListener('scroll', ()=>{
    if(window.scrollY>100){
        nav.classList.add('scroll')
    }
})

    return (
        <nav class="fixed top-0 z-50 text-white w-screen backdrop-blur-3xl bg-sky-600/[.1]" id="menu">
            <div class="text-white text-sm justify-center w-full flex inline" >
            <Link to="/"><div class="hover:bg-sky-500 p-4 align-middle text-center transition duration-500 ease-in-out" >Presentation</div></Link>
                <Link to="/techno"><div class="hover:bg-sky-500 p-4 align-middle text-center duration-500 ease-in-out" >Logiciels et technologies</div></Link>
                <Link to="/experience"><div class="hover:bg-sky-500 p-4 align-middle text-center duration-500 ease-in-out">Experiences professionnelles</div></Link>
                <Link to="/loisir"><div class="hover:bg-sky-500 p-4 align-middle text-center duration-500 ease-in-out">Loisirs et projets</div></Link>
                <Link to="/contact"><div class="hover:bg-sky-500 p-4 align-middle text-center duration-500 ease-in-out">Me contacter</div></Link>
            </div>
        </nav>
    )
}
export default Header