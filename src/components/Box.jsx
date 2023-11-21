import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const Box = (props) => {
    const ref = useRef();
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    return (
        <mesh {...props} ref={ref} position={[0, 0, 0]} >
            <boxGeometry />
            <meshBasicMaterial color={'#c814ee'} />

        </mesh >
    )
}

export default Box