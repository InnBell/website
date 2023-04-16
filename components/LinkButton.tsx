import type { JSX } from "preact";
import clsx from "../utils/clsx.ts";

const commonStyle = clsx(
  "inline-block cursor-pointer px-6 py-2.5 rounded font-medium flex items-center justify-center"
);
const solidStyle = clsx(
  commonStyle,
  "bg-accent text-white border(accent 2) hover:bg-orange-600 active:bg-orange-900"
);
const outlineStyle = clsx(
  commonStyle,
  "bg-transparent text-accent border(accent 2) hover:(bg-orange-600 text-white) active:(bg-orange-900 text-white)"
);
const ghostStyle = clsx(
  commonStyle,
  "bg-transparent text-accent border(transparent 2) hover:underline"
);
const linkStyle = clsx(
  "inline-block cursor-pointer font-medium align-baseline text-orange-600 hover:underline"
);

export interface LinkButtonProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
  /** @default "ghost" */
  variant?: "solid" | "outline" | "ghost";
}

export default function LinkButton({ variant, ...props }: LinkButtonProps) {
  return (
    <a
      {...props}
      class={clsx(
        props.class,
        variant === "solid" && solidStyle,
        variant === "outline" && outlineStyle,
        variant === "ghost" && ghostStyle,
        !variant && linkStyle
      )}
    />
  );
}
