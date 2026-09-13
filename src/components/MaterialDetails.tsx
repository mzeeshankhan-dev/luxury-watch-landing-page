import { motion ,type Variants} from "framer-motion";
import { useOnScreen } from "../hooks/useOnScreen";
import watchOnHand from "../assets/images/watchOnHand.webp";

export interface Feature {
  image: string;
  title: string;
  description: string;
}

export interface PremiumMaterialsData {
  category: string;
  heading: string;
  description: string;
  features: Feature[];
}

export const premiumData: PremiumMaterialsData = {
  category: "PREMIUM MATERIALS",
  heading: "Extraordinary in Every Detail",
  description:
    "From the sapphire crystal to the genuine leather strap, every element is carefully selected to deliver lasting beauty and performance.",
  features: [
    {
      image:
        "https://images.unsplash.com/photo-1751437715301-4030182f4606?q=80&w=880&auto=format",
      title: "Sapphire Crystal",
      description: "Scratch-resistant & crystal clear",
    },
    {
      image:
        "https://images.unsplash.com/photo-1646724810360-abfa1bb76d6d?q=80&w=941&auto=format",
      title: "Stainless Steel",
      description: "Durable & refined finish",
    },
    {
      image:
        "https://images.unsplash.com/photo-1787386543129-abee83f0d9f4?q=80&w=880&auto=format",
      title: "Genuine Leather Strap",
      description: "Comfortable & long-lasting",
    },
  ],
};

const MaterialDetails = () => {
  const { ref } = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

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

  return (
    <section
      id="material"
      ref={ref}
      style={{ backgroundColor: "#15130F" }}
      className="px-4 py-20 sm:px-10 sm:py-28"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 sm:gap-6 gap-6 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true,amount: 0.3 }}
          variants={container}
          className="left"
        >
          <motion.p
            variants={item}
            className="text-[11px] mb-3"
            style={{ color: "#C9A24C", letterSpacing: "0.14em" }}
          >
            {premiumData.category}
          </motion.p>
          <motion.h2
            variants={item}
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              fontSize: "clamp(28px, 3.6vw, 42px)",
              color: "#EDE7D8",
              lineHeight: 1.12,
              marginBottom: 20,
              maxWidth: 480,
            }}
            className="max-w-xs"
          >
            {premiumData.heading}
          </motion.h2>
          <motion.p
            variants={item}
            className="text-sm sm:text-[15px] mb-10"
            style={{ color: "#B7B0A0", lineHeight: 1.75, maxWidth: 460 }}
          >
            {premiumData.description}
          </motion.p>
          <motion.div variants={container} className="feature">
            {premiumData.features.map((feature, index) => (
              <motion.div
                variants={item}
                key={index}
                className="flex items-center gap-4 mt-3 feature-item"
              >
                <img
                  className="w-12 h-12 rounded-full"
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                />
                <div className="info">
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="text-white/50">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div
          className="relative h-full"
          style={{
            backgroundColor: "#15130F",
          }}
        >
          <img
            src={watchOnHand}
            alt="watch on hand"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "right center",
            }}
            className=""
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, rgb(21, 19, 15), rgb(15 14 10 / 26%), rgb(15 14 10 / 0%))",
            }}
          />
          <motion.div
            initial={{ x: "0%" }}
            whileInView={{ x: "100%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 1,
            }}
            className="bg-[#15130F] absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
};

export default MaterialDetails;
