import { asset } from "$fresh/runtime.ts";
import { Head } from "../components/Head.tsx";
import Hero from "../components/Hero.tsx";
import LinkButton from "../components/LinkButton.tsx";

export default function Buyer() {
  return (
    <>
      <Head title="Vendor" />
      <Hero
        title="InnBell Buyer"
        texts={[
          "Register as a Buyer to explore the best products and services the hospitality industry has to offer.",
          "Send enquiries directly to vendors and create trusted connections.",
        ]}
        imageUrl={asset("images/InnBell_Explore.jpg")}
      >
        <div class="flex justify-center gap-5 items-center">
          <LinkButton href="//app.innbell.com/CreateUser.aspx" variant="solid">
            Register as a Buyer
          </LinkButton>
          <LinkButton href="#details" variant="outline">
            Learn more
          </LinkButton>
        </div>
      </Hero>
      <main id="details" class="py-28 prose mx-4 md:mx-auto min-h-screen">
        <h2 class="font-bold">InnBell Buyer</h2>
      </main>
    </>
  );
}

{
  /* <div id="Buyer" class="flex">
        <div
          id="buyer"
          class="flex-1 flex items-center justify-center text-accent bg-white h-[50vh] w-screen text-5xl"
        >
          Coming soon. Stay tuned!
        </div>
      </div> */
}
