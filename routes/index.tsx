import { asset } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import LinkButton from "../components/LinkButton.tsx";

export default function Home() {
  return (
    <main>
      <Hero
        title="Connoisseur for all hospitality needs"
        texts={[
          "InnBell is India's first B2B marketplace focussed on hospitality industry. Proudly connecting hoteliers and restaurateurs with suppliers for every need.",
          "InnBell offers two types of accounts. A vendor can list products and offer services. A buyer can browse products and services and place enquiries.",
        ]}
        imageUrl={asset("images/InnBell_Buyer_Explore.jpg")}
      >
        <div class="flex justify-center gap-5 items-center">
          <LinkButton href="/vendor" variant="outline">
            I am a Vendor
          </LinkButton>
          <LinkButton href="/buyer" variant="outline">
            I am a Buyer
          </LinkButton>
        </div>
      </Hero>
    </main>
  );
}
