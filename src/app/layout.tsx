import { Footer } from "@/components/footer";
import { Nav } from "../components/nav";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="px-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
