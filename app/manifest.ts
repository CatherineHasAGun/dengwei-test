import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "登味浓度测试",
    short_name: "登味测试",
    description: "测测你的表达方式是不是先退休了。",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF7E8",
    theme_color: "#FFF7E8",
    lang: "zh-CN",
    categories: ["entertainment", "lifestyle"],
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
