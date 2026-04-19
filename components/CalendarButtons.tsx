"use client";

const event = {
  title: "Casamento Nadine & Matheus",
  date: "20270527",
  timeStart: "173000",
  timeEnd: "220000",
  location: "Espaço Italia - Estrada da Roseira, 5500, Apolinário",
  details: "Venha celebrar conosco!",
};

function googleCalendarUrl() {
  const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  const params = new URLSearchParams({
    text: event.title,
    dates: `${event.date}T${event.timeStart}/${event.date}T${event.timeEnd}`,
    location: event.location,
    details: event.details,
  });
  return `${base}&${params.toString()}`;
}

export default function CalendarButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <a
        href={googleCalendarUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="px-10 py-4 border border-[#a08c6e] text-[#a08c6e] text-sm lg:text-base tracking-widest uppercase hover:bg-[#a08c6e] hover:text-white transition-all duration-200"
      >
        Marcar no Calendário
      </a>
    </div>
  );
}