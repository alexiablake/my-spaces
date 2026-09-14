"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, SignOutIcon, PauseIcon, ShareNetworkIcon } from "@phosphor-icons/react";
import NavButton from './NavButton';

type TopNavProps = {
  mode: "single" | "browsing";
  onEnterBrowsing: () => void;
  onDone: () => void;
};

export default function TopNav({ mode, onEnterBrowsing, onDone }: TopNavProps) {
  return (
    <div className="fixed inset-x-0 top-0 z-20 flex justify-center px-4">
      <AnimatePresence mode="popLayout" initial={false} >
         {mode === "single" ? (
        <motion.div
            key="default-nav"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="flex items-center gap-2 rounded-bl-2xl rounded-br-2xl border border-white/10 p-2 bg-[#787A7B]"
          >
                <NavButton icon={<SignOutIcon size={16} weight="bold" mirrored />} label="Exit" />
                <NavButton
                  icon={<PauseIcon size={16} weight="bold" />}
                  label="My spaces"
                  onClick={onEnterBrowsing}
                />
                <NavButton icon={<ShareNetworkIcon  size={16} weight="bold" />} label="Share" />
          </motion.div>
            ) : (
              <motion.div
                key="browsing-nav"
                initial={{ opacity: 0, y: -6, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="flex items-center gap-2 rounded-bl-2xl rounded-br-2xl border border-white/10 p-2 bg-[#787A7B]"
              >
                <NavButton icon={<Check  size={16} weight="bold" />} onClick={onDone} label="Done"/>
              </motion.div>
            )}
        
      </AnimatePresence>
    </div>
  );
}

