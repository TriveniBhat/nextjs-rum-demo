import "./globals.css";
import RumInitializer from "./rum";

export const metadata = {
  title: "Next.js + CloudWatch RUM",
  description: "Demo application with AWS CloudWatch Real User Monitoring"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RumInitializer />
        {children}
      </body>
    </html>
  );
}
