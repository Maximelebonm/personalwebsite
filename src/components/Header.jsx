import { Link } from "react-router-dom";
import "../CSS/Header.css";
import { useEffect, useState } from "react";
import {AiOutlineUser, AiOutlineDribbble} from "react-icons/ai";
import {RiQuillPenLine} from "react-icons/ri";
import {GiTechnoHeart} from "react-icons/gi";
import {HiOutlineIdentification} from "react-icons/hi";
import {BsEnvelope} from "react-icons/bs"
import { URL_FRONT_CONTACT } from "../constants/url";
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
    
if(windowSize.innerWidth <= 1024){
    return (
        <nav class="fixed bottom-0 lg:top-0 z-50 text-black h-16 w-screen backdrop-blur-3xl bg-sky-600/[.1]" id="menu">
            <div class="text-white text-sm justify-center h-12 w-full flex inline" >
                <Link to="/"><div class="IconContainer" ><AiOutlineUser className="IconHeader"/></div></Link>
                <Link to="/projet"><div class="IconContainer"><RiQuillPenLine className="IconHeader"/></div></Link>
                <Link to="/techno"><div className="IconContainer" ><GiTechnoHeart className="IconHeader"/></div></Link>
                <Link to="/experience"><div className="IconContainer"><HiOutlineIdentification className="IconHeader"/></div></Link>
                <Link to={URL_FRONT_CONTACT}><div className="IconContainer"> <BsEnvelope className="IconHeader"/></div></Link>
            </div>
        </nav>
    )
}
else{
    return (
        <nav class="fixed top-0 z-50 text-white w-screen h-12 backdrop-blur-3xl bg-sky-600/[.1]" id="menu">
            <div class="text-white text-sm justify-center w-full flex inline" >
                <Link to="/"><div class="hover:bg-pink-800 p-4 h-12 align-middle text-center duration-500 ease-in-out" >Acceuil</div></Link>
                <Link to="/projet"><div class="hover:bg-pink-800 p-4 h-12 align-middle text-center duration-500 ease-in-out">Loisirs et projets</div></Link>
                <Link to="/techno"><div class="hover:bg-pink-800 p-4 h-12 align-middle text-center duration-500 ease-in-out" >Logiciels et technologies</div></Link>
                <Link to="/experience"><div class="hover:bg-pink-800 p-4  h-12 align-middle text-center duration-500 ease-in-out">Experiences professionnelles</div></Link>
                <Link to="/contact"><div class="hover:bg-pink-800 p-4 h-12 align-middle text-center duration-500 ease-in-out">Me contacter</div></Link>
            </div>
        </nav>
    )
 }
}
export default Header