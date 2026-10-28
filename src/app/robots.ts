import type { MetadataRoute } from "next";
import { school } from "@/content/site";

// Selama mode pratinjau, mesin pencari dilarang mengindeks website.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", ...(school.isPreview ? { disallow: "/" } : { allow: "/" }) },
    sitemap: `${school.website}/sitemap.xml`,
  };
}
