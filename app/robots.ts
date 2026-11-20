import { MetadataRoute } from "next";
import { COMPANY_CONTACT } from "@/data/products";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${COMPANY_CONTACT.siteUrl}/sitemap.xml`,
  };
}
