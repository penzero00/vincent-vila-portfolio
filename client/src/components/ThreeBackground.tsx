import React, { useRef, useEffect, useState } from 'react';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Group,
  Mesh,
  MeshBasicMaterial,
  BufferGeometry,
  AmbientLight,
  DirectionalLight,
  Object3D,
  SphereGeometry,
  Vector3,
  Color,
  Material,
} from 'three';
import { Line } from 'three/src/objects/Line.js';
import { LineBasicMaterial } from 'three/src/materials/LineBasicMaterial.js';
import { BufferAttribute } from 'three/src/core/BufferAttribute.js';
import { DoubleSide } from 'three/src/constants.js';

// Define interfaces for extended types
interface AnimationProperties {
  rotationSpeed: {
    x: number;
    y: number;
    z: number;
  };
  floatSpeed: number;
  floatHeight: number;
  time: number;
  initialY: number;
}

interface ExtendedGroup extends Group, AnimationProperties {
  readonly children: Object3D[];
}

interface ExtendedMesh extends Mesh {
  pulseSpeed?: number;
  time?: number;
  initialScale?: number;
}

// Interfaces
interface ThreeBackgroundProps {
  className?: string;
}

type ExtendedBufferGeometry = BufferGeometry & {
  setAttribute: (name: string, attribute: BufferAttribute) => void;
};

// Helper functions
const createBufferGeometry = (vertices: number[]): ExtendedBufferGeometry => {
  const geometry = new BufferGeometry() as ExtendedBufferGeometry;
  const vertexArray = new Float32Array(vertices);
  const attribute = new BufferAttribute(vertexArray, 3);
  geometry.setAttribute('position', attribute);
  return geometry;
};

const initializeAnimationProperties = (group: ExtendedGroup): void => {
  group.rotationSpeed = {
    x: (Math.random() - 0.5) * 0.002,
    y: (Math.random() - 0.5) * 0.002,
    z: (Math.random() - 0.5) * 0.001
  };
  group.floatSpeed = Math.random() * 0.01 + 0.005;
  group.floatHeight = Math.random() * 0.1 + 0.05;
  group.time = Math.random() * Math.PI * 2;
  group.initialY = group.position.y;
};

const createHexagonGeometry = (size: number): ExtendedBufferGeometry => {
  const vertices = [];
  const segments = 6;
  
  // Create hexagon shape
  for (let i = 0; i < segments; i++) {
    const angle1 = (i / segments) * Math.PI * 2;
    const angle2 = ((i + 1) / segments) * Math.PI * 2;
    
    // Center point
    vertices.push(0, 0, 0);
    // First point on edge
    vertices.push(Math.cos(angle1) * size, Math.sin(angle1) * size, 0);
    // Second point on edge
    vertices.push(Math.cos(angle2) * size, Math.sin(angle2) * size, 0);
  }
  
  return createBufferGeometry(vertices);
};

