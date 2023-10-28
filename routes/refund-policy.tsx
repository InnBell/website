import { Head } from "../components/Head.tsx";

export default function RefundPolicy() {
  return (
    <main class="py-28 prose mx-4 md:mx-auto min-h-screen">
      <Head title="Refund policy" />

      <h1 class="font-bold">Refund Policy</h1>
      <p>Last updated: September 01, 2023</p>

      <p>
        We have a 7-day refund policy, which means you have 7 days after
        receiving your service to request a return.
      </p>

      <p>
        To start a refund, you can contact us at contact@innbell.com. You can
        always contact us for any return questions at contact@innbell.com.
      </p>

      <h2>Refunds</h2>

      <p>
        We will notify you once we've received and inspected your application to
        let you know if the refund was approved or not. If approved, you'll be
        automatically refunded on your original payment method within 10
        business days. Please remember it can take some time for your bank or
        credit card company to process and post the refund too. If more than 15
        business days have passed since we've approved your return, please
        contact us at contact@innbell.com.
      </p>
    </main>
  );
}
