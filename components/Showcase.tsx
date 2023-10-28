import { asset } from "$fresh/runtime.ts";
import clsx from "../utils/clsx.ts";

const themes = [
  {
    name: "red",
    bg: "bg-red-400",
    text: "text-red-800",
  },
  {
    name: "yellow",
    bg: "bg-yellow-400",
    text: "text-yellow-800",
  },
  {
    name: "green",
    bg: "bg-green-400",
    text: "text-green-800",
  },
  {
    name: "blue",
    bg: "bg-blue-400",
    text: "text-blue-800",
  },
  {
    name: "indigo",
    bg: "bg-indigo-400",
    text: "text-indigo-800",
  },
];

let index = Math.floor(Math.random() * themes.length);

type ShowcaseProps = {
  invert?: boolean;
  imageUrl?: string;
  feature: string;
  description?: string;
};

export default function Showcase({
  invert,
  imageUrl,
  feature,
  description,
}: ShowcaseProps) {
  const theme = themes[index];
  index = (index + 1) % themes.length;

  return (
    <section
      class={clsx(
        "flex bg-white flex-col-reverse pb-16 gap-4 md:pb-0 md:gap-0",
        invert ? "md:flex-row-reverse" : "md:flex-row",
        "min-h-[400px] max-h-[600px]"
      )}
    >
      <div
        class={clsx(
          "flex-1 flex flex-col justify-center items-center text-2xl gap-2",
          invert ? "text-left" : "text-right",
          theme.text
        )}
      >
        <div class="px-[10%] font-bold text-xl w-full text-uppercase">
          {feature}
        </div>
        {description && (
          <div class="px-[10%] text-2xl md:text-4xl w-full opacity-70">
            {description}
          </div>
        )}
      </div>

      <div
        class={clsx(
          "flex-1 relative flex items-center overflow-hidden",
          "bg-center bg-cover bg-no-repeat bg-blend-soft-light bg-opacity-50",
          theme.bg,
          invert && "-scale-x-100"
        )}
        style={{ backgroundImage: `url(${asset("images/hero-bg.jpg")})` }}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt={feature}
            class={clsx(
              "h-[90%] object-cover rounded translate-x-[10%]",
              invert ? "object-right" : "object-left"
            )}
          />
        )}
      </div>
    </section>
  );
}
