import { Sphere, SpotLight, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import { PointLight } from "three";
import gsap from "gsap";

export const LightTravel = () => {
    const tl = useRef();
    const lightRef = useRef();

    useLayoutEffect(()=>{
       tl.current = gsap.timeline();
       tl.current.to( lightRef.current.position,{ y:1, duration : 1,
        yoyo: true, repeat : -1, ease : "sine.inOut" });
    });

    
    return (
            <mesh ref={lightRef} castShadow receiveShadow position={[0,0.6,2]}>
                <Sphere args={[0.1]}/>
                {/* <rectAreaLight intensity={10} color={[0.1,0.4,0.9]} position={[0.5,0.5,0.5]}/> */}
                <meshStandardMaterial
                emissive={[0.1,0.4,0.9]}
                        color={[0,0,0]}
                        attach="material"
                />
            </mesh>
        )
}