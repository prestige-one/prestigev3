

export interface MenuItem {
  id: number;
  title: string;
  link: string;
  pluseIncon?: boolean;
  megaMenu?: boolean;
  simpleListMenu?: boolean;
  listLabel?: string;
  viewAllLink?: string;
  viewAllLabel?: string;
  submenus?: Submenu[];
}

export interface Submenu {
  title?: string;
  link?: string;
  pluseIncon?: boolean;
  isThumb?: boolean;
  thumbSrc?: string;
  thumbAlt?: string;
  image?: string;
  megaMenu?: MegaMenuItem[];
  submenus?: Submenu[];
  tag?: string;
  themeDefault?: string;
  exploreLink?: string;
}

export interface MegaMenuItem {
  title: string;
  link: string;
  tag?: string;
  themeDefault?: string;
  image?: string;
  location?: string;
}