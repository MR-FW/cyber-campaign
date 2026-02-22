import Link from "next/link";
import { threatsData } from "./threatsData";
import Section from "@/components/ui/Section";

const threatEmoji: Record<string, string> = {
  malware: "🦠",
  phishing: "🎣",
  ransomware: "🔐",
  "social-engineering": "🎭",
  ddos: "⚡",
  "data-breaches": "📂",
  "insider-threats": "👤",
  apts: "🎯",
};

export const metadata = {
  title: "Cyber Security Threats | Cyber Campaign",
  description: "Understand major cyber threats: malware, phishing, ransomware, social engineering, DDoS, data breaches, insider threats, and APTs.",
};

export default function ThreatsPage() {
  return (
    <Section className="pb-16">
      <h1 className="text-2xl font-bold text-stone-100 mb-1">⚠️ Cyber Security Threats</h1>
      <p className="text-stone-500 text-sm mb-8 max-w-2xl">
        Common threats and how they are discussed in practice—so you can recognise risks and take steps to reduce them.
      </p>

      <div className="space-y-4">
        {threatsData.map((t) => (
          <Link
            key={t.slug}
            href={"/threats/" + t.slug}
            className="block border-l-4 border-amber-500/70 bg-stone-900/40 pl-5 pr-5 py-4 transition-colors hover:bg-stone-800/50"
          >
            <h2 className="text-lg font-semibold text-stone-100 mb-1"><span>{threatEmoji[t.slug] ?? "🔒"}</span> {t.title}</h2>
            <p className="text-stone-500 text-sm mb-1"><strong className="text-stone-400">What it is:</strong> {t.def}</p>
            <p className="text-stone-500 text-sm"><strong className="text-stone-400">What to do:</strong> {t.mitigate}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
