import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

const ITEMS = [
  'Swiss automatic movement',
  'Sapphire crystal',
  'Hand-finished case',
  '100m water resistance',
  'Five-year warranty',
  'Made to order',
];

export default function Marquee() {
  const prefersReduced = usePrefersReducedMotion();
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div
      style={{
        backgroundColor: '#15130F',
        borderTop: '1px solid rgba(201,162,76,0.22)',
        borderBottom: '1px solid rgba(201,162,76,0.22)',
        overflow: 'hidden',
      }}
      className="py-5 sm:py-6"
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: prefersReduced ? 'none' : 'marquee 32s linear infinite',
        }}
      >
        {loop.map((item, index) => (
          <span
            key={index}
            className="flex items-center text-sm sm:text-base"
            style={{
              fontFamily: "'Fraunces', serif",
              fontStyle: 'italic',
              color: '#D8D2C2',
              paddingRight: '2.5rem',
            }}
          >
            {item}
            <span
              aria-hidden
              style={{
                display: 'inline-block',
                width: 5,
                height: 5,
                borderRadius: '50%',
                backgroundColor: '#C9A24C',
                marginLeft: '2.5rem',
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
