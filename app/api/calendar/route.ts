import { NextResponse } from "next/server";

export async function GET() {
  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nadine & Matheus//Save the Date//PT
BEGIN:VEVENT
UID:nadine-matheus-2027@savethedate
DTSTAMP:20260101T000000Z
DTSTART:20270527T173000
DTEND:20270527T220000
SUMMARY:Casamento Nadine & Matheus
LOCATION:Espaço Italia - Estrada da Roseira\\, 5500\\, Apolinário
DESCRIPTION:Venha celebrar conosco!
END:VEVENT
END:VCALENDAR`;

  return new NextResponse(ics, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="nadine-matheus.ics"',
    },
  });
}