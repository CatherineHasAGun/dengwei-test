import type { MetadataRoute } from "next";
import { withBasePath } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "登味浓度测试",
    short_name: "登味测试",
    description: "测测你的表达方式是不是先退休了。",
    start_url: withBasePath("/"),
    display: "standalone",
    background_color: "#FFF7E8",
    theme_color: "#FFF7E8",
    lang: "zh-CN",
    categories: ["entertainment", "lifestyle"],
    icons: [
      {
        src: withBasePath("/icon.svg"),
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
