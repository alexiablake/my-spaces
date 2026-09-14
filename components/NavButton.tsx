"use client";

import { motion } from "framer-motion";

export default function NavButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ backgroundColor: "#D1D4DE" }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className="flex items-center gap-1.5 rounded-xl px-4 py-3 text-[11px] bg-[#212A37] cursor-pointer font-medium uppercase tracking-wide text-white transition hover:text-[#373C40]"
    >
      {icon}
      {label}
    </motion.button>
  );
}
