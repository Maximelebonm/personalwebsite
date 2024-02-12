import { Container, DefaultStyleProvider, RootContainer } from "@coconut-xr/koestlich";
import { Html, OrbitControls, Plane,Text3D, Text } from "@react-three/drei";
import { useRef,useLayoutEffect,useFrame, Suspense } from "react";
import { CSS2DRenderer } from 'three/addons/renderers/CSS2DRenderer.js';

export const TextTechnologies = ()=>{
    const domnodeRef = useRef();
    const ref = useRef();
    return (
        <group position={[-2,3,-2]}>
                <DefaultStyleProvider borderRadius={0.1}>
                    <DefaultStyleProvider margin={0.1}>
                            <Suspense>
                                <Text flexGrow={1} fontSize={0.3} index={0} margin={0} marginLeft={0}>
                                    Mes technologies d'expertise {"\n"}
                                    HTML5 / CSS3 / tailwind{"\n"}
                                    Javascript React NodeJS{"\n"}
                                    mysql et git
                                </Text>
                            </Suspense>
                    </DefaultStyleProvider>
                </DefaultStyleProvider>
        </group>
    )
}