// Create hexagon with the specified size and color
const createHexagon = (size: number, color: number): ExtendedGroup => {
  const hexGroup = new Group() as ExtendedGroup;
  
  // Create base material
  const material = new MeshBasicMaterial({
    color: color,
    transparent: true,
    opacity: Math.random() * 0.3 + 0.4,
  });
  (material as any).side = DoubleSide;

  // Create geometry and mesh
  const geometry = createHexagonGeometry(size);
  const hexMesh = new Mesh(geometry, material);
  hexGroup.add(hexMesh);

  // Create outline
  const outlineMaterial = new LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5
  });

  const outlineVertices = [];
  for (let i = 0; i <= 6; i++) {
    const angle = (i % 6 / 6) * Math.PI * 2;
    outlineVertices.push(
      Math.cos(angle) * size,
      Math.sin(angle) * size,
      0
    );
  }
  
  const outlineGeometry = createBufferGeometry(outlineVertices);
  const outline = new Line(outlineGeometry as any, outlineMaterial);
  hexGroup.add(outline);

  // Initialize animation properties
  initializeAnimationProperties(hexGroup);

  return hexGroup;
};

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const sceneRef = useRef<Scene>(new Scene());
  const cameraRef = useRef<PerspectiveCamera>();
  const rendererRef = useRef<WebGLRenderer>();
  const networkContainerRef = useRef<ExtendedGroup>(new Group() as ExtendedGroup);
  const [navbarHeight, setNavbarHeight] = useState<number>(0);

  // Colors for the hexagons - matching the portfolio theme
  const colors: number[] = [
    0x00E6E6, // Cyan (primary accent)
    0x4DC4FF, // Sky Blue
    0x33CCFF, // Turquoise
    0x66B2FF, // Light Blue
    0x00FFFF  // Bright Cyan
  ];

  // Create a glowing dot
  const createGlowingDot = (posX: number, posY: number, posZ: number): ExtendedMesh => {
    const dotGeometry = new SphereGeometry(0.1, 6, 6);
    const dotMaterial = new MeshBasicMaterial({
      color: 0x00E6E6, // Matching accent color
      transparent: true,
      opacity: 0.5 + Math.random() * 0.3
    });

    const dot = new Mesh(dotGeometry, dotMaterial) as ExtendedMesh;
    dot.position.set(posX, posY, posZ);
    dot.pulseSpeed = Math.random() * 0.02 + 0.01;
    dot.time = Math.random() * Math.PI * 2;
    dot.initialScale = 0.8 + Math.random() * 0.4;

    return dot;
  };

  // Create connecting line between points
  const createConnection = (startPoint: Vector3, endPoint: Vector3): Line => {
    const positions = new Float32Array([
      startPoint.x, startPoint.y, startPoint.z,
      endPoint.x, endPoint.y, endPoint.z
    ]);
    
    const lineGeometry = createBufferGeometry(Array.from(positions));
    const lineMaterial = new LineBasicMaterial({
      color: 0x00E6E6, // Matching accent color
      transparent: true,
      opacity: 0.3
    });

    return new Line(lineGeometry as any, lineMaterial);
  };

  // Animation loop
  const animate = () => {
    if (!rendererRef.current || !cameraRef.current) return;

    networkContainerRef.current.rotation.y += 0.0005;

    const objects = (networkContainerRef.current as unknown as { children: Object3D[] }).children;
    objects.forEach((child: Object3D) => {
      const extendedChild = child as ExtendedMesh;
      if (child instanceof Mesh && 
          extendedChild.initialScale !== undefined) {
        extendedChild.time = (extendedChild.time || 0) + 0.016;
        const scale = (extendedChild.initialScale || 1) + 
          Math.sin((extendedChild.time || 0) * (extendedChild.pulseSpeed || 1)) * 0.2;
        child.scale.set(scale, scale, scale);
      }
    });

    rendererRef.current.render(sceneRef.current, cameraRef.current);
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Get container dimensions
    const width = containerRef.current.clientWidth || window.innerWidth;
    const height = containerRef.current.clientHeight || window.innerHeight;

    // Setup camera
    cameraRef.current = new PerspectiveCamera(60, width / height, 0.1, 1000);
    cameraRef.current.position.z = 20;

    // Setup renderer with transparency
    rendererRef.current = new WebGLRenderer({
      antialias: true,
      alpha: true
    });
    rendererRef.current.setSize(width, height);
    rendererRef.current.setClearColor(0x000000, 0); // Transparent background

    // Add renderer to container
    containerRef.current.appendChild(rendererRef.current.domElement);
    rendererRef.current.domElement.style.position = 'absolute';
    rendererRef.current.domElement.style.top = '0';
    rendererRef.current.domElement.style.left = '0';
    rendererRef.current.domElement.style.width = '100%';
    rendererRef.current.domElement.style.height = '100%';
    rendererRef.current.domElement.style.pointerEvents = 'none';

    // Add lights
    const ambientLight = new AmbientLight(0xffffff, 0.5);
    const directionalLight = new DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 1);
    sceneRef.current.add(ambientLight, directionalLight);

    // Initialize container
    networkContainerRef.current.rotation.x = 0.2;
    networkContainerRef.current.position.y = -5 - navbarHeight / 30;
    sceneRef.current.add(networkContainerRef.current);

    // Create hexagons
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 1.5 + 1;
      const colorIndex = Math.floor(Math.random() * colors.length);
      const hexagon = createHexagon(size, colors[colorIndex]);
      
      hexagon.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.3) * 40 - navbarHeight/15,
        Math.random() * 8 - 10
      );
      
      networkContainerRef.current.add(hexagon);
    }

    // Create background dots
    for (let i = 0; i < 50; i++) {
      const posX = (Math.random() - 0.5) * 60;
      const posY = (Math.random() - 0.5) * 50 - navbarHeight/15;
      const posZ = Math.random() * 10 - 20;
      const dot = createGlowingDot(posX, posY, posZ);
      networkContainerRef.current.add(dot);
    }

    // Handle resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current || !containerRef.current) return;
      
      const newWidth = containerRef.current.clientWidth || window.innerWidth;
      const newHeight = containerRef.current.clientHeight || window.innerHeight;
      
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (rendererRef.current && containerRef.current && rendererRef.current.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      // Clean up Three.js resources
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [navbarHeight]);

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ThreeBackground;
