import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ASTRA e - Automation | Hardware to Edge Computing",
    template: "%s | ASTRA e - Automation",
  },
  description:
    "Full-spectrum IoT design, firmware engineering, mobile telemetry and cloud infrastructure from Bengaluru. Makers of ASTRA Atmos, ThermoProb and the ASTRA IoT Hub app.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${mono.variable} antialiased`}>
      <body className="flex min-h-screen flex-col overflow-x-clip">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
