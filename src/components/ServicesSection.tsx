const KeyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
  </svg>
);

const LockClosedIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const BoltIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const MagnifyingGlassIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

const ComputerDesktopIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
  </svg>
);

const services = [
  {
    title: 'Key Programming',
    Icon: KeyIcon,
    items: ['Transponder Keys', 'Smart Keys'],
    cta: 'Call for FREE Quote',
    note: 'Prices vary by service type and time',
  },
  {
    title: 'Lockout Services',
    Icon: LockClosedIcon,
    items: ['Car Lockout', 'Residential Door Lockout'],
    cta: '',
    note: '',
  },
  {
    title: 'Battery Services',
    Icon: BoltIcon,
    items: ['Standard Battery', 'European Vehicles with Programming'],
    cta: 'Call for FREE Quote',
    note: 'Prices vary by service type and time',
  },
  {
    title: 'Diagnostics',
    Icon: MagnifyingGlassIcon,
    items: ['On-site diagnostics for vehicles that won\'t start'],
    cta: 'Call for FREE Quote',
    note: 'Prices vary by service type and time',
  },
  {
    title: 'Residential & Commercial Locksmithing',
    Icon: HomeIcon,
    items: ['Door Unlocking', 'Lock Repair', 'Replacement', 'Key Duplication'],
    cta: 'Call for FREE Quote',
    note: 'Prices vary by service type and time',
  },
  {
    title: 'Mobile Computer Diagnostics',
    Icon: ComputerDesktopIcon,
    items: ['OBD-II Scanning', 'Error Code Analysis', 'Engine Performance'],
    cta: 'Call for FREE Quote',
    note: 'Prices vary by service type and time',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              {/* Circular cyan icon container - matching screenshot */}
              <div className="w-24 h-24 mx-auto mb-6 bg-[#7dd3e8] rounded-full flex items-center justify-center">
                <service.Icon className="w-12 h-12 text-[#1a3a52]" />
              </div>
              
              <h3 className="text-xl font-bold text-[#1a3a52] mb-4">
                {service.title}
              </h3>
              
              <ul className="text-gray-600 mb-4 space-y-1">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              
              <p className="text-[#7dd3e8] font-semibold mb-2">
                {service.cta}
              </p>
              
              <p className="text-sm text-gray-500">
                {service.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
