import { CameraToScroll } from "./camera";
import { LightTravel } from "../components/lightTravel";
import { useMemo,useRef } from 'react';
import { Line, useScroll } from "@react-three/drei";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";


const LINE_NB_POINTS = 12000;

export const TravelComponent = () => {
    const cameraGroup=useRef()
    const curve = useMemo(()=>{
        return new THREE.CatmullRomCurve3([
            new THREE.Vector3(0,0.5,0),
            new THREE.Vector3(0,0.5,-10),
            new THREE.Vector3(-2,0.5,-20),
            new THREE.Vector3(-3,0.5,-30),
            new THREE.Vector3(0,0.5,-40),
            new THREE.Vector3(5,0.5,-50),
            new THREE.Vector3(7,0.5,-60),
            new THREE.Vector3(5,0.5,-70),
            new THREE.Vector3(0,0.5,-80),
            new THREE.Vector3(0,0.5,-90),
            new THREE.Vector3(0,0.5,-100),
            new THREE.Vector3(-2,0.5,-120),
            new THREE.Vector3(-3,0.5,-140),
            new THREE.Vector3(0,0.5,-160),
            new THREE.Vector3(0,0.5,-180),
            new THREE.Vector3(0,0.5,-190),

        ],false, "catmullrom",0.5)
    },[]);
    
    const linePoints = useMemo(()=>{
        return curve.getPoints(LINE_NB_POINTS)
    },[curve]);
    
    const scroll = useScroll();
    const rectareaRef = useRef()
    useFrame((_state,delta)=>{
        const curPointIndex = Math.min(
            Math.round(scroll.offset * linePoints.length), linePoints.length -1)
            const curPoints = linePoints[curPointIndex];
            
            const pointAhead = linePoints[Math.min(curPointIndex +1, linePoints.length -1)];

            const xDisplacement = (pointAhead.x - curPoints.x) * 98;
            const angleRotation = (xDisplacement < 0 ? 1 : -1) * Math.min(Math.abs(xDisplacement),Math.PI/3);
            
            const targetCameraQuaternion = new THREE.Quaternion().setFromEuler(
                new THREE.Euler(
                  cameraGroup.current.rotation.x,
                  angleRotation,
                  cameraGroup.current.rotation.z,
                ))

                cameraGroup.current.quaternion.slerp(targetCameraQuaternion, delta * 2);
            cameraGroup.current.position.lerp(curPoints, delta * 24);
        })

    return (
        <>
        <group ref={cameraGroup}>
            <CameraToScroll/>
            <LightTravel/>
        </group>    
        <Line
        points={linePoints}
        color={"violet"}
        opacity={0.3}
        transparent
        lineWidth={3}>
        </Line>   
        </>

    )
}