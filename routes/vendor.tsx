import { asset } from "$fresh/runtime.ts";
import { Head } from "../components/Head.tsx";
import Hero from "../components/Hero.tsx";
import LinkButton from "../components/LinkButton.tsx";
import Showcase from "../components/Showcase.tsx";

export default function Vendor() {
  return (
    <>
      <Head title="Vendor" />
      <Hero
        title="InnBell Vendor"
        texts={[
          "Register as a vendor to list your products and services for the hospitality industry.",
          "Receive enquiries from buyers and convert them into sales.",
        ]}
        imageUrl={asset("images/InnBell_Vendor_Enquiries.jpg")}
      >
        <div class="flex justify-center gap-5 items-center">
          <LinkButton href="//app.innbell.com/CreateUser.aspx" variant="solid">
            Register as a Vendor
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
          feature="Enquiries"
          description="Receive enquiries from buyers and convert them into sales"
          imageUrl={asset("images/InnBell_Vendor_Enquiries.jpg")}
        />
        <Showcase
          feature="Profile"
          description="Upload your latest catalogue and create an capturing profile for buyers to see"
          imageUrl={asset("images/InnBell_Vendor_Profile.jpg")}
          invert
        />
        <Showcase
          feature="Buyers"
          description="Through InnBell, gain access to top-tier buyers in the industry"
          //   imageUrl={asset("images/InnBell_Vendor_Profile.jpg")}
        />
      </main>

      <section class="py-16 w-full flex justify-center gap-4 bg-accentLight">
        <LinkButton href="//app.innbell.com/CreateUser.aspx" variant="solid">
          Register as a Vendor
        </LinkButton>
        <LinkButton href="/contact" variant="outline">
          Contact us
        </LinkButton>
      </section>
    </>
  );
}
