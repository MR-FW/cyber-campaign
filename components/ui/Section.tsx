export default function Section(props: { title?: string; children: React.ReactNode; className?: string }) {
  const title = props.title;
  const children = props.children;
  const className = props.className || "";

  return (
    <section className={"mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 " + className}>
      {title ? <h2 className="text-2xl font-semibold text-white mb-6">{title}</h2> : null}
      {children}
    </section>
  );
}
