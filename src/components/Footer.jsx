import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <nav class=" text-white px-4 py-4 w-screen bg-slate-800">
            <div class="text-white justify-center w-full flex inline" >
                <Link to="/techno"><div class="hover:bg-slate-600 p-2 m-2 rounded-lg bg-slate-700" >Logiciels et technologies</div></Link>
                <Link to="/experience"><div class="hover:bg-slate-600 p-2 m-2 rounded-lg bg-slate-700">Experiences professionnelles</div></Link>
                <Link to="/contact"><div class="hover:bg-slate-600 p-2 m-2 rounded-lg bg-slate-700">Me contacter</div></Link>
            </div>
        </nav>
    )
}
export default Footer