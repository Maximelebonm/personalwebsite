import { Link } from "react-router-dom"
const ContactScreen=()=>{

    return(
        <div class="h-screen">
            <div class="text-white text-center p-2 m-2 rounded-lg">
            Par mail :
            lebon.maxime.m@gmail.com

                
            </div>
                <div class="text-white text-center p-2 m-2 rounded-lg flex flex-col items-center">
                    <div>
                        Par linkedin :
                    </div>
                    <a href="https://www.linkedin.com/in/maxime-lebon-929581234/" target="_blank" rel="noreferrer">
                        <div className="bg-sky-500 hover:bg-sky-700 w-40 h-8 rounded-lg hover:duration-300 align-middle p-1">
                            En cliquant ici
                        </div>
                    </a>
                </div>
            </div>
    )
}
export default ContactScreen