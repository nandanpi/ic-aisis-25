'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Leaf {
  id: number;
  delay: number;
  x: number;
  duration: number;
  size: number;
  rotation: number;
  horizontalDrift: number;
}

const NUM_LEAVES = 20;

const generateLeaf = (): Leaf => ({
  id: Math.random(),
  delay: Math.random() * 5,
  x: Math.random() * window.innerWidth,
  duration: 10 + Math.random() * 10,
  size: 30 + Math.random() * 30,
  rotation: Math.random() * 360,
  horizontalDrift: (Math.random() - 0.5) * 100, // -50 to +50 px drift
});

export default function FallingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLeaves(Array.from({ length: NUM_LEAVES }, generateLeaf));
    }
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-30 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.img
          key={leaf.id}
          src="/leaf.png" // Add your own leaf image to public folder
          alt="Leaf"
          initial={{
            x: leaf.x,
            y: -100,
            rotate: leaf.rotation,
          }}
          animate={{
            y: '110vh',
            x: leaf.x + leaf.horizontalDrift,
            rotate: leaf.rotation + 360,
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            width: `${leaf.size}px`,
            height: 'auto',
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  );
}
