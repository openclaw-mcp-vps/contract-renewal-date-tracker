import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contract Renewal Date Tracker — Never Miss a SaaS Renewal",
  description: "Track SaaS contract renewals, price changes, and cancellation deadlines. Get alerts before you're auto-charged."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="240b7253-32c9-40ef-b8b8-8a01f28d508f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
