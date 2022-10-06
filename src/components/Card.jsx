const { Component } = require("react");

class Card extends Component {

    render() {
        const {title, subtitle, desc, src} = this.props
        return (
            <div class="flex justify-center w-80 m-2 hadow-lg shadow-xl">
                <div class="grid justify-items-center rounded-lg bg-slate-100 pt-5">
                    <img class="w-48 h-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={src} alt="" />
                    <div class="p-6 flex flex-col justify-start">
                        <h5 class="text-gray-800 text-xl font-medium mb-2 text-center">{title}</h5>
                        <p class="text-gray-600 text-base mb-4 text-center">{subtitle}</p>
                        <p class="text-gray-500 text-xs text-center">{desc}</p>
                    </div>
                </div>
            </div>

        )
    }
}
export default Card