
export type MenuInnerItem = { link: string; title: string };

export type MenuSubItem = {
  link: string;
  title: string;
  has_inner_dropdown?: boolean;
  inner_submenu?: MenuInnerItem[];
};

export type MenuItem = {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  has_mega_menu?: boolean;
  mega_menu?: "projects" | "destinations";
  sub_menus?: MenuSubItem[];
};

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "About us",
    link: "/about-us",
    has_dropdown: true,
    sub_menus: [
      { link: "/about-us#our-story", title: "Our Story" },
      { link: "/about-us#vision-values", title: "Vision & Mission" },
      { link: "/about-us#leadership", title: "Our Leadership" },
      { link: "/about-us#milestones", title: "Our Milestones" },
    ],
  },
  {
    id: 3,
    title: "Projects",
    link: "/projects",
    has_dropdown: false,
    has_mega_menu: true,
    mega_menu: "projects",
  },
  {
    id: 4,
    title: "Destinations",
    link: "/our-destinations",
    has_dropdown: false,
    has_mega_menu: true,
    mega_menu: "destinations",
  },
  {
    id: 5,
    title: "Virtual Tour",
    link: "/virtual-tour",
    has_dropdown: false,
  },

]

export default menu_data
