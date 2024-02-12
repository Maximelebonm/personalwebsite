import { Box, Plane } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';

export const TalesAndKeysComponent = () => {
    const amexioText = useLoader(TextureLoader, process.env.PUBLIC_URL + '/ExpSvg/amexioText.png');
    const amexioLogo = useLoader(TextureLoader, process.env.PUBLIC_URL + '/ExpSvg/amexio.png');

    return (
        <group position={[5.5,0.5,-50]} rotation-y={-0.5}>
             <rectAreaLight args={[0xffffff,25,8,4]} position={[0, 10, 0]} rotation-x={-Math.PI / 2}/>
            <Box args={[0.5,0.5,0.5]} position={[1,-0.2,0]}>
                <meshStandardMaterial attach='material' map={amexioLogo}/>
            </Box>
            <Box position={[1,1,0]} args={[2,3,0]}>
                <meshStandardMaterial attach='material' map={amexioText}/>
            </Box>
        </group>
    )
}