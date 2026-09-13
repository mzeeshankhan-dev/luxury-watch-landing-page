import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#15130F" }}
      className="px-4 py-24 sm:px-10 sm:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="max-w-2xl mx-auto text-center"
      >
        <motion.p
          variants={item}
          className="text-[11px] mb-4"
          style={{ color: "#C9A24C", letterSpacing: "0.14em" }}
        >
          BY APPOINTMENT ONLY
        </motion.p>
        <motion.h2
          variants={item}
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 500,
            fontSize: "clamp(28px, 4.5vw, 48px)",
            color: "#EDE7D8",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Reserve a private viewing
        </motion.h2>
        <motion.p
          variants={item}
          className="text-sm sm:text-[15px] mb-10 mx-auto"
          style={{ color: "#9C9686", lineHeight: 1.7, maxWidth: 420 }}
        >
          Try the collection on your own wrist before you decide. Boutique
          appointments run forty minutes, one client at a time.
        </motion.p>

        {submitted ? (
          <motion.p
            variants={item}
            style={{ color: "#C9A24C", fontSize: 14, letterSpacing: "0.02em" }}
          >
            Thank you — we'll be in touch shortly to schedule your visit.
          </motion.p>
        ) : (
          <motion.form
            variants={item}
            onSubmit={handleSubmit}
            className="flex flex-col max-w-md gap-3 mx-auto sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 px-4 py-3 text-sm rounded-full outline-none"
              style={{
                backgroundColor: "transparent",
                border: "1px solid rgba(237,231,216,0.3)",
                color: "#EDE7D8",
              }}
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm transition-transform hover:scale-[1.02]"
              style={{
                backgroundColor: "#C9A24C",
                color: "#15130F",
                fontWeight: 500,
              }}
            >
              Request appointment
              <ArrowRight size={15} strokeWidth={2} />
            </button>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
}
