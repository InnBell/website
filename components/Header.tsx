import { asset } from "$fresh/runtime.ts";
import clsx from "../utils/clsx.ts";
import LinkButton from "./LinkButton.tsx";

export default function Header() {
  return (
    <header
      class={clsx(
        "fixed top-0 left-0 right-0 px-4",
        "flex flex-row justify-between items-center",
        "bg-white shadow-md z-1"
      )}
    >
      {/* Logo */}
      <a href="/" class="inline-block h-16 w-16">
        <img src={asset("logo-accent.svg")} class="w-full h-full object-fit" />
      </a>

      {/* Login */}
      <LinkButton href="https://app.innbell.com" variant="solid">
        Login to App
      </LinkButton>
    </header>
  );
}
