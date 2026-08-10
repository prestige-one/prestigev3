export interface ProjectDocumentHub {
  slug: string;
  pageTitle: string;
  listTitle: string;
  thumbnail: string;
  pdfHref: string;
}

const V2 = "/assets/images/v2/project-featured-images";

export const projectDocumentHubs: ProjectDocumentHub[] = [
  { slug: "fauchon-residences-spa-tcs", pageTitle: "FAUCHON Résidences SPA T&Cs", listTitle: "FAUCHON Résidences Project Documents", thumbnail: `${V2}/fauchon/fauchon-banner.webp`, pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/07/14093420/Interim-Disclosure-Statement_Prestige-Gardens-FAUCHON-Residences.pdf" },
  { slug: "hilton-residences-dubai-maritime-city-spa-tcs", pageTitle: "Hilton Residences Dubai Maritime City SPA T&Cs", listTitle: "Hilton Project Documents", thumbnail: `${V2}/hilton/HILTON-NIGHT-VIEW-1.webp`, pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/03/14145140/Interim-Disclosure-Statement_Prestige-One-Residences.pdf" },
  { slug: "the-sanctuary-by-prestige-one-spa-tcs", pageTitle: "Sanctuary SPA T&Cs", listTitle: "Sanctuary Project Documents", thumbnail: `${V2}/sanctuary/sanctuary-residential-exterior-view.webp`, pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2026/04/29105942/Sanctuary-by-Prestige-One_Interim-Disclosure-Statement.pdf" },
  { slug: "vista-spa-tcs", pageTitle: "Vista SPA T&Cs", listTitle: "Vista Project Documents", thumbnail: `${V2}/vista/vista.webp`, pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24111926/Vista-By-Prestige-One-Interim-Disclosure-Statement.pdf" },
  { slug: "the-residence-spa-tcs", pageTitle: "The Residence SPA T&Cs", listTitle: "The Residence Project Documents", thumbnail: `${V2}/residence/THE-RESIDENCE.webp`, pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24111931/The-Residence-By-Prestige-One-Interim-Disclosure-Statement.pdf" },
  { slug: "seaside-spa-tcs", pageTitle: "Seaside SPA T&Cs", listTitle: "Seaside Project Documents", thumbnail: `${V2}/seaside/seaside-featured-image.webp`, pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/09/24111930/Seaside-By-Prestige-One-Interim-Disclosure-Statement-_31-July-2024-1.pdf" },
  { slug: "golf-residences-spa-tcs", pageTitle: "Golf Residences by Prestige One SPA T&Cs", listTitle: "Golf Residences by Prestige One Project Documents", thumbnail: `${V2}/golf/The-Place-Banner.webp`, pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/08/06124325/The-Place-By-Prestige-One-Interim-Disclosure-Statement-_06.08.2025.pdf" },
  { slug: "the-waterway-spa-tcs", pageTitle: "The Waterway SPA T&Cs", listTitle: "The Waterway Project Documents", thumbnail: `${V2}/waterway/Waterway-pic-2.webp`, pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/10/22122031/Waterway-by-Prestige-One-Interim-Disclosure-Statement.pdf" },
  { slug: "parkway-spa-tcs", pageTitle: "Parkway SPA T&Cs", listTitle: "Parkway Project Documents", thumbnail: `${V2}/parkway/parkway.webp`, pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2024/11/08115546/Parkway-by-Prestige-One-Interim-Disclosure-Statement.pdf" },
  { slug: "the-one-spa-tcs", pageTitle: "The One SPA T&Cs", listTitle: "The One Project Documents", thumbnail: `${V2}/one/the-one.webp`, pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/03/21122742/Developer-Interim-Disclosure-Statement__The-One.pdf" },
  { slug: "the-boulevard-spa-tcs", pageTitle: "The Boulevard SPA T&Cs", listTitle: "The Boulevard Project Documents", thumbnail: `${V2}/boulevard/boulevard.webp`, pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/08/06124323/The-Boulevard-Interim-Disclosure-Statement_06.08.2025.pdf" },
  { slug: "coastal-haven-spa-tcs", pageTitle: "Coastal Haven SPA T&Cs", listTitle: "Coastal Haven Project Documents", thumbnail: `${V2}/coastal-haven/Coastal-Haven.webp`, pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/15160729/Coastal-Haven-by-Prestige-Harbour-Interim-Disclosure-Statement_14.02.2025.pdf" },
  { slug: "luxury-canal-spa-tcs", pageTitle: "Luxury Canal SPA T&Cs", listTitle: "Luxury Canal Project Documents", thumbnail: `${V2}/luxury-canal/luxury-canal.webp`, pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/02/24153508/Luxury-Canal-Residences_Interim-Disclosure-Statement_24.02.2025_.pdf" },
  { slug: "berkeley-square-spa-tcs", pageTitle: "Berkeley Square SPA T&Cs", listTitle: "Berkeley Square Project Documents", thumbnail: `${V2}/berkeley/Berkeley-Square-North.webp`, pdfHref: "https://s3.me-central-1.amazonaws.com/files.prestigeone.ae/wp-content/uploads/2025/08/06124319/Berkeley-Square-by-Prestige-One-Interim-Disclosure-Statement-_06.08.2025.pdf" },
];

export function getProjectDocumentHub(slug: string): ProjectDocumentHub | undefined {
  return projectDocumentHubs.find((hub) => hub.slug === slug);
}
