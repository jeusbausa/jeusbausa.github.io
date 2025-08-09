export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/80 mt-16">
      <div className="container-max py-8 text-sm text-slate-600 dark:text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Jeus Bausa</p>
        <p>Designed & built with ❤️</p>
      </div>
    </footer>
  );
}
