export default function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--line))]">
      <div className="container-max font-mono-ui flex flex-col gap-3 py-8 text-[10px] uppercase tracking-[0.12em] text-[rgb(var(--muted))] md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Jeus Bausa</p>
        <p>Designed &amp; built with ❤️</p>
      </div>
    </footer>
  );
}
