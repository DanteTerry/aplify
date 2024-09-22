import type { Metadata } from "next";
import "./globals.css";
import { Gabarito } from "next/font/google";
import DarkModeProvider from "@/components/providers/DarkModeProvider";

const gabarito = Gabarito({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aplify",
  description:
    "Aplify is a job application tracker designed to simplify the job hunt process. Manage your applications, track replies from companies, store resumes, and stay organized with automated status updates and calendar scheduling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${gabarito.className} -z-50 antialiased dark:bg-[#0A0A0A]`}
      >
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
