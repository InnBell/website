import { asset } from "$fresh/runtime.ts";
import { Head } from "../components/Head.tsx";
import Hero from "../components/Hero.tsx";
import LinkButton from "../components/LinkButton.tsx";
import Showcase from "../components/Showcase.tsx";

export default function Buyer() {
  return (
    <>
      <Head title="Buyer" />
      <Hero
        title="InnBell Buyer"
        texts={[
          "Register as a Buyer to explore the best products and services the hospitality industry has to offer.",
          "Send enquiries directly to vendors and create trusted connections.",
        ]}
        imageUrl={asset("images/InnBell_Buyer_Explore.jpg")}
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

      <main id="details" class="pt-32 bg-gray-50">
        <h2 class="font-medium text-4xl mb-12 mx-auto text-accent border-b w-max border-accentLight">
          Features & Highlights
        </h2>

        <Showcase
          feature="Explore"
          description="Explore the best products and services the hospitality industry has to offer"
          imageUrl={asset("images/InnBell_Buyer_Explore.jpg")}
        />
        <Showcase
          feature="Enquiries"
          description="Send direct enquiries to vendors that interests you."
          imageUrl={asset("images/InnBell_Buyer_Enquiries.jpg")}
          invert
        />

        <Showcase
          feature="Vendors"
          description="Through InnBell, gain access to trusted and verified vendors in the industry"
          //   imageUrl={asset("images/InnBell_Vendor_Profile.jpg")}
        />
      </main>

      <section class="py-16 w-full flex justify-center gap-4 bg-accentLight">
        <LinkButton href="//app.innbell.com/CreateUser.aspx" variant="solid">
          Register as a Buyer
        </LinkButton>
        <LinkButton href="/contact" variant="outline">
          Contact us
        </LinkButton>
      </section>
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
