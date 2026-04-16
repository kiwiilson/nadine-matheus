import CalendarButtons from "@/components/CalendarButtons";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">

      <p className="text-sm tracking-[0.3em] uppercase text-[#a08c6e] mb-2">
        N &amp; M
      </p>

      <p className="text-sm italic text-gray-400 max-w-md mb-10 leading-relaxed">
        "Para que todos vejam, saibam, considerem e juntamente entendam que a mão do Senhor fez isso."
        <br />
        <span className="not-italic">Isaías 41:20</span>
      </p>

      <h1 className="text-5xl md:text-7xl font-light tracking-wide text-[#2c2c2c] mb-2">
        Nadine <span className="text-[#a08c6e]">&</span> Matheus
      </h1>

      <div className="w-16 h-px bg-[#a08c6e] my-6" />

      <p className="text-xs tracking-[0.4em] uppercase text-[#a08c6e] mb-4">
        Save the Date
      </p>

      <p className="text-3xl md:text-4xl tracking-widest text-[#2c2c2c] mb-2">
        27 · 05 · 2027
      </p>
      <p className="text-base text-gray-500 mb-1">às 17h30</p>
      <p className="text-sm text-gray-400 mb-10">
        Espaço Italia · Estrada da Roseira, 5500 · Apolinário
      </p>

      <CalendarButtons />

      <div className="w-16 h-px bg-[#e5e0d8] my-12" />

      <div className="text-center text-gray-400 text-sm">
        <p className="tracking-widest uppercase text-xs mb-2 text-[#a08c6e]">
          Deixe uma mensagem
        </p>
        <p className="italic text-gray-300">
          Em breve — estamos preparando algo especial para vocês.
        </p>
      </div>

    </main>
  );
}