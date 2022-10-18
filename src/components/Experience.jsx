import { Component } from "react"

class Experience extends Component{
    render(){
        const {Date, Title, desc, src} = this.props
        return(
            <div class="ml-2 mb-5 text-white w-80 grid justify-items-center rounded-lg align-top shadow-2xl bg-sky-600/[.1]">
                <div class="text-gray-100 text-center bg-sky-500 h-10 p-2 font-bold">{Date}</div>
                <div class="font-bold  text-center text-gray-100 text-base m-2">{Title}</div>
                <div class="text-center text-gray-100 text-sm m-2">{desc}</div>
            </div>
        )

    }
}
export default Experience