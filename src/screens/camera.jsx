import { PerspectiveCamera } from "@react-three/drei"
import { useScroll } from "@react-three/drei";
import { useRef,useLayoutEffect} from "react";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export const CameraToScroll = () => {
    // const refCamera = useRef();
    // const tl = useRef();
    // const scroll = useScroll();
    
    // useFrame(()=>{
    //     tl.current.seek(scroll.offset * tl.current.duration())
    // })
    
    // useLayoutEffect(()=>{
    //     tl.current = gsap.timeline()
    //     tl.current.to(refCamera.current.position,{ z: -10 , duration : 0.5},0);
    // },[]);

    return (
        <PerspectiveCamera rotation-x={-0.2} makeDefault position={[0, 2, 5]} fov={80}/>
    )
}