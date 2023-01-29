import { Component } from "react"

const Experience = (props) => {

        const { Date, Title, desc, src, className } = props
        return (
            <div className={className}>
            <div className="ExperienceSlide flex">
                <div className="w-1 bg-slate-50"></div>
                <div class="mb-5 w-full  text-white rounded-lg align-top shadow-2xl bg-pink-800/[.3]">
                    <div>
                        <div class="text-slate-50 w-full text-start bg-pink-800 h-10 p-2 font-bold">{Date}</div>
                        <div class="font-bold text-start text-slate-50  m-2">{Title}</div>
                        <div class="text-start text-slate-50 m-2">{desc}</div>
                    </div>
                </div>
            </div>
            </div>
        )

  
}
export default Experience