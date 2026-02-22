import { notFound } from "next/navigation";
import { domainsData, getDomainBySlug } from "../domainsData";
import Section from "@/components/ui/Section";

export function generateStaticParams() {
  const params = [];
  for (let i = 0; i < domainsData.length; i++) {
    params.push({ slug: domainsData[i].slug });
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const domain = getDomainBySlug(slug);
  if (domain === null) {
    return { title: "Domain not found | Cyber Campaign" };
  }
  return {
    title: domain.title + " | Cyber Campaign",
    description: domain.shortDescription,
  };
}

export default async function DomainDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const domain = getDomainBySlug(slug);

  if (domain === null) {
    notFound();
  }

  return (
    <Section className="pb-16">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-100">🔐 {domain.title}</h1>
        <p className="mt-2 text-stone-500 text-sm">{domain.shortDescription}</p>
      </div>

      <div className="space-y-6">
        {domain.content.map((block, i) =>
          i === 0 ? (
            <p key={i} className="text-stone-500 text-sm leading-relaxed">
              {block.body}
            </p>
          ) : (
            <article key={i} className="border-l-4 border-amber-500/50 bg-stone-900/40 pl-5 pr-5 py-4">
              {block.heading ? <h2 className="text-lg font-semibold text-stone-100 mb-2">🔐 {block.heading}</h2> : null}
              <p className="text-stone-500 text-sm leading-relaxed">{block.body}</p>
            </article>
          )
        )}
      </div>
    </Section>
  );
}
