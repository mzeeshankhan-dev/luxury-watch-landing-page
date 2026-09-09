const COLUMNS = [
  {
    title: 'Collection',
    links: ['Dress', 'Dive', 'Classic', 'Racing'],
  },
  {
    title: 'The Maison',
    links: ['Our craft', 'The atelier', 'Journal', 'Careers'],
  },
  {
    title: 'Client Care',
    links: ['Book a viewing', 'Servicing', 'Warranty', 'Contact'],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#15130F',
        borderTop: '1px solid rgba(201,162,76,0.16)',
      }}
      className="px-4 sm:px-10 pt-16 pb-8"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 pb-14">
          <div className="col-span-2 sm:col-span-1">
            <p
              style={{
                fontFamily: "'Fraunces', serif",
                fontWeight: 600,
                fontSize: '22px',
                color: '#EDE7D8',
              }}
              className="mb-3"
            >
              Calibre
            </p>
            <p className="text-xs" style={{ color: '#9C9686', lineHeight: 1.6 }}>
              By appointment &mdash; Lahore &middot; Geneva
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <p
                className="text-xs mb-4"
                style={{ color: '#C9A24C', letterSpacing: '0.1em' }}
              >
                {column.title.toUpperCase()}
              </p>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-opacity hover:opacity-100"
                      style={{ color: '#D8D2C2', opacity: 0.75 }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-8"
          style={{ borderTop: '1px solid rgba(237,231,216,0.08)' }}
        >
          <p className="text-xs" style={{ color: '#75705F' }}>
            &copy; {new Date().getFullYear()} Calibre Timepieces. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#75705F' }}>
            Photography for illustration only.
          </p>
        </div>
      </div>
    </footer>
  );
}
