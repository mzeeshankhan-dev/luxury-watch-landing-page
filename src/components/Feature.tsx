import { useOnScreen } from "../hooks/useOnScreen";
import { useCountUp } from "../hooks/useCountUp";
import watchParts from "../assets/images/watch-parts.webp";

const STATS = [
  { value: 168, suffix: "hrs", label: "Hand-finishing per case" },
  { value: 37, suffix: "", label: "Components in every movement" },
  { value: 5, suffix: "yr", label: "Movement warranty" },
];

export default function Feature() {
  const { ref, isVisible } = useOnScreen<HTMLDivElement>({ threshold: 0.3 });

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
            aspectRatio: "4 / 3",
            transform: "perspective(1000px) rotateY(-20deg) rotateZ(20deg)",
          }}
        >
          <img
            src={watchParts}
            alt="Watch parts close-up"
            style={{ width: "110%", height: "110%", objectFit: "cover",}}
            loading="lazy"
          />
        </div>

        <div>
          <p
            className="text-[11px] mb-3"
            style={{ color: "#C9A24C", letterSpacing: "0.14em" }}
          >
            BUILT FOR PRECISION
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
            Advanced <br /> Automatic Movement
          </h2>
          <p
            className="text-sm sm:text-[15px] mb-10"
            style={{ color: "#B7B0A0", lineHeight: 1.75, maxWidth: 460 }}
          >
            Powered by a high-performance automatic movement, ensuring accuracy,
            reliability and a seamless experience.
          </p>

          <div className="grid grid-cols-3 gap-6 sm:gap-10">
            {STATS.map((stat) => (
              <Stat key={stat.label} stat={stat} active={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  stat,
  active,
}: {
  stat: (typeof STATS)[number];
  active: boolean;
}) {
  const value = useCountUp(stat.value, active);
  return (
    <div>
      <p
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 500,
          fontSize: "clamp(26px, 3vw, 38px)",
          color: "#C9A24C",
          lineHeight: 1,
        }}
      >
        {value}
        <span style={{ fontSize: "0.5em", marginLeft: 2 }}>{stat.suffix}</span>
      </p>
      <p
        className="mt-2 text-xs"
        style={{ color: "#9C9686", lineHeight: 1.5, maxWidth: 130 }}
      >
        {stat.label}
      </p>
    </div>
  );
}
