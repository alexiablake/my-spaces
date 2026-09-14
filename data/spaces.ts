export type Space = {
  id: string;
  name: string;
  floor: string;
  wall: string;
  image: string;
};

export const spaces: Space[] = [
  {
    id: "living-room",
    name: "Living room",
    floor: "Dark stained hardwood",
    wall: "Plaster white",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=900&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "cozy-bedroom",
    name: "Cozy bedroom",
    floor: "Fresh maple hardwood",
    wall: "Deep night blue",
    image: "https://images.unsplash.com/photo-1622429420441-60dd67f737a6?q=80&w=900&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "home-office",
    name: "Home office",
    floor: "Whitewashed oak",
    wall: "Warm sand",
    image: "https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?q=80&w=900&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "reading-nook",
    name: "Reading nook",
    floor: "Natural cork",
    wall: "Sage green",
    image: "https://images.unsplash.com/photo-1533327325824-76bc4e62d560?q=80&w=900&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
