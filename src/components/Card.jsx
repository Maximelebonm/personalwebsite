const { Component } = require("react");
require ('../CSS/Card.css')

class Card extends Component {

    render() {
        const {title, subtitle, desc, src, id} = this.props
        return (
            <div class="ContentCard flex justify-center w-80 m-2 rounded-lg shadow-2xl z-20">
                <div class="ItemCard grid justify-items-center">
                    <img class="w-48" src={src} alt="" id={id}/>
                    <div class=" pb-3 pt-0 flex flex-col justify-start">
                        <h5 class="text-gray-100 text-xl font-medium mb-2 text-center">{title}</h5>
                        <p class="text-gray-100 text-base mb-2 text-center">{subtitle}</p>
                        <p class="text-gray-100 text-xs text-center">{desc}</p>
                    </div>
                </div>
            </div>

        )
    }
}
export default Card