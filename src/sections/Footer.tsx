export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 text-center text-sm">
        {/* Mini emotion line */}
        <div className="flex gap-2 mb-2" aria-hidden>
          {['#FFD93D', '#FF6B6B', '#4D96FF', '#6BCB77', '#9D4EDD'].map((c) => (
            <span
              key={c}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
        <p>© 2026 UNO das Emoções · Todos os direitos reservados</p>
        <p className="text-slate-400">
          Feito com <span className="text-anger">❤</span> para psicólogas,
          psicopedagogas, educadoras e famílias.
        </p>
      </div>
    </footer>
  );
}
