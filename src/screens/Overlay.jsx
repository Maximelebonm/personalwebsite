import { Scroll } from "@react-three/drei";
import HomeScreen from "./homescreen";
import { useRef } from "react";

export const Overlay = () => {
    const ref = useRef();


    return (
        <Scroll html>
           <section className={'h-screen w-screen mt-10'}>
                <HomeScreen/>
           </section>
           <section className='h-screen w-1/2'>
        
           </section>
           <section className={'h-screen sm:w-1/2'}>
            
           </section>
           <section className={'h-screen w-1/2'}>
          
           </section>
           <section className={'h-screen'}>
               
           </section>
        </Scroll>
    )
};