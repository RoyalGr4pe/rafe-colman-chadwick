import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import { FilmGrain } from "@/components/motifs/FilmGrain";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "@/styles/globals.css";

const inter = Inter({
    variable: "--font-body-family",
    subsets: ["latin"],
    display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
    variable: "--font-meta-family",
    weight: ["400", "500", "600"],
    subsets: ["latin"],
    display: "swap",
});

const sourceSerif = Source_Serif_4({
    variable: "--font-display-family",
    subsets: ["latin"],
    display: "swap",
});

// When Canela / Noe Display font files are available, replace sourceSerif above with:
// import localFont from "next/font/local";
// const canela = localFont({
//   src: "../fonts/Canela-Regular.woff2",
//   variable: "--font-display-family",
//   display: "swap",
// });

export const metadata: Metadata = {
    title: {
        default: "Rafe Colman-Chadwick",
        template: "%s | Rafe Colman-Chadwick",
    },
    description:
        "Ultra-endurance runner, charity fundraiser, and filmmaker. Follow the journey from John o' Groats to Land's End and beyond.",
    openGraph: {
        type: "website",
        locale: "en_GB",
        siteName: "Rafe Colman-Chadwick",
    },
    twitter: {
        card: "summary_large_image",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${ibmPlexSans.variable} ${sourceSerif.variable} flex min-h-screen flex-col bg-soft-white text-ink antialiased`}
            >
                <FilmGrain />
                <SiteHeader />
                <main className="flex-1">{children}</main>
                <SiteFooter />
            </body>
        </html>
    );
}
