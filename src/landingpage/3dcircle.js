import React from 'react'
// import * as THREE from 'three'
// import * as dat from 'dat.gui'
import {Canvas} from 'react-three-fiber'
import {DeviceOrientationControls, Stars} from '@react-three/drei'
 function Box(){
   return(
       <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshLambertMaterial attach="material" color="blue" />
       </mesh>
   );
 }


function Dcircle() {
//   const textureLoader= new THREE.TextureLoader();
//   const normalTexture= textureLoader.load('../images/NormalMap.png');
//     const gui = new dat.GUI();

//     const canvas=document.querySelector('canvas .circle');

//     const scene =new THREE.Scene();

//     const spheregeomentry = new THREE.SphereGeometry(16,40,20);
    
//     const material=new THREE.MeshStandardMaterial()
//     material.color=new THREE.Color('#160344')
//     material.metalness=0.7
//     material.roughness=0.3
//     material.normalMap=normalTexture;
   
//     const sphere = new THREE.Mesh(spheregeomentry,material);
//     scene.add(sphere);

//     const pointlight= new THREE.PointLight('#ffffff',0.5);
//     pointlight.position.set(2,3,5);
//     scene.add(pointlight);

//     const sizes = {
//       width: window.innerWidth,
//       height: window.innerHeight
//   }
  
//   window.addEventListener('resize', () =>
//   {
//       // Update sizes
//       sizes.width = window.innerWidth
//       sizes.height = window.innerHeight
  
//       // Update camera
//       camera.aspect = sizes.width / sizes.height
//       camera.updateProjectionMatrix()
  
//       // Update renderer
//       renderer.setSize(sizes.width, sizes.height)
//       renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
//   })

//   const camera =new THREE.PerspectiveCamera(50,sizes.width/sizes.height,0.5,300);
//   camera.position.set(0,0,2);
//   scene.add(camera);

//   const renderer= new THREE.WebGL1Renderer({
//     canvas:canvas

//   })
//   renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// const clock=new THREE.Clock();

// const tick = () =>
// {

//     const elapsedTime = clock.getElapsedTime()

//     // Update objects
//     sphere.rotation.y = .5 * elapsedTime

//     // Update Orbital Controls
//     // controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick();

  return (
    <div>
        {/* <canvas className='circle'></canvas> */}
        <Canvas>
        <DeviceOrientationControls />
          <Stars />
          <ambientLight intensity={0.5} />
          <spotLight position={[10,15,10]} angle={0.5} />
          <Box />
        </Canvas>
    </div>
  )
}

export default Dcircle