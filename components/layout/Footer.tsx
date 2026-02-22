import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/domains", label: "Domains" },
  { href: "/threats", label: "Threats" },
  { href: "/practices", label: "Practices" },
  { href: "/emerging", label: "Emerging" },
  { href: "/training", label: "Training" },
  { href: "/quiz", label: "Quiz" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-700/50 bg-[#0a0908] mt-auto">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <p className="text-center text-sm text-stone-500">
          🔒 Cyber Campaign — educational resource on cyber security.
        </p>
        <nav className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-1">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-stone-500 hover:text-amber-400 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
