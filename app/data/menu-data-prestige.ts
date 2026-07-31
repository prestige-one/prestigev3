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
    link: "/about",
    pluseIncon: true,
    submenus: [
      { title: "Our Story", link: "#" },
      { title: "Leadership", link: "#" },
      { title: "Vision & Values", link: "#" },
    ],
  },
  {
    id: 3,
    title: "Projects",
    link: "#",
    pluseIncon: true,
    submenus: [
      { title: "All Projects", link: "#" },
      { title: "Construction Updates", link: "#" },
    ],
  },
  {
    id: 4,
    title: "Destinations",
    link: "#",
    pluseIncon: true,
    submenus: [
      { title: "Dubai Islands", link: "#" },
      { title: "Palm Jumeirah", link: "#" },
      { title: "Jumeirah Village Circle", link: "#" },
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
