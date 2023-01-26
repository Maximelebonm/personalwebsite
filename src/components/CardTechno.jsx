const CardTechno = (props) => {
    const src = props.src;
    const id = props.id;
    const title = props.title;
    const subtitle = props.subtitle;
    const desc = props.desc;
    const className=props.className;
 return (
     <div className={className}>
        <div className="m-2 rounded-lg shadow-2xl bg-pink-800/[.1] lg:relative">
        <div className="pt-4">
            <div className="flex flex-col items-center">
                <img className="h-16" src={src} alt="" id={id}/>
                <h5 className="text-gray-100 text-2xl font-medium mb-2 text-center">{title}</h5>
            </div>
            <div className=" pb-3 pt-4 text-center content-start">
                <p className="text-gray-100 mb-2 text-center">{subtitle}</p>
                <p className="text-gray-100 text-center p-2">{desc}</p>
            </div>
        </div>
    </div>
     </div>
 )
}
export default CardTechno;