import { Box, Plane } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';

export const ExpComponent = () => {
    const mii = useLoader(TextureLoader, process.env.PUBLIC_URL + '/ExpSvg/mii.png');
    const miiLogo = useLoader(TextureLoader, process.env.PUBLIC_URL + '/ExpSvg/logomii.png');

    return (
        <group position={[-3,0.5,-40]} rotation-y={-0.5}>
             <rectAreaLight args={[0xffffff,25,8,4]} position={[0, 10, 0]} rotation-x={-Math.PI / 2}/>
            <Box args={[0.5,0.5,0.5]} position={[1,-0.1,0]}>
                <meshStandardMaterial attach='material' map={miiLogo}/>
            </Box>
            <Box position={[1,1,0]} args={[2,3,0]}>
                <meshStandardMaterial attach='material' map={mii}/>
            </Box>
        </group>
    )
}