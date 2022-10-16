import { Component } from "react"

class Experience extends Component{
    render(){
        const {Date, Title, desc} = this.props
        return(
            <div class="ml-2 mb-5 text-white w-80 grid justify-items-center rounded-lg align-top shadow-2xl">
                <div class="text-white text-center bg-sky-500 h-10 p-2 font-bold">{Date}</div>
                <div class="font-bold text-center m-2">{Title}</div>
                <div class="text-center m-2">{desc}</div>
            </div>
        )

    }
}
export default Experience