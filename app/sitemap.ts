import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

// Single-page site: section anchors aren't separate URLs, so only the
// home page is listed.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
