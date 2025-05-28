import { motion } from 'framer-motion';

interface LeafPopEffectProps {
  position: { x: number; y: number };
}

const leaves = ['🍃', '🍂', '🍁'];

export default function LeafPopEffect({ position }: LeafPopEffectProps) {
  return (
    <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
      {Array.from({ length: 8 }).map((_, index) => {
        const angle = Math.random() * 2 * Math.PI;
        const distance = 100 + Math.random() * 80;
        const xOffset = Math.cos(angle) * distance;
        const yOffset = Math.sin(angle) * distance;
        const leaf = leaves[Math.floor(Math.random() * leaves.length)];

        return (
          <motion.div
            key={index}
            initial={{
              top: position.y,
              left: position.x,
              opacity: 1,
              scale: 0.5,
              position: 'absolute',
            }}
            animate={{
              x: xOffset,
              y: yOffset,
              opacity: 0,
              rotate: Math.random() * 360,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              ease: 'easeOut',
            }}
            style={{ position: 'absolute' }}
          >
            <span className="text-2xl">{leaf}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
