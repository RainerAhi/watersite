import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import { useLayoutEffect } from "react";

export default function Model(props) {


  const { camera, scene } = useThree()

  const model = useRef()
  
  const bracelet = useRef()

  const tl = gsap.timeline()

  let mm  = gsap.matchMedia();

  useLayoutEffect(() => {

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      //FIRST TO SECOND

    tl
    .to(model.current.rotation, {
      z: isMobile ? -Math.PI * 0.3 : -Math.PI * 0.25,
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.position, {
      z: 0,
      y: 0,
      x: isMobile ? 0 : -1.5,

      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    //SECOND TO THIRD

    .to(scene.position, {
      z: 0,
      x: isMobile ? 0 : 3,
      y: 0,
      scrollTrigger: {
        trigger: ".three",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(model.current.rotation, {
      z: isMobile ? Math.PI * 0.3  : Math.PI * 0.25,
      scrollTrigger: {
        trigger: ".three",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    //THIRD TO FOURTH
    
    .to(scene.position, {
      z: 0,
      x: isMobile ? 0 : 0.25,
      y: 0,
      scrollTrigger: {
        trigger: ".four",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    
    .to(model.current.rotation, {
      z: Math.PI * 2,
      scrollTrigger: {
        trigger: ".four",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    // FOUR TO FIVE

    .to(model.current.rotation, {
      z: Math.PI * 4,
      scrollTrigger: {
        trigger: ".five",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.position, {
      z: isMobile ? -1 : -3,
      x: isMobile ? 0 : 0.25,
      y: isMobile ? 0 : 0,
      scrollTrigger: {
        trigger: ".five",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    //FIVE TO SIX

    .to(".bottle, .hat, .medicine, .shirt", {
      opacity: 0,
      width: "20%",
      rotation: 30,
      scrollTrigger: {
        trigger: ".six",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(model.current.scale, {
      x: 0,
      y: 0,
      z: 0,
      scrollTrigger: {
        trigger: ".six",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(bracelet.current.scale, {
      x: isMobile ? 2 : 4,
      y: isMobile ? 2 : 4,
      z: isMobile ? 2 : 4,
      scrollTrigger: {
        trigger: ".six",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        immediateRender: false,
      },
    })

    //SIX TO SEVEN

    .to(bracelet.current.scale, {
      x: isMobile ? 1.5 : 2.5,
      y: isMobile ? 1.5 : 2.5,
      z: isMobile ? 1.5 : 2.5,
      scrollTrigger: {
        trigger: ".seven",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.position, {
      z: 0,
      x: isMobile ? 0 : 3,
      y: 0,
      scrollTrigger: {
        trigger: ".seven",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(bracelet.current.rotation, {
      y: Math.PI * 1.75,
      scrollTrigger: {
        trigger: ".seven",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    //SEVEN TO EIGHT

    .to(bracelet.current.rotation, {
      y: Math.PI * 1.75,
      scrollTrigger: {
        trigger: ".eight",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    // EIGHT TO NINE 

    .to(bracelet.current.rotation, {
      y: Math.PI * -2.1,
      scrollTrigger: {
        trigger: ".nine",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(scene.position, {
      z: 0,
      x: isMobile ? 0 : -2,
      y: 0,
      scrollTrigger: {
        trigger: ".nine",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(bracelet.current.scale, {
      x: isMobile ? 2 : 3,
      y: isMobile ? 2 : 3,
      z: isMobile ? 2 : 3,
      scrollTrigger: {
        trigger: ".nine",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        immediateRender: false,
      },
    })

    .to(model.current.scale, {
      x: isMobile ? 0.5 : 0.75,
      y: isMobile ? 0.5 : 0.75,
      z: isMobile ? 0.5 : 0.75,
      scrollTrigger: {
        trigger: ".nine",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        immediateRender: false,
      },
    })


    })
    





  }, [])


  const [isMobileOut, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    // Add event listener to listen for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for mobile device on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  const { nodes, materials } = useGLTF("./watermachine.glb");
  return (
    <group {...props} dispose={null}>
      <group ref={model} scale={ isMobileOut ? 1 : 1.5 } rotation={[Math.PI / 2, 0, 0]} >
      <group
        position={[0.046, 0, 0.662]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.028}
      >
        <mesh
          geometry={nodes.Displey_1.geometry}
          material={materials["enagicscreen.001"]}
        />
        <mesh
          geometry={nodes.Displey_2.geometry}
          material={materials["Lavender Opaque Plastic.001"]}
        />
      </group>
      <group
        position={[0.046, 0, 0.662]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.028}
      >
        <mesh
          geometry={nodes.Mesh_0.geometry}
          material={materials["Lavender Opaque Plastic"]}
        />
        <mesh
          geometry={nodes.Mesh_0_1.geometry}
          material={materials["Light Gray Transparent Plastic"]}
        />
        <mesh
          geometry={nodes.Mesh_0_2.geometry}
          material={materials.enagicscreen}
        />
      </group>
      <group
        position={[0.046, 0, 0.001]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.028}
      >
        <mesh
          geometry={nodes.Mesh_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Mesh_1_1.geometry}
          material={materials["Light Gray Opaque Plastic"]}
        />
      </group>
      </group>
      <group ref={bracelet} scale={ 0 } >
      <mesh
        geometry={nodes.Air_splash.geometry}
        material={materials["Lavender Opaque Plastic"]}
        position={[0.005, -0.002, 0.016]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      </group>
    </group>
  );
}

useGLTF.preload("./watermachine.glb");