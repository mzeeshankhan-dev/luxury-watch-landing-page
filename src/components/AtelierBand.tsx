import { ATELIER_IMAGE } from "../data/watches";

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
        <p
          style={{
            fontFamily: "'Fraunces', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(22px, 3.4vw, 36px)",
            color: "#EDE7D8",
            lineHeight: 1.4,
          }}
        >
          A watch should outlive the person who wound it first.
        </p>
        <p
          className="mt-6 text-xs"
          style={{ color: "#C9A24C", letterSpacing: "0.14em" }}
        >
          THE CALIBRE ATELIER, SINCE 1994
        </p>
      </div>
    </section>
  );
}
