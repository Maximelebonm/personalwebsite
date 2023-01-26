import { BsArrowRight } from "react-icons/bs";
const { Component } = require("react");
require('../CSS/Card.css');

class CardHobbie extends Component {
    
    render() {
        const clique = new Audio('../sound/cliqueApple.wav');
        function play() {
            clique.play()
        }
        const { title, subtitle, desc, src, id, lien, textLien, cssLien, className } = this.props
        return (
            <div className={className}>
                <div className="m-2 rounded-lg shadow-2xl bg-pink-800/[.1] lg:relative">
                    <div className="pt-4">
                        <div className="flex flex-col items-center">
                            <img className="h-16" src={src} alt="" id={id}/>
                            <h5 className="text-gray-100 text-2xl font-medium mb-2 text-center">{title}</h5>
                        </div>
                        <div className="pb-3 pt-4 lg:h-48 sm:h-32 text-center content-start">
                            <p className="text-gray-100 mb-2 text-center">{subtitle}</p>
                            <p className="text-gray-100 text-center p-2">{desc}</p>
                        </div>
                    </div>
                    <a href={lien}><div className="flex justify-center lg:absolute lg:bottom-0 lg:w-full p-2 text-white font-bold bg-pink-800 hover:bg-slate-900 transition duration-300 content-center" onClick={play}><div className="my-auto">{textLien}</div><div><BsArrowRight className="h-full w-full ml-2 my-auto"/></div></div></a>
                </div>
            </div>
        )
    }
}
export default CardHobbie