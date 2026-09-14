"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Space } from "@/data/spaces";

type SpaceVisualProps = {
  space: Space;
  radius: number;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
};


export default function SpaceVisual({
  space,
  radius,
  className,
  onClick,
  children,
}: SpaceVisualProps) {
  return (
    <motion.div className="relative overflow-hidden pb-[100px]">
      <motion.div
        layout
        layoutId={`space-${space.id}`}
        onClick={onClick}
        animate={{ borderRadius: radius }}
        transition={{ duration: 0.2, delay: 0.05 }}
        className={`relative overflow-hidden bg-neutral-900 ${className ?? ""}`}
      >
        <img
          src={space.image}
          alt={space.name}
          className="h-full w-full select-none object-cover"
          draggable={false}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
        
      </motion.div>
      {children}
    </motion.div>
  );
}
