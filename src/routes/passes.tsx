import { createFileRoute } from "@tanstack/react-router";
import {
  QrCode,
  ShieldCheck,
  Clock,
  Copy,
  Calendar,
  MapPin,
  User,
  Sparkles,
} from "lucide-react";
import { QRCanvas } from "@/components/QRCanvas";

export const Route = createFileRoute("/passes")({
  head: () => ({
    meta: [
      { title: "Booking Pass QR Cards — GulpGo Design Lab" },
      {
        name: "description",
        content:
          "Three rendered variations of the booking pass QR card: the original layout plus two premium redesigns with perforated stubs and boarding-pass styling.",
      },
      { property: "og:title", content: "Booking Pass QR Cards — GulpGo Design Lab" },
      {
        property: "og:description",
        content:
          "Compare the original booking pass card against two refined, premium QR pass designs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PassesPage,
});

const qrTokens = ["GG-TKN-8471-AXQ2", "GG-TKN-5590-MZP7"];
const heldBookingIds = ["48219", "48220"];
const numericTokens = ["394 812", "770 145"];
const guests = ["Amelia Hart", "Ravi Nair"];
const slots = ["Thu 6 Aug · 09:30", "Thu 6 Aug · 11:00"];

function SectionHeader({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note: string;
}) {
  return (
    <div className="mb-10 text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        <Sparkles className="size-3.5 text-primary" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">{note}</p>
    </div>
  );
}

/* ---------------- Version 1 — original snippet ---------------- */
function OriginalPasses() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {qrTokens.map((token, i) => (
        <div
          key={token}
          className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-200"
        >
          <div className="bg-[color:var(--gold)] p-4 text-slate-900">
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">
              Booking Pass
            </div>
            <div className="mt-1 font-mono text-xl font-black">#{heldBookingIds[i]}</div>
          </div>

          <div className="flex justify-center p-6 pb-2">
            <QRCanvas value={token} size={180} />
          </div>

          <div className="pb-6 px-6 text-center text-slate-900">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Scan at reception
            </p>
          </div>

          {numericTokens[i] && (
            <div className="border-t border-dashed border-slate-200 bg-slate-50 p-4 text-center">
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                PIN Code
              </div>
              <div className="mt-1 font-mono text-2xl font-black tracking-[0.2em] text-slate-800">
                {numericTokens[i]}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------------- Version 2 — perforated ticket stub ---------------- */
function TicketStubPasses() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {qrTokens.map((token, i) => (
        <div
          key={token}
          className="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-card shadow-[0_24px_60px_-24px_color-mix(in_oklab,var(--primary)_35%,transparent)] transition-transform duration-300 hover:-translate-y-1"
        >
          {/* Header */}
          <div className="relative bg-[linear-gradient(135deg,var(--primary),var(--secondary))] px-6 py-5 text-primary-foreground">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                  Booking Pass
                </div>
                <div className="mt-1 font-mono text-2xl font-black leading-none">
                  #{heldBookingIds[i]}
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur">
                <ShieldCheck className="size-3" />
                Confirmed
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] font-medium opacity-90">
              <span className="inline-flex items-center gap-1.5">
                <User className="size-3.5" />
                {guests[i]}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                {slots[i]}
              </span>
            </div>
          </div>

          {/* Perforation */}
          <div className="relative h-6 bg-card">
            <div className="absolute left-0 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background" />
            <div className="absolute right-0 top-1/2 size-6 translate-x-1/2 -translate-y-1/2 rounded-full bg-background" />
            <div className="absolute inset-x-6 top-1/2 border-t-2 border-dashed border-border" />
          </div>

          {/* QR */}
          <div className="px-6 pb-6">
            <div className="rounded-2xl border border-border bg-muted/40 p-5">
              <div className="flex justify-center rounded-xl bg-white p-3 shadow-sm">
                <QRCanvas value={token} size={168} />
              </div>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                <QrCode className="size-3.5" />
                Scan at reception
              </p>
            </div>

            {numericTokens[i] && (
              <div className="mt-4 flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    PIN Code
                  </div>
                  <div className="mt-0.5 font-mono text-xl font-black tracking-[0.25em] text-foreground">
                    {numericTokens[i]}
                  </div>
                </div>
                <button
                  type="button"
                  aria-label={`Copy PIN ${numericTokens[i]}`}
                  onClick={() =>
                    navigator.clipboard?.writeText(numericTokens[i].replace(/\s/g, ""))
                  }
                  className="rounded-xl border border-border p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Copy className="size-4" />
                </button>
              </div>
            )}

            <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
              <Clock className="size-3.5" />
              Valid for 24 hours after issue
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Version 3 — dark boarding pass ---------------- */
function BoardingPassPasses() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {qrTokens.map((token, i) => (
        <div
          key={token}
          className="w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[oklch(0.21_0.04_260)] shadow-2xl"
        >
          <div className="flex">
            {/* Left: details */}
            <div className="flex-1 p-6">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--gold)]">
                <Sparkles className="size-3.5" />
                Booking Pass
              </div>

              <div className="mt-3 font-mono text-3xl font-black leading-none text-white">
                #{heldBookingIds[i]}
              </div>

              <dl className="mt-6 space-y-4">
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Guest
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-white">{guests[i]}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Slot
                  </dt>
                  <dd className="mt-0.5 text-sm font-semibold text-white">{slots[i]}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    Location
                  </dt>
                  <dd className="mt-0.5 flex items-center gap-1.5 text-sm font-semibold text-white">
                    <MapPin className="size-3.5 text-[color:var(--gold)]" />
                    Main Reception
                  </dd>
                </div>
              </dl>

              {numericTokens[i] && (
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    PIN Code
                  </div>
                  <div className="mt-0.5 font-mono text-lg font-black tracking-[0.3em] text-[color:var(--gold)]">
                    {numericTokens[i]}
                  </div>
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="relative w-0 border-l-2 border-dashed border-white/15">
              <div className="absolute -top-3 left-1/2 size-6 -translate-x-1/2 rounded-full bg-background" />
              <div className="absolute -bottom-3 left-1/2 size-6 -translate-x-1/2 rounded-full bg-background" />
            </div>

            {/* Right: QR stub */}
            <div className="flex w-[190px] flex-col items-center justify-center gap-4 bg-white/[0.03] p-5">
              <div className="rounded-2xl bg-white p-3 shadow-lg">
                <QRCanvas value={token} size={132} />
              </div>
              <p className="text-center text-[9px] font-bold uppercase leading-relaxed tracking-[0.2em] text-white/50">
                Scan at
                <br />
                reception
              </p>
              <div className="w-full rounded-full bg-[color:var(--gold)] py-1.5 text-center text-[9px] font-black uppercase tracking-[0.2em] text-slate-900">
                Admit One
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PassesPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Booking Pass QR Cards
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Your original card rendered live, plus two premium redesigns.
          </p>
        </header>

        <section className="mb-24">
          <SectionHeader
            eyebrow="Version 1"
            title="Original"
            note="Your snippet rendered as-is, with a working QR canvas."
          />
          <OriginalPasses />
        </section>

        <section className="mb-24">
          <SectionHeader
            eyebrow="Version 2"
            title="Perforated Ticket Stub"
            note="Gradient header with guest context, real perforation notches, framed QR, and a copyable PIN."
          />
          <TicketStubPasses />
        </section>

        <section>
          <SectionHeader
            eyebrow="Version 3"
            title="Dark Boarding Pass"
            note="Horizontal layout with a detachable QR stub, gold accents, and structured detail list."
          />
          <BoardingPassPasses />
        </section>
      </div>
    </main>
  );
}
