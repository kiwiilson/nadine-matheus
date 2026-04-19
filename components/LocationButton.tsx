export default function LocationButton() {
  const address = "Estrada da Roseira, 5500, Apolinário, RS";
  const encoded = encodeURIComponent(address);

  const googleUrl = `https://maps.google.com/?q=${encoded}`;

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-lg text-gray-400">
        Espaço Italia · Estrada da Roseira, 5500 · Apolinário
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 border border-[#a08c6e] text-[#a08c6e] text-xs tracking-widest uppercase hover:bg-[#a08c6e] hover:text-white transition-all duration-200"
        >
          Ver No Mapa
        </a>
      </div>
    </div>
  );
}