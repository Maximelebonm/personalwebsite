import { Torus } from "@react-three/drei";

export const NeonRing = (props) => {

    return (
        <Torus castShadow receiveShadow args={[5,0.1,16,100,6,2]} position={props.pos}>
            <meshStandardMaterial emissive={[0.9,0.1,0.1]}/>
        </Torus> 
    )
}