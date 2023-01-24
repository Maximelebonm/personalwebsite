import {Link} from 'react-router-dom';
const { Component } = require("react");
require ('../CSS/Card.css')

class CardHobbie extends Component {

    render() {
        const {title, subtitle, desc, src, id, lien, textLien, cssLien, link, className} = this.props
        return (
            <div className={className}>
            <div class="m-2 lg:w-96 rounded-lg shadow-2xl bg-pink-800/[.1] lg:relative">
                <div class="pt-4">
                    <div class="flex flex-col items-center">
                        <img class="h-16" src={src} alt="" id={id}/>
                        <h5 class="text-gray-100 text-xl font-medium mb-2 text-center">{title}</h5>
                    </div>
                    <div class="pb-3 pt-4 text-center lg:h-40 content-start">
                        <p class="text-gray-100 mb-2 text-center">{subtitle}</p>
                        <p class="text-gray-100 text-center p-2">{desc}</p>
                    </div>
                </div>
                <a href={lien}><div className="lg:absolute lg:bottom-0 lg:w-full p-2 text-white font-bold bg-pink-800 hover:bg-slate-900 transition duration-300">{textLien}</div></a>
            </div>
            </div>

        )
    }
}
export default CardHobbie