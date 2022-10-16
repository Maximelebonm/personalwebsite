import { Link } from "react-router-dom";
import "../CSS/Header.css"
import { useEffect, useState } from "react";

const Header = () => {
    const[windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
    const handleWindowResize=()=> {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
  
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }

    console.log(windowSize)
    
if(windowSize.innerWidth < 800){
    return (
        <nav class="fixed top-0 z-50 text-black h-16 w-screen backdrop-blur-3xl bg-sky-600/[.1]" id="menu">
            <div class="text-white text-sm justify-center h-12 w-full flex inline" >
                <Link to="/"><div class="hover:bg-sky-500 p-2 h-16 align-middle text-center transition duration-500 ease-in-out" ><img class="h-12" src={process.env.PUBLIC_URL + '/iconSvg/pres.svg'}/></div></Link>
                <Link to="/techno"><div class="hover:bg-sky-500  p-2 h-16 align-middle text-center duration-500 ease-in-out" ><img class="h-12" src={process.env.PUBLIC_URL + '/iconSvg/techno.svg'}/></div></Link>
                <Link to="/experience"><div class="hover:bg-sky-500  p-2 h-16 align-middle text-center duration-500 ease-in-out"><img class="h-12" src={process.env.PUBLIC_URL + '/iconSvg/exp.svg'}/></div></Link>
                <Link to="/loisir"><div class="hover:bg-sky-500  p-2 h-16 align-middle text-center duration-500 ease-in-out"><img class="h-12" src={process.env.PUBLIC_URL + '/iconSvg/loisir.svg'}/></div></Link>
                <Link to="/contact"><div class="hover:bg-sky-500  p-2 h-16 align-middle text-center duration-500 ease-in-out"><img class="h-12" src={process.env.PUBLIC_URL + '/iconSvg/contact.svg'}/></div></Link>
            </div>
        </nav>
    )
}
else{
    return (
        <nav class="fixed top-0 z-50 text-white w-screen h-12 backdrop-blur-3xl bg-sky-600/[.1]" id="menu">
            <div class="text-white text-sm justify-center w-full flex inline" >
            <Link to="/"><div class="hover:bg-sky-500 p-4 h-12 align-middle text-center transition duration-500 ease-in-out" >Presentation</div></Link>
                <Link to="/techno"><div class="hover:bg-sky-500 p-4 h-12 align-middle text-center duration-500 ease-in-out" >Logiciels et technologies</div></Link>
                <Link to="/experience"><div class="hover:bg-sky-500 p-4  h-12 align-middle text-center duration-500 ease-in-out">Experiences professionnelles</div></Link>
                <Link to="/loisir"><div class="hover:bg-sky-500 p-4 h-12 align-middle text-center duration-500 ease-in-out">Loisirs et projets</div></Link>
                <Link to="/contact"><div class="hover:bg-sky-500 p-4 h-12 align-middle text-center duration-500 ease-in-out">Me contacter</div></Link>
            </div>
        </nav>
    )
 }

// J'en fait une fonction pour pouvoir l'appeler au chargement de la page car
// le scoll n'est pas forcément en haut au chargement.

// window.addEventListener('scroll', ()=>{
//     if(window.scrollY>100){
//         nav.classList.add('scroll')
//     }
// })
}
export default Header