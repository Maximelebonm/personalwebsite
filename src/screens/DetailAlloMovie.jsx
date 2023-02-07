import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const DetailAlloMovie =()=> {
    return (
        <>
        <div>
            <div className=" text-slate-50 flex flex-1 flex-col items-center text-center pt-20 pb-16">
                <div>
                <img className="w-48" src={process.env.PUBLIC_URL + '/img/themovieDb.jpeg'} />
                </div>
                <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img className="p-2" src={process.env.PUBLIC_URL + '/img/themoviedb/acceuil.png'} />
        </SwiperSlide>
        <SwiperSlide>
        <img className="p-2" src={process.env.PUBLIC_URL + '/img/themoviedb/details.png'} />
        </SwiperSlide>
        <SwiperSlide>
        <img className="p-2" src={process.env.PUBLIC_URL + '/img/themoviedb/favoris.png'} />
        </SwiperSlide>
      </Swiper>
                <div>
                    <div className="mt-8 font-bold text-lg p-2">Raison du projet Allo Movie </div>
                    <div className="p-2">Lors de mon arrivé à l'incubateur en septembre 2022, il m'a été demandé de choisir un projet de montée en compétences qui m'accompagnerai pendant 2 semaines,
                    j'ai choisis AlloMovie qui utilise l'api the Movie DB, qui sert à créer une single page application avec du contenu déjà prêt.</div>
                </div>
                <div>
                    <div className="font-bold text-lg p-2 mt-8 ">Particularités du projet </div>
                    <div className="p-2">C'est avec ce projet, que j'ai découvert Tailwind CSS permettant de mettre en place du css directement dans les balises Html,
                    Il ma aussi permis de découvrir axios, d'utiliser React en fonctionnel et non plus avec le système de classe mais aussi d'organisé autrement mon travail.
                    </div>
                </div>
                <div className="font-bold text-lg mt-8"> Technologies Utilisées:</div>
                <div className="flex flex-col lg:flex-row mt-2">
                    <div className="p-2">
                        <div className="font-bold mt-4">Front-End</div>
                        <div className="text-start">
                            <ul>
                                <li>- Utilisation du langage Javascript et du framework ReactJS</li>
                                <li>- Développement des pages et composants avec React JS</li>
                                <li>- Utilisation de tailwind pour le CSS et donc le responsive</li>
                                <li>- Mise en mémoire avec le sessionStorage ou localStorage</li>
                                <li>- Utilisation d'axios pour les requêtes get l'API the Movie Db</li>
                                <li>- Sauvegarde avec github</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="font-bold text-base mt-4">Back-End</div>
                        <div className="text-start">
                           <ul>
                               <li>- Utilisation de l'api The Movie Db</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <a className="w-full h-full" href="https://github.com/Maximelebonm/alloMovie"><button className="font-bold hover:text-slate-900 hover:bg-pink-800 duration-200 bg-slate-900 w-40 h-12 rounded-full border-slate-700">gitHub</button></a>
            </div>
        </div>
    </>
    )
}
export default DetailAlloMovie;