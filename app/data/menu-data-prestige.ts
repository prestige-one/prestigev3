const menu_data_prestige = [
  {
    id: 1,
    title: "Home",
    link: "/",
    pluseIncon: false,
  },
  {
    id: 2,
    title: "About Us",
    link: "/about-us",
    pluseIncon: true,
    submenus: [
      { title: "Our Story", link: "/about-us#our-story" },
      { title: "Founder’s Vision", link: "/about-us#founders-vision" },
      { title: "Our Leadership", link: "/about-us#our-leadership" },
      { title: "Our Milestones", link: "/about-us#our-milestones" },
    ],
  },
  {
    id: 3,
    title: "Projects",
    link: "#",
    pluseIncon: true,
    simpleListMenu: true,
    listLabel: "Featured Projects",
    viewAllLink: "#",
    viewAllLabel: "View All Projects",
    submenus: [
      { title: "FAUCHON Résidences", link: "#", image: "/assets/project-featured-images/sliders/fauchon.webp" },
      { title: "Hilton Residences Dubai Maritime City", link: "#", image: "/assets/project-featured-images/sliders/hilton-1.webp" },
      { title: "Sanctuary Residences", link: "#", image: "/assets/project-featured-images/sliders/sanctuary.webp" },
      { title: "Golf Residences", link: "#", image: "/assets/project-featured-images/sliders/golf-1.webp" },
      { title: "Seaside by Prestige One", link: "#", image: "/assets/project-featured-images/sliders/seaside.webp" },
      { title: "Vista by Prestige One", link: "#", image: "/assets/project-featured-images/sliders/vista.webp" },
    ],
  },
  {
    id: 4,
    title: "Destinations",
    link: "#",
    pluseIncon: true,
    simpleListMenu: true,
    listLabel: "Popular Destinations",
    viewAllLink: "#",
    viewAllLabel: "View All Destinations",
    submenus: [
      { title: "Palm Jumeirah", link: "#", image: "/assets/project-featured-images/sliders/luxe-villa.webp" },
      { title: "Jumeirah Village Circle", link: "#", image: "/assets/project-featured-images/sliders/berkeley-north.webp" },
      { title: "Dubai Sports City", link: "#", image: "/assets/project-featured-images/sliders/golf-1.webp" },
      { title: "Dubai Islands", link: "#", image: "/assets/project-featured-images/sliders/coastal-heaven.webp" },
      { title: "Dubai Maritime City", link: "#", image: "/assets/project-featured-images/sliders/hilton-1.webp" },
      { title: "Meydan Horizon", link: "#", image: "/assets/project-featured-images/sliders/parkway.webp" },
    ],
  },
  {
    id: 5,
    title: "Virtual Tour",
    link: "#",
    pluseIncon: false,
  },
];

export default menu_data_prestige;
