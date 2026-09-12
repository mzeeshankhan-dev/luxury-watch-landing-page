import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { WATCHES } from "../data/watches";
import { useOnScreen } from "../hooks/useOnScreen";

export default function Collection() {
  const { ref,} = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="collection"
      ref={ref}
      style={{ backgroundColor: "#15130F" }}
      className="px-4 py-20 sm:px-10 sm:py-28"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-4 mb-12 sm:flex-row sm:items-end sm:justify-between sm:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
              }}
              className="text-[11px] mb-3"
              style={{ color: "#C9A24C", letterSpacing: "0.14em" }}
            >
              THE CURRENT COLLECTION
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
              }}
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 500,
                fontSize: "clamp(28px, 4vw, 46px)",
                color: "#EDE7D8",
                maxWidth: 560,
                lineHeight: 1.1,
              }}
            >
              Four cases, one standard of finishing.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className="max-w-xs text-sm"
            style={{ color: "#9C9686", lineHeight: 1.6 }}
          >
            Every reference is produced in small runs and assembled by a single
            watchmaker from first screw to final polish.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {WATCHES.map((watch, index) => (
            <WatchCard
              key={watch.id}
              watch={watch}
              direction={index % 2 === 0 ? "left" : "right"}
              distance={index % 2 === 0 ? 70 : 70}
              delay={0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WatchCard({
  watch,
  delay,
  direction,
  distance,
}: {
  watch: (typeof WATCHES)[number];
  delay: number;
  direction: "left" | "right";
  distance: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href="#contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block group"
      initial={{
        opacity: 0,
        x: direction === "left" ? -distance : distance,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay: delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div
        style={{
          borderRadius: 10,
          overflow: "hidden",
          aspectRatio: "4 / 5",
          border: "1px solid rgba(201,162,76,0.16)",
          marginBottom: 16,
        }}
      >
        <img
          src={watch.image}
          alt={`${watch.name}, ${watch.category.toLowerCase()} watch`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: hovered ? "scale(1.045)" : "scale(1)",
            transition: "transform 500ms cubic-bezier(0.4,0,0.2,1)",
          }}
          loading="lazy"
        />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <p
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              fontSize: "18px",
              color: "#EDE7D8",
            }}
          >
            {watch.name}
          </p>
          <p
            className="mt-1 text-xs"
            style={{ color: "#9C9686", letterSpacing: "0.04em" }}
          >
            {watch.category} &middot; {watch.price}
          </p>
        </div>
        <ArrowUpRight
          size={18}
          style={{
            color: "#C9A24C",
            marginTop: 3,
            transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
            transition: "transform 250ms",
          }}
        />
      </div>
    </motion.a>
  );
}
