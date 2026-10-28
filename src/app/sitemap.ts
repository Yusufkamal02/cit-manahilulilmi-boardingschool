import type { MetadataRoute } from "next";
import { school } from "@/content/site";

// Website publik masih satu halaman; tambahkan alamat baru di sini bila ada halaman lain.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: school.website, changeFrequency: "weekly", priority: 1 }];
}
