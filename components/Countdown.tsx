"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2027-05-27T17:30:00");

function calcTime() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof calcTime> | null>(null);

  useEffect(() => {
    setTime(calcTime());
    const interval = setInterval(() => setTime(calcTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "dias", value: time?.days ?? 0 },
    { label: "horas", value: time?.hours ?? 0 },
    { label: "minutos", value: time?.minutes ?? 0 },
    { label: "segundos", value: time?.seconds ?? 0 },
  ];

  if (!time) return null;

  return (
    <div className="flex gap-6 justify-center my-4">
      {units.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center">
          <span className="text-4xl md:text-4xl lg:text-6xl font-light tracking-widest text-[#2c2c2c]">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-sm tracking-[0.2em] uppercase text-[#a08c6e] mt-5">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}