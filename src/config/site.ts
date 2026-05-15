/**
 * Site Configuration
 *
 * Central configuration for site-wide settings.
 * This makes it easy to update branding, URLs, and metadata in one place.
 */

export const siteConfig = {
  name: "iTRAX LMS",
  description: "Enterprise Learning Management System",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/Mohamed-samy0/itrax-lms",
    docs: "#",
  },
  creator: {
    name: "Mohamed Samy",
    url: "https://github.com/Mohamed-samy0",
  },
} as const;

export type SiteConfig = typeof siteConfig;
