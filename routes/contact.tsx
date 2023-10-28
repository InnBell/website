import { Head } from "../components/Head.tsx";

export default function About() {
  return (
    <main class="py-28 prose mx-4 md:mx-auto min-h-screen">
      <Head title="Contact us" />

      <h1 class="font-bold">Contact us</h1>

      <h2>Affinity Hospitality Solutions LLP</h2>

      <address>
        314 Ansal Majestic Tower, Vikaspuri, West Delhi, Delhi - 110018, India
      </address>

      <p class="text-sm">
        Email: <a href="mailto:contact@innbell.com">contact@innbell.com</a>
      </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6638399707763!2d77.0758283!3d28.6398355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04ec42c9fdb3%3A0xdab6fe177e60ecea!2sAnsal%20Majestic%20Tower%2C%20AK%20Market%2C%20Vikaspuri%2C%20Delhi%2C%20110018%2C%20India!5e0!3m2!1sen!2sfi!4v1693563913935!5m2!1sen!2sfi"
        width="100%"
        height="450"
        style="border:0;"
        allowFullScreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </main>
  );
}
