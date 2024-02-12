import { Cylinder } from "@react-three/drei";

export const NeonDroit = (props) => {

    return (
        <Cylinder castShadow receiveShadow args={[0.1,0.1,5,10,64]} position={props.pos}>
            <meshStandardMaterial emissive={[0.2,0.3,1]}/>
        </Cylinder> 
    )
}