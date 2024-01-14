import type { Metadata } from "next";
import "./globals.css";
import ErrorBoundary from "./components/ErrorBoundary";

export const metadata: Metadata = {
  title: "Transactions",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="px-4 max-w-[1200px] min-h-[100vh] mx-auto overflow-hidden">
          <ErrorBoundary>{children}</ErrorBoundary>
        </div>
      </body>
    </html>
  );
}
