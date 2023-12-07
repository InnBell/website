import { VNode } from "preact";
import { asset } from "$fresh/runtime.ts";
import clsx from "../utils/clsx.ts";
import LinkButton from "./LinkButton.tsx";

type HeroProps = {
  title: string;
  texts: string[];
  children: VNode;
  imageUrl?: string;
};

export default function Hero({ title, texts, children, imageUrl }: HeroProps) {
  return (
    <section
      id="hero"
      class="w-screen min-h-screen flex items-center justify-center bg-center bg-cover bg-no-repeat relative z-[101]"
      style={{
        backgroundImage: `linear-gradient(135deg,rgba(126,42,0,0.25),rgba(126,42,0,0),rgba(126,42,0,0.5)), url(${asset(
          "images/hero-bg.jpg"
        )})`,
      }}
    >
      <div class="flex flex-col gap-10 text-center px-4 items-center my-28">
        <h1 class="font-medium text-accent leading-snug text-3xl sm:text-4xl lg:text-5xl ">
          {title}
        </h1>

        {texts.map((text) => (
          <p key={text} class="text-lg md:text-xl text-red-800 max-w-2xl">
            {text}
          </p>
        ))}

        {children}
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
        href="http://app.innbell.com"
        variant="solid"
        class="absolute right-5 top-8 md:right-10 md:top-10"
      >
        Login to App
      </LinkButton>

      {/* Illustration */}
      {imageUrl && (
        <img
          role="none"
          src={imageUrl}
          class={clsx(
            "absolute bottom-0 overflow-hidden dwarf:hidden -z-[1]",
            "w-[80%] max-w-[1000px] object(top cover) rounded-t-xl shadow-2xl h-[20vh]"
          )}
        />
      )}
    </section>
  );
}
