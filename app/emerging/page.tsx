import Section from "@/components/ui/Section";

const topics = [
  {
    title: "AI in security",
    body: "Artificial intelligence and machine learning are increasingly discussed in the context of both defence (for example, detecting anomalies and automating response) and offence (for example, deepfakes and automated phishing). An understanding of both applications is often considered important for evaluating the capabilities and limitations of security tools and for assessing emerging risks.",
  },
  {
    title: "Zero trust",
    body: "Zero trust is a security model that assumes no user or device is trusted by default. Access is verified continuously and limited to what is needed for the task. In the literature, identity, device health, and the principle of least privilege are typically presented as central to zero-trust architectures.",
  },
  {
    title: "Supply chain security",
    body: "Supply chain security addresses risks that arise from third-party software, services, and hardware. Attacks that target suppliers can potentially affect many downstream victims. Common recommendations include assessing vendors, using signed or verified artifacts where possible, and monitoring for signs of compromise in the supply chain.",
  },
  {
    title: "Privacy-enhancing technologies",
    body: "Privacy-enhancing technologies are techniques that aim to protect privacy while still allowing some form of analysis or processing; examples often cited include differential privacy, federated learning, and confidential computing. These topics are frequently discussed in relation to the growth of data collection and the increasing role of regulation.",
  },
];

export const metadata = {
  title: "Emerging Cyber Technologies | Cyber Campaign",
  description: "An overview of emerging technologies and approaches in cyber security: AI, zero trust, supply chain security, and privacy-enhancing technologies.",
};

export default function EmergingPage() {
  return (
    <Section className="pb-16">
      <h1 className="text-2xl font-bold text-stone-100 mb-1">🔮 Emerging Cyber Technologies</h1>
      <p className="text-stone-500 text-sm mb-8 max-w-2xl">
        Technologies and approaches that are shaping both how organisations defend themselves and how they may be attacked—a starting point for further reading.
      </p>
      <div className="space-y-6">
        {topics.map((t) => (
          <article key={t.title} className="border-l-4 border-amber-500/50 bg-stone-900/40 pl-5 pr-5 py-4">
            <h2 className="text-lg font-semibold text-stone-100 mb-2">🔐 {t.title}</h2>
            <p className="text-stone-500 text-sm leading-relaxed">{t.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
