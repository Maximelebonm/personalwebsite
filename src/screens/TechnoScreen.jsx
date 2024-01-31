import CardTechno from "../components/CardTechno";
import Undertitle from "../components/undertitle";
import { createRoot } from 'react-dom/client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from "react";
import { Physics, CuboidCollider,RigidBody } from "@react-three/rapier";
import { OrbitControls, Sphere,Environment, Lightformer, ScrollControls, PerspectiveCamera, CameraControls } from "@react-three/drei";
import { Cube } from "./Cube3D";
import { Suspense } from 'react';
import * as THREE from 'three';
import gsap from "gsap";
import { Overlay } from "./Overlay";
import HomeScreen from "./homescreen";

const TechnoScreen=()=> {
    const refCamera = useRef(CameraControls || null);

        return (
            <div className="z-30">
                <div className="">
                <div id='canvas'>
                    <Canvas ref={refCamera}>
                        <spotLight position={[-10, 0, 10]} intensity={300}/>
                        <Suspense>
                            <ScrollControls pages={5} damping={0.25}>
                                <Overlay/>
                                <Physics>
                                    <Cube/>
                                </Physics>
                            </ScrollControls>
                            <Environment resolution={256}>
                                <group rotation={[-Math.PI / 3, 0, 1]}>
                                    <Lightformer form="circle" intensity={100} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
                                    <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
                                    <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={2} />
                                    <Lightformer form="circle" intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={8} />
                                    <Lightformer form="ring" color="#4060ff" intensity={80} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[10, 10, 0]} scale={10} />
                                </group>
                            </Environment>
                        </Suspense>
                    </Canvas>
                </div>
                    
                </div> 
            </div>
        )
   
}
export default TechnoScreen