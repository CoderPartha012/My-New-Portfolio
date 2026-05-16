import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create gradient mesh
    const geometry = new THREE.PlaneGeometry(5, 5, 32, 32);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColorA: { value: new THREE.Color('#00d4ff') }, // Electric Cyan
        uColorB: { value: new THREE.Color('#10b981') }, // Emerald
        uColorC: { value: new THREE.Color('#0284c7') }, // Ocean Blue
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform vec3 uColorC;
        varying vec2 vUv;

        void main() {
          vec2 distortedUV = vUv;
          distortedUV.x += sin(distortedUV.y * 10.0 + uTime) * 0.1;
          distortedUV.y += cos(distortedUV.x * 10.0 + uTime) * 0.1;

          vec3 color1 = mix(uColorA, uColorB, sin(uTime * 0.5) * 0.5 + 0.5);
          vec3 color2 = mix(uColorB, uColorC, cos(uTime * 0.3) * 0.5 + 0.5);
          vec3 finalColor = mix(
            color1,
            color2,
            length(distortedUV - 0.5) + sin(uTime) * 0.2
          );

          gl_FragColor = vec4(finalColor, 0.5);
        }
      `,
      transparent: true,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    camera.position.z = 2;

    // Mouse interaction
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    document.addEventListener('mousemove', handleMouseMove);

    // Animation
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Update uniforms
      material.uniforms.uTime.value = elapsedTime;
      
      // Rotate mesh based on mouse position
      mesh.rotation.x = mouse.y * 0.1;
      mesh.rotation.y = mouse.x * 0.1;
      
      // Add gentle floating animation
      mesh.position.y = Math.sin(elapsedTime * 0.5) * 0.1;
      mesh.position.x = Math.cos(elapsedTime * 0.5) * 0.1;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{
        background: 'linear-gradient(to bottom right, #020b18, #050d1a, #071224)',
      }}
    />
  );
};

export default Background3D;