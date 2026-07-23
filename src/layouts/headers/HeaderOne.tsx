
"use client";
import OffCanvas from '@/common/OffCanvas';
import ProjectsMegaMenu from '@/components/layout/ProjectsMegaMenu';
import DestinationsMegaMenu from '@/components/layout/DestinationsMegaMenu';
import menu_data from '@/data/menu-data';
import useSticky from '@/hooks/use-sticky';
import Link from 'next/link';
import { useCallback, useEffect, useState, type MouseEvent } from "react";

type HeaderOneProps = {
  style_2?: boolean;
  /** Use when the first screen below the header is light (e.g. white hero). Keeps logo + nav dark at scroll top without changing global header behavior. */
  onLightSurface?: boolean;
};

const MOBILE_NAV_BREAKPOINT = 992;

const HeaderOne = ({ style_2, onLightSurface }: HeaderOneProps) => {
  const [theme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light-mode";
    }
    return "light-mode";
  });

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const { sticky } = useSticky()
  const [menuOpen, setMenuOpen] = useState(false);
  const [openCanvas, setOpenCavas] = useState(false)
  const [megaSuppressed, setMegaSuppressed] = useState(false);


  const [navTitle, setNavTitle] = useState("");
	const openMobileMenu = (menu: string) => {
		if (navTitle === menu) {
			setNavTitle("");
		} else {
			setNavTitle(menu);
		}
	};

  const [navTitle2, setNavTitle2] = useState("");
	const openMobileMenu2 = (menu: string) => {
		if (navTitle2 === menu) {
			setNavTitle2("");
		} else {
			setNavTitle2(menu);
		}
	};

  const closeMenus = useCallback(() => {
    setNavTitle("");
    setNavTitle2("");
    setMenuOpen(false);
    setMegaSuppressed(true);
    if (typeof document !== "undefined") {
      const active = document.activeElement as HTMLElement | null;
      active?.blur();
    }
  }, []);

  const handleNavLinkClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, title: string, hasMegaMenu: boolean) => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < MOBILE_NAV_BREAKPOINT && hasMegaMenu) {
        event.preventDefault();
        openMobileMenu(title);
      }
    },
    [],
  );

  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>(".header-area");
    if (!header) return;

    const syncHeaderHeight = () => {
      root.style.setProperty("--po-header-height", `${header.offsetHeight}px`);
    };

    syncHeaderHeight();
    window.addEventListener("resize", syncHeaderHeight);

    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(header);

    return () => {
      window.removeEventListener("resize", syncHeaderHeight);
      observer.disconnect();
    };
  }, [sticky, menuOpen, navTitle]);


  return (
    <>
      <header
        className={`header-area ${sticky ? "sticky-on" : ""} ${onLightSurface ? "header-on-light-surface" : ""} ${menuOpen ? "mobile-menu-open" : ""}`}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container">

            <Link className="navbar-brand" href="/">
              <img className="dark-logo" src="/assets/images/v2/pages/prestigeone_logo_oneline_dark-hr.svg" alt="Prestige One Developments" />
              <img className="light-logo" src="/assets/images/v2/pages/prestigeone_logo_oneline_white-hr.svg" alt="Prestige One Developments" />
            </Link>


            <button onClick={() => setMenuOpen(!menuOpen)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#vorixNav"
              aria-controls="vorixNav" aria-expanded="false" aria-label="Open menu">
              <span className="material-symbols-outlined" aria-hidden="true">view_cozy</span>
            </button>


            <div className={`collapse navbar-collapse align-items-lg-center ${menuOpen ? 'show' : ''}`} id="vorixNav">
              <ul className="navbar-nav navbar-nav-scroll mx-lg-auto">
                {menu_data.map((item, i) => (
                  <li
                    key={i}
                    className={`vorix-dd${item.has_mega_menu ? " po-nav-mega-item" : ""}${item.has_mega_menu && navTitle === item.title ? " is-open" : ""}${item.has_mega_menu && megaSuppressed ? " po-mega-suppressed" : ""}`}
                    onMouseEnter={() => {
                      if (item.has_mega_menu && megaSuppressed) {
                        setMegaSuppressed(false);
                      }
                    }}
                    onMouseLeave={() => {
                      if (typeof window !== "undefined" && window.innerWidth >= MOBILE_NAV_BREAKPOINT && item.has_mega_menu) {
                        setNavTitle("");
                        setMegaSuppressed(false);
                      }
                    }}
                  >
                    <Link
                      href={item.link}
                      onMouseEnter={() => setNavTitle(item.title)}
                      onClick={(event) => {
                        handleNavLinkClick(event, item.title, Boolean(item.has_mega_menu));
                        if (!item.has_mega_menu) {
                          openMobileMenu(item.title);
                        }
                      }}
                    >
                      {item.title}
                      {(item.has_mega_menu || item.has_dropdown) && (
                        <i className="fa-solid fa-chevron-down po-nav-mega-caret" aria-hidden="true" />
                      )}
                    </Link>
                    {item.has_mega_menu ? (
                      item.mega_menu === "projects" ? (
                        <ProjectsMegaMenu onNavigate={closeMenus} />
                      ) : (
                        <DestinationsMegaMenu onNavigate={closeMenus} />
                      )
                    ) : null}
                    {item.has_dropdown &&
                      <ul className="vorix-dd-menu" style={{ display: navTitle === item.title ? 'block' : 'none' }}>
                        {(item.sub_menus ?? []).map((sub_menu, index) => (
                          <li key={index} className="vorix-dd">
                            <Link href={sub_menu.link} 
                            onClick={() => openMobileMenu2(sub_menu.title)}
                            onMouseEnter={() =>  setNavTitle2(sub_menu.title)}
                            >{sub_menu.title}</Link>

                            {(() => {
                              const sm = sub_menu as {
                                has_inner_dropdown?: boolean;
                                inner_submenu?: { link: string; title: string }[];
                              };
                              if (!sm.has_inner_dropdown || !sm.inner_submenu?.length) return null;
                              return (
                                <ul
                                  className="vorix-dd-menu"
                                  style={{ display: navTitle2 === sub_menu.title ? "block" : "none" }}
                                >
                                  {sm.inner_submenu.map((inner_menu, inner_index) => (
                                    <li key={inner_index}>
                                      <Link href={inner_menu.link}>{inner_menu.title}</Link>
                                    </li>
                                  ))}
                                </ul>
                              );
                            })()}
                          </li>
                        ))}
                      </ul>
                    }
                  </li>
                ))}

              </ul>

              <div className="d-flex align-items-center ms-lg-auto">
                {style_2 ?
                <div className="mb-3 mb-lg-0" id="sideMenuButton">
                <a 
                onClick={() => setOpenCavas(!openCanvas)}
                className="btn btn-primary sideMenuButton" data-bs-toggle="offcanvas" href="#menu"
                  role="button" aria-controls="menu">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none">
                      <path d="M3 12H21" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 6H21" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 18H21" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none">
                      <path d="M3 12H21" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 6H21" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 18H21" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </a>
              </div>
              :

              <a
                onClick={() => setOpenCavas(!openCanvas)}
                className="btn btn-primary"
                data-bs-toggle="offcanvas"
                href="#menu"
                role="button"
                aria-controls="menu"
              >
                <span>GET IN TOUCH</span><span>GET IN TOUCH</span>
              </a>

              }

              </div>
            </div>
          </div>
        </nav>
      </header>
      <OffCanvas setOpenCavas={setOpenCavas} openCanvas={openCanvas} />
    </>
  );
};

export default HeaderOne;
