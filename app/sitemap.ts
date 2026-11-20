import { MetadataRoute } from "next";
import { PRODUCTS, COMPANY_CONTACT } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_CONTACT.siteUrl;

  const staticRoutes = ["", "/about", "/products", "/industries", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  const productRoutes = PRODUCTS.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
