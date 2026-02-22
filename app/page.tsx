import Link from "next/link";
import Card from "@/components/ui/Card";

const topicPanels = [
  { href: "/domains", title: "Explore domains", description: "Network, application, cloud, and more.", icon: "🔐" },
  { href: "/threats", title: "Know the threats", description: "Malware, phishing, ransomware, and beyond.", icon: "⚠️" },
  { href: "/practices", title: "Best practices", description: "Passwords, 2FA, updates, and backups.", icon: "🔒" },
  { href: "/emerging", title: "Emerging tech", description: "AI, zero trust, supply chain security.", icon: "🔮" },
  { href: "/training", title: "Training", description: "Simulated environments and hands-on practice.", icon: "🎯" },
  { href: "/quiz", title: "Test yourself", description: "Multiple-choice quiz on cyber security.", icon: "📝" },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-stone-700/50">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-xs font-medium uppercase tracking-widest text-amber-500/90 mb-3">
            🔒 Cyber Campaign
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl">
            Learn cyber security 🔐
          </h1>
          <p className="mt-4 text-stone-500 max-w-lg">
            Domains, threats, best practices, and emerging tech—for students and anyone building a foundation.
          </p>
          <Link
            href="/domains"
            className="mt-8 inline-block px-5 py-2.5 text-sm font-medium text-[#0a0908] bg-amber-500 hover:bg-amber-400 transition-colors"
          >
            Explore topics
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topicPanels.map((panel) => (
            <Card
              key={panel.href}
              href={panel.href}
              title={panel.title}
              description={panel.description}
              icon={<span>{panel.icon}</span>}
            />
          ))}
        </div>
      </section>
    </>
  );
}
