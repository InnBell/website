import { Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>InnBell</title>
        <meta />
      </Head>
      <body class="font-poppins leading-normal">
        <Hero />
      </body>
    </>
  );
}
