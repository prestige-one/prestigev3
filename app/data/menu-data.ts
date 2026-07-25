

const menu_data = [
  {
    id: 1,
    hasDropdown: true,
    active: true,
    megaMenu: true,
    children: true,
    title: "Demo",
    pluseIncon: true,
    link: "#",
    submenus: [
      {
        title: "Home Light Version",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Modern Agency", link: "/", tag: "Popular", },
          { title: "Design Studio", link: "/design-studio" },
          { title: "Digital Marketing", link: "/digital-marketing", tag: "Trending"},
          { title: "Creative Studio", link: "/creative-studio" },
          { title: "Design Agency", link: "/design-agency" },
          { title: "Creative Agency", link: "/creative-agency" },
          { title: "Architecture Hub", link: "/architecture-hub", tag: "Hot"},
          { title: "AI Image Generator", link: "/unique-ai-image" }
        ]
      },
      {
        title: "Home Dark Version",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Modern Agency", link: "/dark/modern-agency" },
          { title: "Design Studio", link: "/dark/design-studio", tag: "Hot" },
          { title: "Digital Marketing", link: "/dark/digital-marketing" },
          { title: "Creative Studio", link: "/dark/creative-studio" },
          { title: "Design Agency", link: "/dark/design-agency", tag: "Hot" },
          { title: "Creative Agency", link: "/dark/creative-agency", tag: "Popular" },
          { title: "Architecture Hub", link: "/dark/architecture-hub" },
          { title: "AI Image Generator", link: "/dark/unique-ai-image", tag: "Hot" }
        ]
      },
      {
        title: "Home Light Version",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Corporate Agency", link: "/corporate-agency" },
          { title: "Mobile App", link: "/mobile-application", tag: "Popular" },
          { title: "IT Solutions", link: "/it-solution", tag: "Hot"},
          { title: "Cryptocurrency", link: "/cryptocurrency" },
          { title: "Startup Agency", link: "/startup-agency",tag: "Popular"},
          { title: "Fashion Studio", link: "/fashion-studio" },
          { title: "Personal Portfolio", link: "/personal-portfolio" },
          { title: "Shop Home", link: "/shop-modern", tag: "Hot",}
        ]
      },
      {
        title: "Home Dark Version",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Corporate Agency", link: "/dark/corporate-agency", tag: "Hot" },
          { title: "Mobile App", link: "/dark/mobile-application"},
          { title: "IT Solutions", link: "/dark/it-solution" },
          { title: "Cryptocurrency", link: "/dark/cryptocurrency", tag: "Trending" },
          { title: "Startup Agency", link: "/dark/startup-agency" },
          { title: "Fashion Studio", link: "/dark/fashion-studio", tag: "Popular" },
          { title: "Personal Portfolio", link: "/dark/personal-portfolio" },
          { title: "Shop Home", link: "/dark/shop-modern" }
        ]
      },
      {
        title: "Showcases",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Webgl Showcase", link: "/portfolio-webgl-showcase", tag: "Hot" },
          { title: "Coverflow Slider", link: "/portfolio-coverflow-slider" },
          { title: "Creative Thumb Slider", link: "/portfolio-creative-thumb-slider", tag: "Hot" },
          { title: "Creative Skew Slider", link: "/portfolio-creative-skew-slider", tag: "Hot" },
          { title: "Creative Text Slider", link: "/portfolio-creative-text-slider" },
          { title: "Parallax Slider", link: "/portfolio-parallax-slider" },
          { title: "Perspective Showcase", link: "/portfolio-perspective-slider", tag: "Hot" },
          { title: "Horizontal Showcase", link: "/portfolio-horizontal-showcase" }
        ]
      },
      {
        title: "Showcases",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Wrapper Slider", link: "/portfolio-wrapper-slider", tag: "Hot" },
          { title: "Portfolio slicer", link: "/portfolio-slicer", tag: "Hot" },
          { title: "Portfolio Showcase", link: "/portfolio-showcase" },
          { title: "Brand Showcase", link: "/brand-showcase" },
          { title: "Interactive with hover", link: "/portfolio-interactive-with-hover", tag: "Hot" },
          { title: "Interactive with Scroll", link: "/portfolio-interactive-with-scroll" },
          { title: "Slider Elegant", link: "/portfolio-slider-elegant" }
        ]
      }
    ]
  },
  {
    id: 2,
    hasDropdown: true,
    active: true,
    megaMenu: true,
    children: true,
    title: "Pages",
    pluseIncon: true,
    link: "#",
    submenus: [
      {
        title: "About Light Version",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "About Me", link: "/about-me" },
          { title: "About Us", link: "/about-us" },
          { title: "Modern About", link: "/about-modern" },
          { title: "Creative About", link: "/about-creative" },
          { title: "Startup About", link: "/about-startup" },
          { title: "Career", link: "/career" }
        ]
      },
      {
        title: "About Dark Version",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "About Me", link: "/dark/about-me" },
          { title: "About Us", link: "/dark/about-us" },
          { title: "Modern About", link: "/dark/about-modern" },
          { title: "Creative About", link: "/dark/about-creative" },
          { title: "Startup About", link: "/dark/about-startup" },
          { title: "Career", link: "/dark/career" }
        ]
      },
      {
        title: "Services Light Version",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Services", link: "/service-1" },
          { title: "Corporate Services", link: "/service-2" },
          { title: "Startup Services", link: "/service-3" },
          { title: "Modern Services", link: "/service-4" },
          { title: "Services Details", link: "/service-details" },
          { title: "Services Details 02", link: "/service-details-2" }
        ]
      },
      {
        title: "Services Dark Version",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Services", link: "/dark/service-1" },
          { title: "Corporate Services", link: "/dark/service-2" },
          { title: "Startup Services", link: "/dark/service-3" },
          { title: "Modern Services", link: "/dark/service-4" },
          { title: "Services Details", link: "/dark/service-details" },
          { title: "Services Details 02", link: "/dark/service-details-2" }
        ]
      },
      {
        title: "Special Pages Light",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Careers Details", link: "/career-details" },
          { title: "Pricing", link: "/pricing" },
          { title: "Team", link: "/team" },
          { title: "Team Details", link: "/team-details" },
          { title: "FAQ's", link: "/faq" },
          { title: "404 Page", link: "/error" }
        ]
      },
      {
        title: "Special Pages Dark",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Careers Details", link: "/dark/career-details" },
          { title: "Pricing", link: "/dark/pricing" },
          { title: "Team", link: "/dark/team" },
          { title: "Team Details", link: "/dark/team-details" },
          { title: "FAQ's", link: "/dark/faq" },
          { title: "404 Page", link: "/dark/error" }
        ]
      }
    ]
  },
  {
    id: 3,
    hasDropdown: true,
    active: true,
    megaMenu: true,
    children: true,
    title: "Projects",
    pluseIncon: true,
    projectMenu: true,
    link: "#",
    submenus: [
      {
        title: "Portfolio Grid",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Two Columns", link: "/portfolio-col-2" },
          { title: "Three Columns", link: "/portfolio-col-3" },
          { title: "Four Columns Wide", link: "/portfolio-col-4" },
          { title: "Masonry", link: "/portfolio-masonry" },
          { title: "Portfolio Metro", link: "/portfolio-metro" },
          { title: "Portfolio Pinterest", link: "/portfolio-pinterest" },
          { title: "Horizontal Showcase", link: "/portfolio-horizontal-showcase" }
        ]
      },
      {
        title: "Showcases",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Webgl Showcase", link: "/portfolio-webgl-showcase" },
          { title: "Coverflow Slider", link: "/portfolio-coverflow-slider" },
          { title: "Creative Thumb Slider", link: "/portfolio-creative-thumb-slider" },
          { title: "Creative Skew Slider", link: "/portfolio-creative-skew-slider" },
          { title: "Creative Text Slider", link: "/portfolio-creative-text-slider" },
          { title: "Parallax Slider", link: "/portfolio-parallax-slider" },
          { title: "Perspective Showcase", link: "/portfolio-perspective-slider" }
        ]
      },
      {
        title: "Showcases",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Wrapper Slider", link: "/portfolio-wrapper-slider" },
          { title: "Portfolio slicer", link: "/portfolio-slicer" },
          { title: "Portfolio Showcase", link: "/portfolio-showcase" },
          { title: "Brand Showcase", link: "/brand-showcase" },
          { title: "Interactive with hover", link: "/portfolio-interactive-with-hover" },
          { title: "Interactive with Scroll", link: "/portfolio-interactive-with-scroll" },
          { title: "Slider Elegant", link: "/portfolio-slider-elegant" }
        ]
      },
      {
        title: "Single Projects",
        link: "#",
        pluseIncon: true,
        megaMenu: [
          { title: "Classic Stack", link: "/portfolio-details-classic-stack" },
          { title: "Creative Slider", link: "/portfolio-details-creative-slider" },
          { title: "Gallery", link: "/portfolio-details-gallery" },
          { title: "Modern", link: "/portfolio-details-modern" },
          { title: "Video", link: "/portfolio-details-video" },
          { title: "Image Comparison", link: "/portfolio-details-image-comparison" },
          { title: "Custom Light", link: "/dark/portfolio-details-custom" }
        ]
      },
      {
        title: "Mega Menu Thumb",
        link: "#",
        pluseIncon: true,
        isThumb: true,
        thumbSrc: '/img/menu/menu-1.png',
        thumbAlt: "Portfolio showcase"
      }
    ]
  },
  {
    id: 4,
    hasDropdown: true,
    active: true,
    megaMenu: false,
    children: true,
    title: "Blog",
    pluseIncon: true,
    link: "#",
    submenus: [
      {
        title: "Blog Classic",
        link: "/dark/blog-standard",
        pluseIncon: false
      },
      {
        title: "Blog Classic Light",
        link: "/blog-standard",
        pluseIncon: false
      },
      {
        title: "Blog Listing",
        link: "/dark/blog-list",
        pluseIncon: false
      },
      {
        title: "Blog Listing Light",
        link: "/blog-list",
        pluseIncon: false
      },
      {
        title: "Grid Layout",
        link: "/blog-grid",
        pluseIncon: true,
        submenus: [
          { title: "2 Columns", link: "/dark/blog-grid-2-col" },
          { title: "2 Columns Light", link: "/blog-grid-2-col" },
          { title: "3 Columns", link: "/dark/blog-grid" },
          { title: "3 Columns Light", link: "/blog-grid" },
          { title: "2 Col + sidebar", link: "/dark/blog-grid-with-sidebar" },
          { title: "2 Col + sidebar Light", link: "/blog-grid-with-sidebar" }
        ]
      },
      {
        title: "Masonry Grid",
        link: "/dark/blog-masonry",
        pluseIncon: false
      },
      {
        title: "Masonry Grid Light",
        link: "/blog-masonry",
        pluseIncon: false
      },
      {
        title: "Single Layouts",
        link: "/blog-details-without-sidebar",
        pluseIncon: true,
        submenus: [
          { title: "Blog Single Post", link: "/dark/blog-details" },
          { title: "Blog Single Post Light", link: "/blog-details" },
          { title: "Blog No Sidebar", link: "/dark/blog-details-without-sidebar" },
          { title: "Blog No Sidebar Light", link: "/blog-details-without-sidebar" }
        ]
      }
    ]
  },
  {
    id: 5,
    hasDropdown: true,
    active: true,
    megaMenu: false,
    children: true,
    title: "Shop",
    pluseIncon: true,
    link: "/shop-modern",
    submenus: [
      {
        title: "Shop Modern",
        link: "/shop-modern",
        pluseIncon: false
      },
      {
        title: "Shop Modern Dark",
        link: "/dark/shop-modern",
        pluseIncon: false
      },
      {
        title: "Shop With Slider",
        link: "/shop-with-slider",
        pluseIncon: false
      },
      {
        title: "Shop With Slider Dark",
        link: "/dark/shop-with-slider",
        pluseIncon: false
      },
      {
        title: "Shop Page",
        link: "#",
        pluseIncon: true,
        submenus: [
          { title: "Shop Page", link: "/shop" },
          { title: "Shop Page Dark", link: "/dark/shop" },
          { title: "Shop Details", link: "/shop-details" },
          { title: "Shop Details Dark", link: "/dark/shop-details" }
        ]
      },
      {
        title: "My Account",
        link: "#",
        pluseIncon: true,
        submenus: [
          { title: "My Account", link: "/my-account" },
          { title: "Cart", link: "/cart" },
          { title: "Checkout", link: "/checkout" },
          { title: "Wishlist", link: "/wishlist" },
          { title: "LogIn", link: "/login" },
          { title: "Register", link: "/register" }
        ]
      }
    ]
  },
   {
    id: 6,
    hasDropdown: true,
    active: true,
    megaMenu: false, 
    children: true,
    title: "Contact",
    pluseIncon: true,
    link: "/contact",
    submenus: [
      {
        title: "Contact Me",
        link: "/contact-me",
        pluseIncon: false
      },
      {
        title: "Contact Me Dark",
        link: "/dark/contact-me",
        pluseIncon: false
      },
      {
        title: "Contact Us",
        link: "/contact-us",
        pluseIncon: false
      },
      {
        title: "Contact Us Dark",
        link: "/dark/contact-us",
        pluseIncon: false
      },
      {
        title: "Get In Touch",
        link: "/contact",
        pluseIncon: false
      },
      {
        title: "Get In Touch Dark",
        link: "/dark/contact",
        pluseIncon: false
      },
    ]
  }
];


export default menu_data;

