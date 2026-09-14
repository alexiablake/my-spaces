"use client";

import SpaceVisual from "./SpaceVisual";
import type { Space } from "@/data/spaces";

export default function SpaceHero({ space }: { space: Space }) {
  return (
    <SpaceVisual
      space={space}
      radius={0}
      className="h-dvh w-full pt-0"
    />
  );
}
