import { asset } from "$fresh/runtime.ts";
import clsx from "../utils/clsx.ts";
import LinkButton from "./LinkButton.tsx";

export default function Footer() {
  return (
    <footer class={clsx("w-screen bg-gray-100")}>
      <div class={clsx("max-w-prose mx-auto p-4 h-full", "flex gap-4")}>
        {/* Logo */}
        <div class="flex gap-4 flex-[2] items-center">
          <a href="/" class="block h-20 w-20">
            <img
              src={asset("logo-accent.svg")}
              class="w-full h-full object-fit"
            />
          </a>

          {/* Contact */}
          <div class="flex flex-col gap-2">
            <strong class="text-accent">
              Affinity Hospitality Solutions LLP
            </strong>
            <address class="text-sm">
              314 Ansal Majestic Tower, Vikaspuri, West Delhi, Delhi - 110018,
              India
            </address>
            <p class="text-sm">
              Email: <a href="mailto:info@innbell.com">info@innbell.com</a>
            </p>
          </div>
        </div>

        <div class="bg-gray-300 w-[1px]" />

        {/* Links */}
        <nav class=" flex-1">
          <li>
            <a href="/about">About us</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li>
            <a href="/refund-policy">Refund Policy</a>
          </li>
          <li>
            <a href="/contact">Contact us</a>
          </li>
        </nav>
      </div>
    </footer>
  );
}
