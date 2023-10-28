import { Head } from "../components/Head.tsx";

export default function About() {
  return (
    <main class="py-28 prose mx-4 md:mx-auto min-h-screen">
      <Head title="About us" />

      <h1 class="font-bold">About us</h1>

      <p>
        InnBell is India's first B2B marketplace focussed on hospitality
        industry. Proudly connecting hoteliers and restaurateurs with suppliers
        for every need.
      </p>
      <p>
        InnBell offers two types of accounts. A vendor can list products and
        offer services. A buyer can browse products and services and place
        enquiries.
      </p>
    </main>
  );
}
