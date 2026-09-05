import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS } from "../data/constants";

export default function Contact() {
  const form = useRef(null);
  const [messageSent, setMessageSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setErrorMessage("");
    setMessageSent(false);

    emailjs
      .sendForm(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        form.current,
        EMAILJS.publicKey
      )
      .then(
        () => {
          setMessageSent(true);
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          setIsError(true);
          setErrorMessage(
            "Something went wrong. Please try again or email me directly."
          );
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 px-6 bg-transparent relative overflow-hidden">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="relative text-gray-800 max-w-lg w-full mx-auto bg-gray-900/9 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-white/20 flex flex-col gap-6 z-10 hover:shadow-pink-500/20 transition-all duration-300"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="user_name" className="text-white font-medium">
            Your Name
          </label>
          <input
            id="user_name"
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            maxLength={100}
            className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="user_email" className="text-white font-medium">
            Your Email
          </label>
          <input
            id="user_email"
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            maxLength={150}
            className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-white font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            maxLength={2000}
            className="w-full px-4 py-3 rounded-md bg-gray-800/50 border border-gray-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-linear-to-r from-pink-600 via-purple-600 to-indigo-600 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>

        {messageSent && (
          <p className="text-green-400 mt-2 text-center" role="status">
            Message sent successfully!
          </p>
        )}

        {isError && (
          <p className="text-red-400 mt-2 text-center" role="alert">
            {errorMessage}
          </p>
        )}
      </form>
    </section>
  );
}
