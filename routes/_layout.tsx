import type { LayoutProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";

export default function Layout({ Component }: LayoutProps) {
  return (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  );
}
