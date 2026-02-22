import Section from "@/components/ui/Section";

const practices = [
  "It is widely recommended that individuals use strong, unique passwords—or a reputable password manager—and enable two-factor authentication (2FA) wherever it is supported.",
  "Keeping software, operating systems, and devices updated and applying security patches in a timely manner is commonly cited as one of the most effective ways to reduce exposure to known vulnerabilities.",
  "Backing up important data regularly and testing restores is often emphasised; where feasible, at least one copy should be kept offline or in an immutable format to protect against ransomware.",
  "The principle of least privilege suggests that accounts and users should be granted only the access they need to perform their role; this is frequently discussed as a way to limit the impact of compromise.",
  "The use of encryption for sensitive data at rest and in transit (for example, TLS and full-disk encryption) is generally recommended in both academic and industry sources.",
  "Building security awareness—including the ability to recognise phishing, social engineering, and safe browsing and email habits—is often presented as an important complement to technical controls.",
  "Sources typically advise caution with links and attachments; verifying senders and URLs before clicking or opening is commonly recommended.",
  "Securing the home network (for example, with a strong Wi‑Fi password, an updated router, and a separate guest network where possible) is frequently mentioned as a basic but important step for individuals.",
];

export const metadata = {
  title: "Cyber Security Best Practices | Cyber Campaign",
  description: "An overview of recommended cyber security practices: strong passwords, 2FA, updates, backups, least privilege, encryption, and awareness.",
};

export default function PracticesPage() {
  return (
    <Section className="pb-16">
      <h1 className="text-2xl font-bold text-stone-100 mb-1">🔒 Best Practices</h1>
      <p className="text-stone-500 text-sm mb-8 max-w-2xl">
        Practices commonly recommended in the literature and by security professionals—as an overview, not an exhaustive list.
      </p>
      <ul className="space-y-3">
        {practices.map((item, i) => (
          <li
            key={i}
            className="flex gap-3 border-l-4 border-amber-500/50 bg-stone-900/40 pl-4 pr-4 py-3"
          >
            <span className="shrink-0 text-base">🔒</span>
            <span className="text-stone-500 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
