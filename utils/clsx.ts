type ClassName = string | number | undefined | null | false;

export default function clsx(...classNames: ClassName[]): string {
  return classNames.filter(Boolean).join(" ");
}
