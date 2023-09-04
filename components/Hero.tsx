import { asset } from "$fresh/runtime.ts";
import clsx from "../utils/clsx.ts";
import LinkButton from "./LinkButton.tsx";

export default function Hero() {
  return (
    <section
      id="hero"
      class="w-screen min-h-screen flex items-center justify-center bg-center bg-cover bg-no-repeat relative z-10"
      style={{
        backgroundImage: `linear-gradient(135deg,rgba(126,42,0,0.25),rgba(126,42,0,0),rgba(126,42,0,0.5)), url(${asset(
          "images/hero-bg.jpg"
        )})`,
      }}
    >
      <div class="flex flex-col gap-10 text-center px-4 items-center my-28">
        <h1 class="font-medium text-accent leading-snug text-3xl sm:text-4xl lg:text-5xl ">
          Connoisseur for all hospitality needs
        </h1>
        <p class="text-lg md:text-xl text-red-800 max-w-2xl">
          InnBell is India's first B2B marketplace focussed on hospitality
          industry. Proudly connecting hoteliers and restaurateurs with
          suppliers for every need.
        </p>
        <p class="text-lg md:text-xl text-red-800 max-w-2xl">
          InnBell offers two types of accounts. A vendor can list products and
          offer services. A buyer can browse products and services and place
          enquiries.
        </p>
        <div class="flex justify-center gap-5 items-center">
          <LinkButton href="#vendor" variant="outline">
            I am a Vendor
          </LinkButton>
          <LinkButton href="#buyer" variant="outline">
            I am a Buyer
          </LinkButton>
        </div>
      </div>

      {/* Logo */}
      <a
        href="/"
        class="inline-block absolute left-5 md:left-10 top-5 text-accent h-16 w-16 md:h-24 md:w-24"
      >
        <img src={asset("logo-accent.svg")} class="w-full h-full object-fit" />
      </a>

      {/* Login */}
      <LinkButton
        href="https://app.innbell.com"
        variant="solid"
        class="absolute right-5 top-8 md:right-10 md:top-10"
      >
        Login to App
      </LinkButton>

      {/* Illustration */}
      <img
        role="none"
        src={asset("images/VendorProducts.jpg")}
        class={clsx(
          "absolute bottom-0 overflow-hidden",
          "w-[80%] max-w-[1000px] object(top cover) rounded-t-xl shadow-2xl",
          "h-16 md:h-20 lg:h-32 dwarf:hidden"
        )}
      />
    </section>
  );
}
