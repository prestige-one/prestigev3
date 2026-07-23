export type CompanyStatItem = {
  value?: string;
  label: string;
  iconClass?: string;
  logo?: string;
};

export const COMPANY_STATS: CompanyStatItem[] = [
  {
    value: "Since 1967",
    label: "Group Business Legacy",
    iconClass: "fa-regular fa-star",
  },
  {
    value: "Est. 2007",
    label: "In Dubai, UAE",
    iconClass: "fa-regular fa-building",
  },
  {
    value: "21+",
    label: "Destinations Worldwide",
    iconClass: "fa-regular fa-map",
  },
  {
    value: "32+",
    label: "Developing Projects",
    iconClass: "fa-regular fa-folder-open",
  },
  {
    value: "3500+",
    label: "Commercial and Residential Units",
    iconClass: "fa-regular fa-house",
  },
  {
    label: "AFA Sponsorship",
    logo: "/assets/images/v2/pages/AFA-logo-400.webp",
  },
];
