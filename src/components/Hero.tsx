import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { WATCHES } from "../data/watches";
import bgImage from "../assets/images/bg.webp";

const TRANSITION_MS = 650;
const EASING = "cubic-bezier(0.4,0,0.2,1)";

type Role = "center" | "left" | "right" | "back";

const GRAIN_SVG =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.08 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
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

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 640 : false,
  );
  const lockRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    WATCHES.forEach((watch) => {
      const img = new Image();
      img.src = watch.image;
    });
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(
    () => () => {
      if (lockRef.current) clearTimeout(lockRef.current);
    },
    [],
  );

  const navigate = (direction: "next" | "prev") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) =>
      direction === "next"
        ? (prev + 1) % WATCHES.length
        : (prev + 3) % WATCHES.length,
    );
    lockRef.current = setTimeout(() => setIsAnimating(false), TRANSITION_MS);
  };

  const count = WATCHES.length;
  const center = activeIndex;
  const left = (activeIndex + count - 1) % count;
  const right = (activeIndex + 1) % count;
  const back = (activeIndex + count - 2) % count;

  const roleFor = (index: number): Role => {
    if (index === center) return "center";
    if (index === left) return "left";
    if (index === right) return "right";
    if (index === back) return "back";
    return "back";
  };

  const itemTransition = `transform ${TRANSITION_MS}ms ${EASING}, filter ${TRANSITION_MS}ms ${EASING}, opacity ${TRANSITION_MS}ms ${EASING}, left ${TRANSITION_MS}ms ${EASING}`;

  const styleForRole = (role: Role): CSSProperties => {
    switch (role) {
      case "center":
        return {
          left: "50%",
          bottom: isMobile ? "15%" : "10%",
          height: isMobile ? "46%" : "68%",
          transform: `translateX(-50%) scale(${isMobile ? 1.04 : 1.06})`,
          filter: "none",
          opacity: 1,
          zIndex: 20,
        };
      case "left":
        return {
          left: isMobile ? "14%" : "22%",
          bottom: isMobile ? "26%" : "18%",
          height: isMobile ? "22%" : "34%",
          transform: "translateX(-50%) scale(0.92)",
          filter: "blur(1.5px)",
          opacity: 0.55,
          zIndex: 10,
        };
      case "right":
        return {
          left: isMobile ? "86%" : "78%",
          bottom: isMobile ? "26%" : "18%",
          height: isMobile ? "22%" : "34%",
          transform: "translateX(-50%) scale(0.92)",
          filter: "blur(1.5px)",
          opacity: 0.55,
          zIndex: 10,
        };
      case "back":
      default:
        return {
          left: "50%",
          bottom: isMobile ? "30%" : "18%",
          height: isMobile ? "16%" : "24%",
          transform: "translateX(-50%) scale(0.85)",
          filter: "blur(3px)",
          opacity: 0.35,
          zIndex: 5,
        };
    }
  };

  const activeWatch = WATCHES[activeIndex];

  return (
    <motion.div
      id="top"
      style={{
        transform: useTransform(
          scrollYProgress,
          [0, 0.2],
          [
            "perspective(1000px) rotateX(0deg)",
            "perspective(1000px) rotateX(-20deg)",
          ],
        ),

        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="sticky top-0 w-full h-screen overflow-hidden "
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "100vh" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 50,
            opacity: 0.35,
            backgroundImage: `url("${GRAIN_SVG}")`,
            backgroundSize: "200px 200px",
            backgroundRepeat: "repeat",
          }}
        />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 4,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 28%, rgba(0,0,0,0) 62%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        <div
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none"
          style={{ zIndex: 2, top: "14%" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{
              duration: 0.8,
            }}
            key={activeWatch.category}
            style={{
              fontFamily: "'Fraunces', serif",
              fontSize: "clamp(70px, 20vw, 300px)",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#ffffff",
              opacity: 0.3,
              lineHeight: 1,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              whiteSpace: "nowrap",
              transition: `opacity ${TRANSITION_MS}ms ${EASING}`,
            }}
          >
            {activeWatch.category}
          </motion.span>
        </div>

        <div className="absolute inset-0" style={{ zIndex: 3 }}>
          {WATCHES.map((watch, index) => {
            const role = roleFor(index);
            const roleStyle = styleForRole(role);
            return (
              <div
                key={watch.id}
                style={{
                  position: "absolute",
                  aspectRatio: "4 / 5",
                  overflow: "hidden",
                  transition: itemTransition,
                  willChange: "transform, filter, opacity",
                  ...roleStyle,
                }}
              >
                <img
                  src={watch.image}
                  alt={`${watch.name}, ${watch.category.toLowerCase()} watch`}
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  fetchPriority="high"
                  width="600"
                  height="700"
                />
              </div>
            );
          })}
        </div>

        {/* Bottom-left: watch info + nav buttons */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="absolute bottom-6 left-4 sm:bottom-12 sm:left-10"
          style={{ zIndex: 60, maxWidth: 340 }}
        >
          <motion.p
            variants={item}
            className="text-[11px] mb-2"
            style={{ color: "#C9A24C", letterSpacing: "0.14em", opacity: 0.9 }}
          >
            {activeWatch.reference} &middot; {activeWatch.price}
          </motion.p>
          <motion.p
            variants={item}
            className="mb-2 sm:mb-3"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              fontSize: "clamp(24px, 4vw, 40px)",
              color: "#EDE7D8",
              lineHeight: 1.05,
            }}
          >
            {activeWatch.name}
          </motion.p>
          <motion.p
            variants={item}
            className="hidden mb-6 text-sm sm:block"
            style={{
              color: "#D8D2C2",
              opacity: 0.78,
              lineHeight: 1.6,
              maxWidth: 300,
            }}
          >
            {activeWatch.blurb}
          </motion.p>
          <motion.div variants={item} className="flex items-center gap-3">
            <NavButton
              icon={<ArrowLeft size={20} strokeWidth={2} />}
              onClick={() => navigate("prev")}
              label="Previous timepiece"
            />
            <NavButton
              icon={<ArrowRight size={20} strokeWidth={2} />}
              onClick={() => navigate("next")}
              label="Next timepiece"
            />
            <span
              className="ml-1 text-xs"
              style={{
                color: "#D8D2C2",
                opacity: 0.6,
                letterSpacing: "0.04em",
              }}
            >
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(count).padStart(2, "0")}
            </span>
          </motion.div>
        </motion.div>

        {/* Bottom-right link */}
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
          }}
          href="#collection"
          className="absolute flex items-center bottom-6 right-4 sm:bottom-12 sm:right-10 group"
          style={{ zIndex: 60, color: "#EDE7D8", textDecoration: "none" }}
        >
          <span
            style={{
              fontSize: "clamp(13px, 1.4vw, 15px)",
              letterSpacing: "0.04em",
              opacity: 0.85,
              transition: "opacity 200ms",
            }}
            className="group-hover:opacity-100"
          >
            View full collection
          </span>
          <ArrowRight className="w-4 h-4 ml-2" strokeWidth={2} />
        </motion.a>
      </div>
    </motion.div>
  );
}

function NavButton({
  icon,
  onClick,
  label,
}: {
  icon: React.ReactNode;
  onClick: () => void;
  label: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center justify-center w-10 h-10 rounded-full sm:w-11 sm:h-11"
      style={{
        backgroundColor: hovered ? "rgba(237,231,216,0.12)" : "transparent",
        border: "1px solid rgba(237,231,216,0.5)",
        color: "#EDE7D8",
        transform: hovered ? "scale(1.06)" : "scale(1)",
        transition: "transform 150ms, background-color 150ms",
      }}
    >
      {icon}
    </button>
  );
}
