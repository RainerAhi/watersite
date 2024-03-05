import CustomEffects from "./Effects";
import Experience from "./Experience";
import { Canvas, useFrame } from '@react-three/fiber'

export default function CanvasContainer() {

    return (
        <>
         <Canvas shadows camera={{ position: [6, 4, 6], fov: 35 }} >
            <Experience />
            <CustomEffects />
         </Canvas>
        </>
    )
}