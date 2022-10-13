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
        <nav class="fixed top-0 z-10 text-white w-screen" id="menu">
            <div class="text-white justify-center w-full flex inline" >

                <Link to="/techno"><div class="hover:bg-sky-500 p-4 align-middle text-center" >Logiciels et technologies</div></Link>
                <Link to="/experience"><div class="hover:bg-sky-500 p-4 align-middle text-center">Experiences professionnelles</div></Link>
                <Link to="/contact"><div class="hover:bg-sky-500 p-4 align-middle text-center">Me contacter</div></Link>
            </div>
        </nav>
    )
}
export default Header