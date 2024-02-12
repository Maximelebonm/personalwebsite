import * as THREE from "three";
import { Environment, MeshReflectorMaterial, Plane, Sphere } from "@react-three/drei";
import { LayerMaterial, Gradient } from 'lamina'
import { RigidBody } from "@react-three/rapier";
import { useLoader} from "@react-three/fiber";
import { TextureLoader,RepeatWrapping,LinearEncoding } from "three";
import { useEffect } from "react";


export const Background = () => {

    const [normal,rought] = useLoader(TextureLoader,[ 
        process.env.PUBLIC_URL + '/texture/floor1/textures/floor_worn_disp.png',process.env.PUBLIC_URL + '/texture/floor1/textures/floor_worn_rough.jpg'
    ]);

    useEffect(()=>{
        [normal,rought].forEach((t)=>{
            t.wrapS = RepeatWrapping;
            t.wrapT = RepeatWrapping;
            t.repeat.set(5,5)
        });
        normal.encoding = LinearEncoding;
    },[normal,rought])

    return (
        <>
        <RigidBody type="fixed">
        <mesh  rotation-x={-Math.PI/2} position-y={0}  castShadow receiveShadow 
        >
            <circleGeometry args={[1000,1000]} color={[0.015,0.015,0.015]}  />
            <MeshReflectorMaterial
            normalMap={normal}
            roughnessMap={rought}
            color={[0.015,0.015,0.015]}
             envMapIntensity={0.2} 
             dithering={true} 
             roughness={0.7}
             blur={[1000,400]}
             mixBlur={30}
             mixStrength={80}
             mixContrast={1}
             resolution={1024}
             mirror={0}
             depthScale={0.01}
             minDepthThreshold={0.9}
             maxDepthThreshold={1}
             depthToBlurRatioBias={0.25}
             debut={1}
             reflectorOffset={0.2}
             />
         
        </mesh>
        </RigidBody>
        {/* <Sphere scale={[100,100,100]} rotation-y={Math.PI/2}>
            <LayerMaterial
            lighting="physical"
            transmission={1}
            side={THREE.BackSide}
            >
                <Gradient colorA={"grey"} colorB={"black"} axes={"y"} start={0} end={-0.5}/>
            </LayerMaterial>
        </Sphere> */}
        </>
    )
}