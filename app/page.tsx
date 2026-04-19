import CalendarButtons from "@/components/CalendarButtons";
import Countdown from "@/components/Countdown";
import LocationButton from "@/components/LocationButton";
import LikeButton from "@/components/LikeButton";
import CommentSection from "@/components/CommentSection";

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

      <h1 className="font-parisienne text-6xl md:text-8xl text-[#2c2c2c] mb-2">
        Nadine <span className="text-[#a08c6e]">&</span> Matheus
      </h1>

      <div className="w-16 h-px bg-[#a08c6e] my-6" />

      <p className="text-3x1 md:text-3xl tracking-[0.4em] uppercase text-[#a08c6e] mb-4">
        Save the Date
      </p>

      <p className="text-3xl md:text-5xl tracking-widest uppercase text-[#2c2c2c] mb-2">
        27 · 05 · 2027
      </p>

      <div className="w-16 h-px bg-[#e5e0d8] my-6" />

      <Countdown />

      <div className="w-16 h-px bg-[#e5e0d8] my-6" />

      <LocationButton />

      <div className="w-16 h-px bg-[#e5e0d8] my-8" />

      <CalendarButtons />

      <div className="w-16 h-px bg-[#e5e0d8] my-8" />

      <div className="text-3xl md:text-5xl tracking-widest">
        
        <CommentSection />
        
      </div>

    </main>
  );
}