import { motion } from "framer-motion";
import { ATELIER_IMAGE } from "../data/watches";

const text = " A watch should outlive the person who wound it first.";

export default function AtelierBand() {
  return (
    <section
      id="atelier"
      className="relative flex items-center justify-center"
      style={{ minHeight: "62vh" }}
    >
      <img
        src={ATELIER_IMAGE}
        alt="Watchmaker's bench with several timepieces laid out for servicing"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        loading="lazy"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(15,14,10,0.72) 0%, rgba(15,14,10,0.55) 50%, rgba(15,14,10,0.82) 100%)",
        }}
      />

      <div className="relative max-w-2xl px-6 text-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(22px, 3.4vw, 36px)",
            color: "#EDE7D8",
            lineHeight: 1.4,
          }}
        >
          {/* {text} */}
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 8,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.1,
                    delay: index * 0.03,
                    ease: "easeOut",
                  },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay:1.2
          }}
          className="mt-6 text-xs"
          style={{ color: "#C9A24C", letterSpacing: "0.14em" }}
        >
          THE Velaron ATELIER, SINCE 1994
        </motion.p>
      </div>
    </section>
  );
}
