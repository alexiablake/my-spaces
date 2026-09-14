"use client";

import { useState } from "react";
import TopNav from "./TopNav";
import SpaceHero from "./SpaceHero";
import SpacesStage from "./SpacesStage";
import { spaces as initialSpaces, type Space } from "@/data/spaces";

export default function RoomVisualizer() {
  const [spaces, setSpaces] = useState<Space[]>(initialSpaces);
  const [mode, setMode] = useState<"single" | "browsing">("single");
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSpace = spaces[activeIndex];

  const handleAddSpace = () => {
    const index = spaces.length + 1;
    const newSpace: Space = {
      id: `new-space-${index}`,
      name: `Untitled space ${index}`,
      floor: "Not set",
      wall: "Not set",
      image: `https://picsum.photos/seed/new-space-${index}/1200/900`,
    };

    setSpaces((prev) => [...prev, newSpace]);
    setActiveIndex(spaces.length);
  };

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-gradient-to-r from-[#464C51] to-[#505860] text-white">
      <TopNav
        mode={mode}
        onEnterBrowsing={() => setMode("browsing")}
        onDone={() => setMode("single")}
      />

      {mode === "single" ? (
        <SpaceHero space={activeSpace} />
      ) : (
        <div className="absolute inset-0 z-0 top-[75px] flex items-center">
          <SpacesStage
            spaces={spaces}
            activeIndex={activeIndex}
            onActiveIndexChange={setActiveIndex}
            onAddSpace={handleAddSpace}
          />
        </div>
      )}
    </div>
  );
}
