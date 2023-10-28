import { Head as _Head } from "$fresh/runtime.ts";

export function Head({ title }: { title: string }) {
  return (
    <_Head>
      <title>{title} - InnBell</title>
    </_Head>
  );
}
