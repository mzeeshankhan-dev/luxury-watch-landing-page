import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WATCHES } from '../data/watches';
import { useOnScreen } from '../hooks/useOnScreen';

export default function Collection() {
  const { ref, isVisible } = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="collection"
      ref={ref}
      style={{ backgroundColor: '#15130F' }}
      className="px-4 sm:px-10 py-20 sm:py-28"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <p
              className="text-[11px] mb-3"
              style={{ color: '#C9A24C', letterSpacing: '0.14em' }}
            >
              THE CURRENT COLLECTION
            </p>
            <h2
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 500,
                fontSize: 'clamp(28px, 4vw, 46px)',
                color: '#EDE7D8',
                maxWidth: 560,
                lineHeight: 1.1,
              }}
            >
              Four cases, one standard of finishing.
            </h2>
          </div>
          <p
            className="text-sm max-w-xs"
            style={{ color: '#9C9686', lineHeight: 1.6 }}
          >
            Every reference is produced in small runs and assembled by a
            single watchmaker from first screw to final polish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {WATCHES.map((watch, index) => (
            <WatchCard
              key={watch.id}
              watch={watch}
              delay={index * 90}
              visible={isVisible}
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
  visible,
}: {
  watch: (typeof WATCHES)[number];
  delay: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (visible && !shown) {
      timeoutRef.current = setTimeout(() => setShown(true), delay);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [visible, delay, shown]);

  return (
    <a
      href="#contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="block group"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 600ms cubic-bezier(0.4,0,0.2,1), transform 600ms cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      <div
        style={{
          borderRadius: 10,
          overflow: 'hidden',
          aspectRatio: '4 / 5',
          border: '1px solid rgba(201,162,76,0.16)',
          marginBottom: 16,
        }}
      >
        <img
          src={watch.image}
          alt={`${watch.name}, ${watch.category.toLowerCase()} watch`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.045)' : 'scale(1)',
            transition: 'transform 500ms cubic-bezier(0.4,0,0.2,1)',
          }}
        />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <p
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 500,
              fontSize: '18px',
              color: '#EDE7D8',
            }}
          >
            {watch.name}
          </p>
          <p
            className="text-xs mt-1"
            style={{ color: '#9C9686', letterSpacing: '0.04em' }}
          >
            {watch.category} &middot; {watch.price}
          </p>
        </div>
        <ArrowUpRight
          size={18}
          style={{
            color: '#C9A24C',
            marginTop: 3,
            transform: hovered ? 'translate(2px, -2px)' : 'translate(0,0)',
            transition: 'transform 250ms',
          }}
        />
      </div>
    </a>
  );
}
