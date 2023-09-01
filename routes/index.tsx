import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";

export default function Home() {
  return (
    <main>
      <HtmlHead />
      <Hero />
      <div id="vendor" class="flex">
        <div
          id="buyer"
          class="flex-1 flex items-center justify-center text-accent bg-white h-[50vh] w-screen text-5xl"
        >
          Coming soon. Stay tuned!
        </div>
      </div>
    </main>
  );
}

function HtmlHead() {
  return (
    <Head>
      <title>InnBell</title>
      <meta />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        // @ts-expect-error: color is not a valid attribute
        color="#7e2a00"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="apple-mobile-web-app-title" content="InnBell" />
      <meta name="application-name" content="InnBell" />
      <meta name="msapplication-TileColor" content="#7e2a00" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
