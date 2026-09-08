import { useRef, useState } from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import SectionHeading from "../components/SectionHeading";
import { useScrollReveal } from "../utils/useScrollReveal";
import { EMAILJS, CONTACT } from "../data/constants";

const INPUT_CLASSES =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder:text-gray-500 backdrop-blur transition-all focus:border-pink-500/60 focus:outline-none focus:ring-2 focus:ring-pink-500/30";

export default function Contact() {
  const form = useRef(null);
  const infoRef = useScrollReveal();
  const formRef = useScrollReveal();
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

    const params = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        params,
        EMAILJS.publicKey
      )
      .then(
        () => {
          setMessageSent(true);
          e.target.reset();
          setTimeout(() => setMessageSent(false), 6000);
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

  const details = [
    { icon: FaEnvelope, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: FaPhoneAlt, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
    { icon: FaMapMarkerAlt, label: "Location", value: CONTACT.location },
    { icon: FaClock, label: "Availability", value: CONTACT.availability },
  ];

  return (
    <section className="px-8 sm:px-12 md:px-16">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's Talk"
        highlight="Business"
        subtitle="Have a project in mind or just want to say hi? My inbox is always open."
      />

      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-[0.85fr_1.15fr]">
        <div ref={infoRef} className="reveal flex flex-col gap-5">
          <div className="glass-strong rounded-2xl p-7">
            <h3 className="font-display text-2xl font-bold text-white">
              Contact <span className="text-gradient">Info</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              I'm currently open to full-time roles and freelance projects. Drop me a
              message and I'll get back to you within a day.
            </p>

            <ul className="mt-6 space-y-4">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-pink-600 via-purple-600 to-indigo-600 text-white shadow-lg">
                    <Icon />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="block truncate text-sm font-semibold text-gray-200 transition-colors hover:text-pink-400"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="truncate text-sm font-semibold text-gray-200">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          </div>

        <div ref={formRef} className="reveal reveal-delay-1">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="glass-strong relative flex h-full flex-col gap-6 rounded-2xl p-8"
          >
            <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-purple-600/15 blur-3xl" />

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="user_name" className="text-sm font-medium text-gray-300">
                  Your Name
                </label>
                <input
                  id="user_name"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  maxLength={100}
                  className={INPUT_CLASSES}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="user_email" className="text-sm font-medium text-gray-300">
                  Your Email
                </label>
                <input
                  id="user_email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  maxLength={150}
                  className={INPUT_CLASSES}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
                maxLength={2000}
                className={`${INPUT_CLASSES} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-pink-600 via-purple-600 to-indigo-600 px-8 py-3.5 font-bold text-white shadow-[0_8px_30px_rgba(255,45,149,0.35)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_36px_rgba(255,45,149,0.55)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            >
              <FaPaperPlane />
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {messageSent && (
              <p className="text-center text-sm font-semibold text-emerald-400" role="status">
                Message sent successfully! I'll reply soon.
              </p>
            )}

            {isError && (
              <p className="text-center text-sm font-semibold text-red-400" role="alert">
                {errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}