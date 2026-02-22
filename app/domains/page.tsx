import Link from "next/link";
import { domainsData } from "./domainsData";
import Section from "@/components/ui/Section";

const domainEmoji: Record<string, string> = {
  "network-security": "🌐",
  "application-security": "💻",
  "cloud-security": "☁️",
  "endpoint-security": "📱",
  "iot-security": "📟",
  "data-security": "🗄️",
  iam: "🔑",
};

export const metadata = {
  title: "Domains of Cyber Security | Cyber Campaign",
  description: "Learn about the main domains of cyber security: network, application, cloud, endpoint, IoT, data, and IAM.",
};

export default function DomainsPage() {
  return (
    <Section className="pb-16">
      <h1 className="text-2xl font-bold text-stone-100 mb-1">🔐 Domains of Cyber Security</h1>
      <p className="text-stone-500 text-sm mb-8 max-w-2xl">
        Cyber security is often described as comprising several overlapping domains. This page gives an overview of each so you can see how the field is structured.
      </p>

      <div className="space-y-4">
        {domainsData.map((d) => (
          <Link
            key={d.slug}
            href={"/domains/" + d.slug}
            className="block border-l-4 border-amber-500/70 bg-stone-900/40 pl-5 pr-5 py-4 transition-colors hover:bg-stone-800/50"
          >
            <h2 className="text-lg font-semibold text-stone-100 mb-1"><span>{domainEmoji[d.slug] ?? "🔒"}</span> {d.title}</h2>
            <p className="text-stone-500 text-sm leading-relaxed">{d.shortDescription}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
