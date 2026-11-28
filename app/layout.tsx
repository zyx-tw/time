import type { Metadata } from "next"

import { cn } from "@/lib/utils"
import { attributeRootLayoutRequest } from "@/lib/otel/layout"
import "@/styles/globals.css"
import { BottomCorners, LegalLinks, TopCorners } from "@/components/corners"
import { fontVariables } from "@/lib/fonts"
import { NextPageDecode } from "@/components/page-decode-next"
import { TooltipProvider } from "@/components/ui/tooltip"

import { SITE_DESC, SITE_NAME, SITE_TITLE } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL("https://time.zyx.tw"),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESC,
  applicationName: SITE_NAME,
  authors: [{ name: "Loki", url: "https://zyx.tw" }],
  creator: "Loki",
  keywords: ["time", "clock", "zyx"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESC,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Client attribution for Sensorium — see @workspace/otel/layout for why
  // this has to run here (Node.js Server Component) and not middleware.
  await attributeRootLayoutRequest()

  return (
    <html lang="en" className={cn("antialiased", fontVariables, "font-sans")}>
      <body className="select-none">
        <NextPageDecode />
        <TooltipProvider>
          <TopCorners trail={[{ label: "TIME" }]} />
          {children}
          <BottomCorners links={<LegalLinks />} />
        </TooltipProvider>
      </body>
    </html>
  )
}
