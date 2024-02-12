import { Canvas, useFrame } from '@react-three/fiber';
import { useLayoutEffect, useRef, useState } from "react";
import { Physics, CuboidCollider,RigidBody } from "@react-three/rapier";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { TechnoComponent } from "../components/technoComponent";
import { Suspense} from 'react';
import { Overlay } from "./Overlay";
import { Background } from "../components/background";
import { TravelComponent } from "./travelComponent";
import { NeonDroit } from "../components/neonDroit";
import { NeonRing } from "../components/neonRing";
import Starbackground from "../components/starbackground";
import { ExpComponent } from '../components/expComponent';
import { AmexioComponent } from '../components/AmexioComponent';

const TechnoScreen=()=> {
    const [hidden, set] = useState()

        return (
            <div className="z-30">
                <div className="">
                    <Starbackground/>
                    <div id='canvas'>
                        <Suspense fallback={null}>
                            <Canvas shadows>
                                {/* <OrbitControls/> */}
                                    <ScrollControls pages={20} damping={0.25}>
                                    <TravelComponent/>          
                                        <Physics>
                                            <NeonRing pos={[0,-0.5,-10]}/>
                                            <Background/>
                                            <TechnoComponent/>
                                            <AmexioComponent/>
                                            <ExpComponent/>
                                        </Physics>
                                        <Overlay/>
                                    </ScrollControls>
                            </Canvas>
                        </Suspense>
                    </div>       
                </div> 
            </div>
        )
   
}
export default TechnoScreen