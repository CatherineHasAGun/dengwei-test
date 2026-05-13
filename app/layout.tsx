import type { Metadata, Viewport } from "next";
import { RouteTracker } from "@/components/RouteTracker";
import { siteUrl, withBasePath } from "@/lib/site";
import "./globals.css";

const metadataBase = new URL(siteUrl);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "登味浓度测试",
    template: "%s | 登味浓度测试",
  },
  description:
    "用 3 分钟测测你的表达方式是不是先退休了，生成登味浓度分数、人格类型、五维雷达图和分享海报。",
  applicationName: "登味浓度测试",
  keywords: [
    "登味浓度测试",
    "你有多登",
    "人格测试",
    "心理测试",
    "社交测试",
    "小红书测试",
  ],
  authors: [{ name: "登味浓度测试" }],
  creator: "登味浓度测试",
  publisher: "登味浓度测试",
  alternates: {
    canonical: "/",
  },
  icons: {
    apple: withBasePath("/icon.svg"),
    icon: withBasePath("/icon.svg"),
  },
  manifest: withBasePath("/manifest.webmanifest"),
  openGraph: {
    title: "登味浓度测试",
    description: "测测你的表达方式是不是先退休了。",
    locale: "zh_CN",
    siteName: "登味浓度测试",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary",
    title: "登味浓度测试",
    description: "测测你的表达方式是不是先退休了。",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "登味浓度测试",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#FFF7E8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <RouteTracker />
        {children}
      </body>
    </html>
  );
}
