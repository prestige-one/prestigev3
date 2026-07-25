

export interface MenuItem {
  id: number;
  title: string;
  link: string;
  pluseIncon?: boolean;
  megaMenu?: boolean;
  submenus?: Submenu[];
}

export interface Submenu {
  title?: string;
  link?: string;
  pluseIncon?: boolean;
  isThumb?: boolean;
  thumbSrc?: string;
  thumbAlt?: string;
  megaMenu?: MegaMenuItem[];
  submenus?: Submenu[];
  tag?: string;
  themeDefault?: string;
}

export interface MegaMenuItem {
  title: string;
  link: string;
  tag?: string;
  themeDefault?: string;
}