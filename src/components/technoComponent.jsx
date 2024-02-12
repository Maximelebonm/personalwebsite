import { useFrame } from '@react-three/fiber';
import { useRef, useState , useLayoutEffect, useEffect} from "react";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';
import { useScroll, Box } from '@react-three/drei';
import * as THREE from 'three'
import gsap from 'gsap';
import { TextTechnologies } from '../screens/textTechnologies';

export const FLOOR_HEIGHT = -20;
export const NB_FLOORS = 1;

export function TechnoComponent(){
    const [reload, setReload] = useState(false)
    const refGroup = useRef();

    const rotationH = Math.PI*2
    const rotationAH = -Math.PI*2

    const ref = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();
    const ref7 = useRef();
    const ref8 = useRef();
    const refCard = useRef();


    const api = useRef();

    const tl = useRef();
    const tl2 = useRef();
    const refCamera = useRef()
    // const mouse = gsap.quickTo()

    const html5 = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconPng/html5.png');
    const css3 = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconPng/css3.png');
    const javascript = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconPng/javascript.png');
    const mysql = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconPng/mysql.png');
    const react = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconPng/react.png');
    const nodejs = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconPng/nodejs.png');
    const git = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconPng/git.png');
    const text = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconPng/text.png');
    const tailwind = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconPng/tailwind-css-2.png');

    const scroll = useScroll();

    useLayoutEffect(()=>{
        tl.current = gsap.timeline()
        // if (window.innerWidth < 640) {
        //     tl.current.to( refGroup.current.position,{ z: 10 , duration : 0.5},0.7);
        //     tl.current.to( refGroup.current.position,{ z:30, duration : 1},1);
        // }
        // else {
        //     tl.current.to( refGroup.current.position,{ x: 4, duration : 0.5},0.7);
        //     tl.current.to( refGroup.current.position,{ x: 14, y:14, duration : 1},1.4);
        // }
    },[])

    useFrame(()=> {
        tl.current.seek(scroll.offset * tl.current.duration())
    });

    const [position, setPosition] = useState([])
    useEffect(()=>{
        if(window.innerWidth < 640){
            setPosition([0,0,-5])
        }
        else{
            setPosition([0,0,-10])
        }
    },[])

    const spotLightRef = useRef();
    const targetObjectRef = useRef();

    return (
        <>
            <group ref={refGroup} rotation-y={0} position={[1, 0, -20]} dispose={null}>
                <rectAreaLight args={[0xffffff,25,4,4]} position={[0, 6, 0]} rotation-x={-Math.PI / 2}/>
                <group position={[0, 0.5, 0]} scale={1} ref={ref}>
                    <Box>
                        <meshStandardMaterial attach="material" map={html5}/>
                    </Box>
                </group>
                <group  position={[1.5, 1, -0.5]} ref={ref2}>
                        <Box args={[2,2,2]}>
                            <meshStandardMaterial attach="material" map={css3}/>
                        </Box>
                </group>
            <group position={[1.5, 2.5, 0]} ref={ref3}>
                <Box>
                    <meshStandardMaterial attach="material" map={javascript}/>
                </Box>
            </group>
            <group rotation-y={2} position={[-5.5, 2.5, 0.5]} ref={ref4}>
                <Box args={[2,2,2]}>
                    <meshStandardMaterial attach="material" map={mysql}/>
                </Box>
            </group>
            <group position={[-0.5, 1.5, -0]} rotation-y={1.2} ref={ref5}>
                <Box>
                    <meshStandardMaterial attach="material" map={react}/>
                </Box>
            </group>
            <group rotation-y={1} position={[-6, 0.5, 0]} ref={ref6}>
                <Box args={[2,2,2]}>
                    <meshStandardMaterial attach="material" map={nodejs}/>
                </Box>
            </group>
            <group position={[-7, 0.5, 2]} rotation-y={1} ref={ref7}>
                <Box>
                    <meshStandardMaterial color={"orange"} attach="material" map={git}/>
                </Box>
            </group>
            <group position={[-1, 0.5, 0]} ref={ref8}>
                <Box>
                    <meshStandardMaterial attach="material" map={tailwind}/>
                </Box>
            </group>
            <group position={[-1.5,2,-2]} rotation-y={-0.3}>
                <Box args={[2,3,0]} transparent>
                    <meshStandardMaterial attach="material" map={text}/>
                </Box>
            </group>
            </group>
        </>
    );
}
