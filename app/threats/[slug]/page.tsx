import { notFound } from "next/navigation";
import { threatsData, getThreatBySlug } from "../threatsData";
import Section from "@/components/ui/Section";

export function generateStaticParams() {
  const params = [];
  for (let i = 0; i < threatsData.length; i++) {
    params.push({ slug: threatsData[i].slug });
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const threat = getThreatBySlug(slug);
  if (threat === null) {
    return { title: "Threat not found | Cyber Campaign" };
  }
  return {
    title: threat.title + " | Cyber Campaign",
    description: threat.def,
  };
}

export default async function ThreatDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const threat = getThreatBySlug(slug);

  if (threat === null) {
    notFound();
  }

  return (
    <Section className="pb-16">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-100">⚠️ {threat.title}</h1>
        <p className="mt-2 text-stone-500 text-sm"><strong className="text-stone-400">What it is:</strong> {threat.def}</p>
        <p className="mt-1 text-stone-500 text-sm"><strong className="text-stone-400">What to do:</strong> {threat.mitigate}</p>
      </div>

      <div className="space-y-6">
        {threat.content.map((block, i) =>
          i === 0 ? (
            <p key={i} className="text-stone-500 text-sm leading-relaxed">
              {block.body}
            </p>
          ) : (
            <article key={i} className="border-l-4 border-amber-500/50 bg-stone-900/40 pl-5 pr-5 py-4">
              {block.heading ? <h2 className="text-lg font-semibold text-stone-100 mb-2">🔒 {block.heading}</h2> : null}
              <p className="text-stone-500 text-sm leading-relaxed">{block.body}</p>
            </article>
          )
        )}
      </div>
    </Section>
  );
}
