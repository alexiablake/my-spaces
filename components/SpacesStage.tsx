"use client";

import { useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import type { PanInfo } from "framer-motion";
import { Plus } from "@phosphor-icons/react";
import SpaceCard from "./SpaceCard";
import { useContainerWidth } from "@/lib/useContainerWidth";
import type { Space } from "@/data/spaces";

const GAP = 75;
const SPRING = { type: "spring", stiffness: 300, damping: 32 } as const;

const DRAG_BLUR = "blur(5px)";
const IDLE_BLUR = "blur(0px)";

type SpacesStageProps = {
  spaces: Space[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;

  onAddSpace: () => void;
};

export default function SpacesStage({
  spaces,
  activeIndex,
  onActiveIndexChange,
  onAddSpace,
}: SpacesStageProps) {
  const { ref: containerRef, width: containerWidth } =
    useContainerWidth<HTMLDivElement>();

  const cardWidth = Math.min(1100, Math.max(260, containerWidth * 0.78));
  const step = cardWidth + GAP;

  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  const targetX = (index: number) =>
    containerWidth / 2 - cardWidth / 2 - index * step;

  useEffect(() => {
    const controls = animate(x, targetX(activeIndex), SPRING);
    return controls.stop;
  }, [activeIndex, containerWidth]);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    setIsDragging(false);
    const draggedSteps = -info.offset.x / step;
    const velocitySteps = -info.velocity.x / 900;
    const projected = Math.round(draggedSteps + velocitySteps);
    const nextIndex = Math.min(
      spaces.length - 1,
      Math.max(0, activeIndex + projected),
    );

    if (nextIndex === activeIndex) {
      animate(x, targetX(activeIndex), SPRING);
    } else {
      onActiveIndexChange(nextIndex);
    }
  };

  return (
    <div className="w-full">
      <div ref={containerRef} className="relative w-full">
        <motion.div
          className="flex items-center"
          style={{ x, gap: GAP }}
          drag="x"
          dragElastic={0.12}
          dragMomentum={false}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          animate={{ filter: isDragging ? DRAG_BLUR : IDLE_BLUR }}
          transition={{ filter: { duration: 0.25, ease: "easeOut" } }}
        >
          {spaces.map((space, index) => {
            const isActive = index === activeIndex;

            return (
              <div key={space.id} style={{ width: cardWidth, flexShrink: 0 }}>
                <SpaceCard
                  space={space}
                  showDetails={isActive && !isDragging}
                  onClick={() => {
                      onActiveIndexChange(index);    
                  }}
                />
              </div>
            );
          })}

          <motion.button
            type="button"
            onClick={onAddSpace}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.95 }}
            style={{ flexShrink: 0 }}
            className="flex aspect-[4/3] -mt-[100px] cursor-pointer items-center justify-center rounded-2xl text-white/50 transition hover:border-white/40 hover:text-white/80"
            aria-label="Add a new space"
          >
            <Plus size={50} />
          </motion.button>
        </motion.div>
      </div>


    </div>
  );
}
