// Define menu data
interface MenuItem {
    title: string;
    href: string;
    subItems?: MenuItem[];
    static?:boolean
};

const menuDataTwo: MenuItem[] = [
    {
        title: "Home",
        href: "#",
        static:true,
        subItems: [
            { title: "Modern Agency", href: "/" },
            { title: "Digital Marketing", href: "/digital-marketing" },
            { title: "Design Agency", href: "/design-agency" },
            { title: "Unique AI Images", href: "/unique-ai-image" },
            { title: "Corporate Agency", href: "/corporate-agency" },
            { title: "Mobile Application", href: "/mobile-application" },
            { title: "IT Solutions", href: "/it-solution" },
            { title: "Cryptocurrency", href: "/cryptocurrency" },
        ],
    },
    {
        title: "Pages",
        href: "#",
        static:true,
        subItems: [
            { title: "About Me", href: "/about-me" },
            { title: "About Us", href: "/about-us" },
            { title: "Services", href: "/service-1" },
            { title: "Service Details", href: "/service-details-2" },
            { title: "Carrer", href: "/career" },
            { title: "Carrer Details", href: "/career-details" },
            { title: "Team", href: "/team" },
            { title: "Team Details", href: "/team-details" },
            { title: "Pricing", href: "/pricing" },
            { title: "Faq's", href: "/faq" },
        ],
    },
    {
        title: "Projects",
        href: "#",
        static:true,
        subItems: [
            { title: "Webgl Showcase", href: "/portfolio-webgl-showcase" },
            { title: "Coverflow Slider", href: "/portfolio-coverflow-slider" },
            { title: "Creative Thumb Slider", href: "/portfolio-creative-thumb-slider" },
            { title: "Creative Skew Slider", href: "/portfolio-creative-skew-slider" },
            { title: "Creative Text Slider", href: "/portfolio-creative-text-slider" },
            { title: "Parallax Slider", href: "/portfolio-parallax-slider" },
            { title: "Paspective Showcase", href: "/portfolio-perspective-slider" },
        ],
    },
    {
        title: "Blog",
        href: "#",
        static:false,
        subItems: [
            { title: "Blog Grid", href: "/blog-grid" },
            { title: "Blog Classic", href: "/blog-standard" },
            { title: "Blog Listing", href: "/blog-list" },
            { title: "Masonry", href: "/blog-masonry" },
            { title: "Blog Single Post", href: "/blog-details" },
        ],
    },
    {
        title: "Shop",
        href: "#",
        static:false,
        subItems: [
            { title: "Shop Modern", href: "/shop-modern" },
            { title: "Shop Details", href: "/shop-details" },
            { title: "My Account", href: "/my-account" },
            { title: "Cart", href: "/cart" },
            { title: "Checkout", href: "/checkout" },
            { title: "Wishlist", href: "/wishlist" },
            { title: "LogIn", href: "/login" },
        ],
    },
    {
        title: "Contact",
        href: "#",
        static:false,
        subItems: [
            { title: "Contact Me", href: "/contact-me" },
            { title: "Contact Us", href: "/contact-us" },
            { title: "Get In Touch", href: "/contact" },
        ],
    },
];

export default menuDataTwo;