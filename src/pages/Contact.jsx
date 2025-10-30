import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_kk9rkww",   // from EmailJS dashboard
      "template_5zyytgo",  // from EmailJS dashboard
      form.current,
      "-ol63dN72nd4555Y4"    // from EmailJS dashboard
    ).then(
      (result) => {
        console.log(result.text);
        setMessageSent(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 px-6 bg-transparent relative overflow-hidden">
      <form ref={form} onSubmit={sendEmail} className="relative text-gray-800 max-w-lg w-full mx-auto bg-gray-900/9 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-white/20 flex flex-col gap-6 z-10 hover:shadow-pink-500/20 transition-all duration-300">
        <input type="text" name="user_name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"/>
        <input type="email" name="user_email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"/>
        <textarea name="message" rows="5" placeholder="Your Message" className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none transition-all"></textarea>
        <button type="submit" className="bg-linear-to-r from-pink-600 via-purple-600 to-indigo-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-transform duration-200">
          Send Message
        </button>
        {messageSent && <p className="text-green-400 mt-2 text-center">Message sent successfully!</p>}
      </form>
    </section>
  );
}
