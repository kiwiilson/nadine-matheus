import CalendarButtons from "@/components/CalendarButtons";
import Countdown from "@/components/Countdown";
import LocationButton from "@/components/LocationButton";
import LikeButton from "@/components/LikeButton";
import CommentSection from "@/components/CommentSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center">

      <p className="text-sm lg:text-base tracking-[0.3em] uppercase text-[#a08c6e] mb-2">
        N &amp; M
      </p>

      <p className="text-sm lg:text-base italic text-gray-400 max-w-md mb-10 leading-relaxed">
        "Para que todos vejam, saibam, considerem e juntamente entendam que a mão do Senhor fez isso."
        <br />
        <span className="not-italic">Isaías 41:20</span>
      </p>

      <h1 className="font-parisienne text-6xl md:text-8xl lg:text-9xl text-[#2c2c2c] mb-2 whitespace-nowrap">
        Nadine <span className="text-[#a08c6e]">&amp;</span> Matheus
      </h1>

      <div className="w-16 h-px bg-[#a08c6e] my-6" />

      <p className="text-3xl md:text-4xl lg:text-7xl tracking-widest text-[#2c2c2c] mb-2">
        Save the Date
      </p>

      <p className="text-3xl md:text-4xl lg:text-7xl tracking-widest text-[#2c2c2c] mb-2">
        27 · 05 · 2027
      </p>

      <div className="w-16 h-px bg-[#e5e0d8] my-6" />

      <Countdown />

      <div className="w-16 h-px bg-[#e5e0d8] my-6" />

      <LocationButton />

      <div className="w-16 h-px bg-[#e5e0d8] my-8" />

      <CalendarButtons />

      <div className="w-16 h-px bg-[#e5e0d8] my-8" />

      <div className="text-3xl md:text-4xl tracking-widest">
        
        <CommentSection />

      </div>
      </div>
    </main>
  );
}