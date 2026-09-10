import { HALF_IMAGE } from "../data/watches";
import { useOnScreen } from "../hooks/useOnScreen";
import { Clock3, Gem, ShieldCheck } from "lucide-react";

const FEATURES = [
  { icon: Clock3, label: "Timeless Design" },
  { icon: Gem, label: "Premium Materials" },
  { icon: ShieldCheck, label: "Exceptional Durability" },
];

export default function Craftsmanship() {
  const { ref } = useOnScreen<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section
      id="craft"
      ref={ref}
      style={{ backgroundColor: "#1B1914" }}
      className="px-4 py-20 sm:px-10 sm:py-28"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div
          style={{
            borderRadius: 14,
            overflow: "hidden",
            aspectRatio: "4 / 3",
            border: "1px solid rgba(201,162,76,0.16)",
          }}
          className="w-full h-full"
        >
          <img
            src={HALF_IMAGE}
            alt="Close-up of a hand-finished mechanical watch movement"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            loading="lazy"
          />
        </div>

        <div>
          <p
            className="text-[11px] mb-3"
            style={{ color: "#C9A24C", letterSpacing: "0.14em" }}
          >
            OUR PHILOSOPHY
          </p>
          <h2
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.6vw, 42px)",
              color: "#EDE7D8",
              lineHeight: 1.12,
              marginBottom: 20,
              maxWidth: 480,
            }}
          >
            Crafted for <br />
            What Matters
          </h2>
          <p
            className="text-sm sm:text-[15px] mb-10"
            style={{ color: "#B7B0A0", lineHeight: 1.75, maxWidth: 460 }}
          >
            Every Velaron timepiece is shaped by a pursuit of precision, refined
            design, and enduring craftsmanship. From its sculpted case to its
            automatic movement, every detail is created to make time feel
            extraordinary.
          </p>

          <div  className="grid grid-cols-3 gap-6 text-white/70 sm:gap-10">
            {FEATURES.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={index} className="flex flex-col items-center gap-4 text-center">
                  <Icon size={50} color="#C9A24C" />

                  <p>{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
