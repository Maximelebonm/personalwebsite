import { Link } from "react-router-dom"
const ContactScreen=()=>{

    return(
        <div class="pt-2/5">
            <div class="text-white text-center p-2 m-2 rounded-lg">
            Par mail :
            lebon.maxime.m@gmail.com

                
            </div>
                <div class="text-white text-center p-2 m-2 rounded-lg flex flex-col items-center">
                    <div>
                        Par linkedin :
                    </div>
                    <a href="https://www.linkedin.com/in/maxime-lebon-929581234/" target="_blank" rel="noreferrer">
                        <button className="bg-pink-800 hover:bg-slate-900 w-40 h-12 rounded-full hover:duration-300 align-middle p-1">
                            En cliquant ici
                        </button>
                    </a>
                </div>
            </div>
    )
}
export default ContactScreen