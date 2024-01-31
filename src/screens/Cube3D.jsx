import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useState , useMemo, useLayoutEffect} from "react";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, useScroll, ScrollControls, Box, Sphere, Plane } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import gsap from 'gsap';

export const FLOOR_HEIGHT = -20;
export const NB_FLOORS = 1;

export function Cube(){
    const [active, setActive] = useState(false)
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


    const api = useRef();

    const tl = useRef();
    const mouse = gsap.quickTo()

    const colorMap = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconsvg/html5.svg')
    const colorMap2 = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconSvg/css3.svg')
    const colorMap3 = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconSvg/javascript.svg')
    const colorMap4 = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconSvg/mysql.svg')
    const colorMap5 = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconSvg/react.svg')
    const colorMap6 = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconSvg/nodejs.svg')
    const colorMap7 = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconSvg/git.svg')
    const colorMap8 = useLoader(TextureLoader, process.env.PUBLIC_URL + '/iconSvg/tailwind-css-2.svg')

    const scroll = useScroll();
    
    useLayoutEffect(()=>{
        tl.current = gsap.timeline()

        tl.current.to( refGroup.current.position,{ x: 4, duration : 0.5},0.7);
        tl.current.to( refGroup.current.position,{ x: 8, duration : 0.5},1.4);
        // tl.current.to( refGroup.current.position,{ y: FLOOR_HEIGHT, duration : 10 });
        // tl.current.to( refGroup.current.position,{ z: FLOOR_HEIGHT, duration : 10 });
        // tl.current.to( refGroup.current.position,{ y: -FLOOR_HEIGHT, duration : 10 });
        // tl.current.to( refGroup.current.position,{ z: FLOOR_HEIGHT, duration : 10 });
        // tl.current.to( refGroup.current.position,{ duration : 2, y: -FLOOR_HEIGHT * (NB_FLOORS - 1)}, 0.5);

        
        tl.current.from( ref.current.position, { duration : 0.25, x:0,y:10 }, 0.4);
        tl.current.to( ref.current.rotation, { duration : 2, y: -Math.PI*2 },0.4);

        tl.current.from( ref2.current.position, { duration : 0.25, y:8, x:8}, 0.4); 
        tl.current.to( ref2.current.rotation, { duration : 2, y: -Math.PI*2 },0.4);

        // tl.current.to( ref3.current.position,{ duration : 2, x:5 }, 1.20 );
        tl.current.from( ref3.current.position, { duration : 0.25, y:0, x:10}, 0.4); 
        tl.current.to( ref3.current.rotation, { duration : 2, y: -Math.PI*2 },0.4);

        // tl.current.to( ref4.current.position,{ duration : 2, y:5 }, 1.80 );
        tl.current.from( ref4.current.position, { duration : 0.25, y:-8, x:8}, 0.4); 
        tl.current.to( ref4.current.rotation, { duration : 2, y: -Math.PI*2},0.4);

        // tl.current.to( ref5.current.position, { duration : 2, x:-5,}, 2.40);
        tl.current.from( ref5.current.position, { duration : 0.25, y:-10, x:0}, 0.4); 
        tl.current.to( ref5.current.rotation, { duration : 2, y: -Math.PI*2},0.4);

        // tl.current.to( ref6.current.position, { duration : 2, y:-5 }, 3);
        tl.current.from( ref6.current.position, { duration : 0.25, y:-8, x:-8}, 0.4); 
        tl.current.to( ref6.current.rotation,{ duration : 2, y: -Math.PI*2},0.4);

        // tl.current.to( ref7.current.position,{ duration : 2, y:5 }, 3.60);
        tl.current.from( ref7.current.position, { duration : 0.25, y:0, x:-10}, 0.4); 
        tl.current.to( ref7.current.rotation,{ duration : 2, y: -Math.PI*2},0.4);

        tl.current.from( ref8.current.position, { duration : 0.25, y:8, x:-8}, 0.4); 
        tl.current.to( ref8.current.rotation,{ duration : 2, y: -Math.PI*2},0.4);
    },[])

    useFrame(()=> {
        tl.current.seek(scroll.offset * tl.current.duration())
    });

    return (
        <group ref={refGroup}  position={[0,0,-1]} dispose={null}>
            <group position={[0, 2, 0]} scale={1} ref={ref}>
                <Box opacity={0}>
                    <meshStandardMaterial attach="material" map={colorMap} transparent/>
                </Box>
            </group>
            <group  position={[1.5, 1.5, 0]} ref={ref2}>
                <Box>
                    <meshStandardMaterial attach="material" map={colorMap2} transparent/>
                </Box>
            </group>
            <group position={[2, 0, 0]} ref={ref3}>
                <Box>
                    <meshStandardMaterial attach="material" map={colorMap3} transparent/>
                </Box>
            </group>
            <group position={[1.5, -1.5, 0]} ref={ref4}>
                <Box>
                    <meshStandardMaterial attach="material" map={colorMap4} transparent/>
                </Box>
            </group>
            <group position={[0, -2, 0]} ref={ref5}>
                <Box>
                    <meshStandardMaterial attach="material" map={colorMap5} transparent/>
                </Box>
            </group>
            <group position={[-1.5, -1.5, 0]} ref={ref6}>
                <Box>
                    <meshStandardMaterial attach="material" map={colorMap6} transparent/>
                </Box>
            </group>
            <group position={[-2, 0, 0]} ref={ref7}>
                <Box>
                    <meshStandardMaterial attach="material" map={colorMap7} transparent/>
                </Box>
            </group>
            <group position={[-1.5, 1.5, 0]} ref={ref8}>
                <Box>
                    <meshStandardMaterial attach="material" map={colorMap8} transparent/>
                </Box>
            </group>
        </group>
    );
}
