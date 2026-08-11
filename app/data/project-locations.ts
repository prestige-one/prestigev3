/**
 * Editable project-location catalogue.
 *
 * To move a marker, edit `coordinates.lat` and `coordinates.lng` below.
 * The other visible content, Google Maps link, project page and image can be
 * maintained here without changing the location explorer component.
 */
export interface ProjectLocation {
  id: string;
  name: string;
  location: string;
  type: "Residential" | "Commercial";
  status: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  mapsUrl: string;
  detailsUrl: string;
  image: string;
  summary: string;
}

export const PROJECT_LOCATIONS: ProjectLocation[] = [
  {
    id: "vista",
    name: "Vista by Prestige One",
    location: "Dubai Sports City",
    type: "Residential",
    status: "Completed",
    coordinates: { lat: 25.040118, lng: 55.21662 },
    mapsUrl: "https://maps.app.goo.gl/9dvns7VZHggGaC676",
    detailsUrl: "/projects/vista-by-prestige-one",
    image: "/assets/project-featured-images/sliders/vista.webp",
    summary: "Contemporary residences designed around panoramic views in Dubai Sports City.",
  },
  {
    id: "golf-residences",
    name: "Golf Residences by Prestige One",
    location: "Dubai Sports City",
    type: "Residential",
    status: "Completed",
    coordinates: { lat: 25.0371028, lng: 55.2213451 },
    mapsUrl: "https://maps.app.goo.gl/KfBsXnRTkqYV1aXD9",
    detailsUrl: "/projects/golf-residences-by-prestige-one",
    image: "/assets/project-featured-images/sliders/golf-1.webp",
    summary: "An active family address with uninterrupted golf-course views.",
  },
  {
    id: "the-boulevard",
    name: "The Boulevard by Prestige One",
    location: "Dubai Land Residence Complex",
    type: "Residential",
    status: "Completed",
    coordinates: { lat: 25.0926875, lng: 55.3820625 },
    mapsUrl: "https://maps.app.goo.gl/1ypg7XEn9LVx8HgAA",
    detailsUrl: "/projects/the-boulevard-by-prestige-one",
    image: "/assets/project-featured-images/sliders/boulevard.webp",
    summary: "Bold urban living at the centre of Dubai Land Residence Complex.",
  },
  {
    id: "the-residence",
    name: "The Residence by Prestige One",
    location: "Jumeirah Village Circle",
    type: "Residential",
    status: "Completed",
    coordinates: { lat: 25.0523125, lng: 55.2168125 },
    mapsUrl: "https://maps.app.goo.gl/sX7cEzwqtuwmumCo9",
    detailsUrl: "/projects/the-residence-by-prestige-one",
    image: "/assets/project-featured-images/sliders/residence.webp",
    summary: "Boutique low-rise living shaped by thoughtful, contemporary design.",
  },
  {
    id: "berkeley-square",
    name: "Berkeley Square by Prestige One",
    location: "Jumeirah Village Circle",
    type: "Residential",
    status: "Completed",
    coordinates: { lat: 25.0493582, lng: 55.2093418 },
    mapsUrl: "https://maps.app.goo.gl/dXvE8i6dBTfh6w7h9",
    detailsUrl: "/projects/berkeley-square-north",
    image: "/assets/project-featured-images/sliders/berkeley-north.webp",
    summary: "A refined JVC address inspired by London's timeless architecture.",
  },
  {
    id: "coastal-haven",
    name: "Coastal Haven by Prestige Harbour",
    location: "Dubai Islands",
    type: "Residential",
    status: "Completed",
    coordinates: { lat: 25.2904375, lng: 55.3080625 },
    mapsUrl: "https://maps.app.goo.gl/gyXRBsUvFLyqzTPQ8",
    detailsUrl: "/projects/coastal-haven-by-prestige-one",
    image: "/assets/project-featured-images/sliders/coastal-heaven.webp",
    summary: "A refined waterfront address with open views across Dubai Islands.",
  },
  {
    id: "the-one",
    name: "The One by Prestige One",
    location: "Barsha Heights",
    type: "Commercial",
    status: "Completed",
    coordinates: { lat: 25.0988033, lng: 55.176097 },
    mapsUrl: "https://maps.app.goo.gl/aga8BFn2cBnzQGDG9",
    detailsUrl: "/projects/the-one-by-prestige-one",
    image: "/assets/project-featured-images/sliders/the-one-1.webp",
    summary: "A distinctive commercial destination for modern businesses and visionaries.",
  },
  {
    id: "seaside",
    name: "Seaside by Prestige One",
    location: "Dubai Islands",
    type: "Residential",
    status: "Completed",
    coordinates: { lat: 25.2922382, lng: 55.302234 },
    mapsUrl: "https://maps.app.goo.gl/CeGCBCtP5FHBXPj59",
    detailsUrl: "/projects/seaside-by-prestige-one",
    image: "/assets/project-featured-images/sliders/seaside.webp",
    summary: "A peaceful waterfront retreat designed around the rhythm of the sea.",
  },
  {
    id: "the-waterway",
    name: "The Waterway by Prestige One",
    location: "Meydan Horizon",
    type: "Residential",
    status: "Completed",
    coordinates: { lat: 25.1816875, lng: 55.3278125 },
    mapsUrl: "https://maps.app.goo.gl/s3Dq8RGneYmXgmta9",
    detailsUrl: "/projects/the-waterway-by-prestige-one",
    image: "/assets/project-featured-images/sliders/waterway.webp",
    summary: "Serene residences inspired by the water in Meydan Horizon.",
  },
];

export const PROJECT_LOCATIONS_MAP = {
  styleUrl: "https://tiles.openfreemap.org/styles/dark",
  center: [55.262, 25.142] as [number, number],
  defaultZoom: 10.2,
  selectedZoom: 14.2,
};
