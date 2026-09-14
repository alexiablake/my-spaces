"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CopySimple, Heart, ShareNetworkIcon } from "@phosphor-icons/react";
import SpaceVisual from "./SpaceVisual";
import type { Space } from "@/data/spaces";
import NavButton from './NavButton';

type SpaceCardProps = {
  space: Space;
  showDetails: boolean;
  onClick?: () => void;
};

export default function SpaceCard({
  space,
  onClick,
  showDetails,
}: SpaceCardProps) {
  return (
    <SpaceVisual
      space={space}
      radius={24}
      className="aspect-[4/3] w-full"
      onClick={onClick}
    >

      {showDetails && (<AnimatePresence>
          <motion.div
            key="details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5"
          >
            <div>
              <p className="text-sm font-medium uppercase mb-4 tracking-wide text-white">
                {space.name}
              </p>
              <p className="mt-0.5 text-xs text-white">
                <span className="mr-4">Floor - {space.floor}</span> <span> Wall - {space.wall}</span>
              </p>
            </div>

            <div className="flex shrink-0 gap-2">
              <NavButton icon={<ShareNetworkIcon size={16} weight="bold" />} label="Share" />
              <NavButton icon={<Heart size={16} weight="bold" />} label="Favorite" />
              <NavButton
                icon={<CopySimple size={16} weight="bold" />}
                label="Duplicate"
              />
            </div>
          </motion.div>
      </AnimatePresence>)}
    
    </SpaceVisual>
  );
}

