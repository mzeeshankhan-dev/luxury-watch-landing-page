import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Collection', href: '#collection' },
  { label: 'Craft', href: '#craft' },
  { label: 'Atelier', href: '#atelier' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-[100] transition-colors duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(21,19,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(201,162,76,0.18)'
          : '1px solid transparent',
      }}
    >
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-5 max-w-[1600px] mx-auto">
        <a
          href="#top"
          className="flex items-center gap-2.5"
          style={{ color: '#EDE7D8' }}
        >
          <span
            aria-hidden
            className="relative flex items-center justify-center rounded-full"
            style={{
              width: 26,
              height: 26,
              border: '1.5px solid #C9A24C',
            }}
          >
            <span
              className="absolute"
              style={{
                width: 1.5,
                height: 8,
                backgroundColor: '#C9A24C',
                top: '50%',
                left: '50%',
                transformOrigin: '50% 0%',
                transform: 'translate(-50%, -100%)',
                animation: 'tick-rotate 60s linear infinite',
                borderRadius: 1,
              }}
            />
          </span>
          <span
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 600,
              fontSize: '19px',
              letterSpacing: '0.01em',
            }}
          >
            Calibre
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13.5px] transition-opacity hover:opacity-100"
              style={{ color: '#D8D2C2', opacity: 0.78, letterSpacing: '0.01em' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="text-[13px] rounded-full px-4 sm:px-5 py-2 sm:py-2.5 transition-transform hover:scale-[1.03]"
          style={{
            border: '1px solid #C9A24C',
            color: '#EDE7D8',
            letterSpacing: '0.01em',
          }}
        >
          Book a viewing
        </a>
      </div>
    </header>
  );
}
