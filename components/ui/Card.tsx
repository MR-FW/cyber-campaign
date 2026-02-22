import Link from "next/link";

export default function Card(props: { href: string; title: string; description?: string; icon?: React.ReactNode; className?: string }) {
  const href = props.href;
  const title = props.title;
  const description = props.description;
  const icon = props.icon;
  const className = props.className || "";

  return (
    <Link
      href={href}
      className={
        "group block border-l-4 border-amber-500/70 bg-stone-900/40 pl-5 pr-5 py-5 transition-colors hover:bg-stone-800/50 " +
        className
      }
    >
      {icon ? (
        <div className="mb-2.5 text-amber-500/90 text-lg">
          {icon}
        </div>
      ) : null}
      <h3 className="text-base font-semibold text-stone-100 group-hover:text-amber-400/90 transition-colors">{title}</h3>
      {description ? (
        <p className="mt-1 text-sm text-stone-500 group-hover:text-stone-400 transition-colors">{description}</p>
      ) : null}
    </Link>
  );
}
