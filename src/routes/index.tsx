import { createFileRoute } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Bell,
  Building2,
  CalendarClock,
  ChartBar,
  ChartLine,
  ClipboardCheck,
  Clock,
  CreditCard,
  Droplet,
  
  Factory,
  Gauge,
  GraduationCap,
  Home,
  Layers,
  MapPin,
  MessageSquareWarning,
  Navigation,
  PartyPopper,
  PhoneCall,
  Repeat,
  Route as RouteIcon,
  Send,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  Truck,
  Users,
  Wallet,
  Warehouse,
  type LucideIcon,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

/* ------------------------------------------------------------------ */
/* Shared building blocks                                              */
/* ------------------------------------------------------------------ */

type Tone = "primary" | "secondary" | "accent" | "amber";

const toneBox: Record<Tone, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/15 text-secondary-foreground",
  accent: "bg-accent-alt/10 text-accent-alt",
  amber: "bg-amber/15 text-amber-foreground",
};

const tones: Tone[] = ["primary", "secondary", "accent", "amber"];

function IconBox({
  icon: Icon,
  tone = "primary",
  className,
}: {
  icon: LucideIcon;
  tone?: Tone;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
        toneBox[tone],
        className,
      )}
    >
      <Icon className="h-6 w-6" strokeWidth={2} />
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold text-primary shadow-soft">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function Section({
  children,
  tint,
  className,
  id,
}: {
  children: React.ReactNode;
  tint?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-5 py-20 sm:py-28",
        tint ? "bg-tint" : "bg-background",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  intro,
  center = true,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={cn("flex flex-col gap-4", center && "items-center text-center")}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {intro && (
        <p className={cn("max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg")}>
          {intro}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Nav                                                                 */
/* ------------------------------------------------------------------ */

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
            <Droplet className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">GulpGo</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#why" className="transition-colors hover:text-foreground">Why GulpGo</a>
          <a href="#roles" className="transition-colors hover:text-foreground">Roles</a>
          <a href="#features" className="transition-colors hover:text-foreground">Features</a>
          <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex">Sign in</Button>
          <Button className="bg-gradient-primary text-primary-foreground shadow-soft hover:opacity-90">
            Book a Demo
          </Button>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* 1. Hero                                                             */
/* ------------------------------------------------------------------ */

const heroTable: { icon: LucideIcon; tone: Tone; feature: string; benefit: string }[] = [
  { icon: Smartphone, tone: "primary", feature: "Branded customer app", benefit: "Your customers order water under your own brand, anytime." },
  { icon: Truck, tone: "secondary", feature: "Driver app", benefit: "Drivers get optimized routes, orders, and digital delivery." },
  { icon: Gauge, tone: "accent", feature: "Admin dashboard", benefit: "Run your whole operation from one central control panel." },
  { icon: ClipboardCheck, tone: "amber", feature: "Digital proof of delivery", benefit: "Capture signatures and photos — no more paper disputes." },
  { icon: Repeat, tone: "primary", feature: "Subscription plans", benefit: "Automate recurring deliveries and predictable revenue." },
];

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-16 sm:pt-24">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-center">
        <Eyebrow>Built for Water Delivery Businesses</Eyebrow>
        <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">
          Water Delivery Software Built for{" "}
          <span className="text-gradient">Faster Orders, Smarter Routes,</span> and Better Customer Experience
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Run your bottled water, drinking water, or bulk water delivery business from one simple
          platform. GulpGo helps you manage orders, routes, drivers, payments, subscriptions, and
          complaints — without manual errors.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-90"
          >
            Book a Free Demo
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-border bg-card">
            See How It Works
          </Button>
        </div>
      </div>

      <div className="relative mx-auto mt-14 w-full max-w-4xl rounded-3xl border border-border bg-card p-2 shadow-elegant">
        <div className="rounded-[1.35rem] bg-tint/60 p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between px-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Feature
            </p>
            <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              What it does for you
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {heroTable.map((row) => (
              <div
                key={row.feature}
                className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-card p-4 shadow-soft sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-3">
                  <IconBox icon={row.icon} tone={row.tone} className="h-10 w-10 rounded-xl" />
                  <span className="font-semibold">{row.feature}</span>
                </div>
                <span className="text-sm text-muted-foreground sm:max-w-sm sm:text-right">
                  {row.benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. Why                                                              */
/* ------------------------------------------------------------------ */

const whyBenefits: { icon: LucideIcon; label: string }[] = [
  { icon: Send, label: "Accept orders faster" },
  { icon: MapPin, label: "Assign by zone" },
  { icon: Navigation, label: "Track drivers" },
  { icon: Wallet, label: "Manage wallets" },
  { icon: ShieldCheck, label: "Reduce missed orders" },
  { icon: MessageSquareWarning, label: "Handle complaints" },
  { icon: Repeat, label: "Improve repeat sales" },
  { icon: ChartBar, label: "See analytics clearly" },
];

function WhySection() {
  return (
    <Section id="why" tint>
      <SectionHeader
        eyebrow="The Real Problem"
        title="Why Water Delivery Businesses Need Better Software"
        intro="Phone calls, WhatsApp messages, and paper records work when you have ten customers. At scale they turn into missed orders, wrong deliveries, unpaid balances, and frustrated customers you can't track."
      />
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {whyBenefits.map((b, i) => (
          <div
            key={b.label}
            className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform hover:-translate-y-1"
          >
            <IconBox icon={b.icon} tone={tones[i % tones.length]} />
            <span className="text-sm font-semibold leading-snug">{b.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-90">
          Start Managing Deliveries Smarter
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. Roles (tabs)                                                    */
/* ------------------------------------------------------------------ */

type RoleFeature = { icon: LucideIcon; title: string; desc: string };

const roleData: Record<string, RoleFeature[]> = {
  customer: [
    { icon: Smartphone, title: "One-tap reordering", desc: "Customers reorder their usual water in seconds from your branded app." },
    { icon: CalendarClock, title: "Scheduled deliveries", desc: "Let customers pick delivery days and windows that suit them." },
    { icon: Wallet, title: "Wallet & balance", desc: "Prepaid wallets and clear balances remove cash-on-delivery friction." },
    { icon: Bell, title: "Live notifications", desc: "Order confirmations, driver-on-the-way alerts, and delivery updates." },
    { icon: Repeat, title: "Subscriptions", desc: "Customers subscribe once and receive water automatically." },
    { icon: MessageSquareWarning, title: "Raise complaints", desc: "Report issues in-app and track resolution without phone tag." },
  ],
  driver: [
    { icon: RouteIcon, title: "Optimized routes", desc: "Drivers follow the fastest sequence and skip guesswork." },
    { icon: ClipboardCheck, title: "Proof of delivery", desc: "Capture photos and signatures at every stop." },
    { icon: Navigation, title: "Turn-by-turn nav", desc: "Built-in navigation to every customer address." },
    { icon: CreditCard, title: "Collect payments", desc: "Record cash, wallet, or digital payments on the spot." },
    { icon: Layers, title: "Load management", desc: "See exactly how many bottles to load for the day." },
    { icon: Clock, title: "Daily task list", desc: "A clear, ordered list of the day's deliveries and returns." },
  ],
  supplier: [
    { icon: Gauge, title: "Central dashboard", desc: "Monitor orders, drivers, and revenue from one screen." },
    { icon: MapPin, title: "Zone assignment", desc: "Assign orders to drivers by delivery zone automatically." },
    { icon: Users, title: "Customer management", desc: "Full customer profiles, history, and balances in one place." },
    { icon: ChartLine, title: "Analytics & reports", desc: "Track sales, retention, and driver performance clearly." },
    { icon: Settings2, title: "Product & pricing", desc: "Manage bottle types, prices, and deposits with ease." },
    { icon: BadgeCheck, title: "White-label branding", desc: "Ship the whole platform under your own name and logo." },
  ],
};

const roleTabs = [
  { value: "customer", label: "Customer App", icon: Smartphone },
  { value: "driver", label: "Driver App", icon: Truck },
  { value: "supplier", label: "Supplier Dashboard", icon: Gauge },
];

function RolesSection() {
  return (
    <Section id="roles">
      <SectionHeader
        eyebrow="Every Role Covered"
        title="Built for Customers, Drivers, and Suppliers"
      />
      <Tabs defaultValue="customer" className="mt-12 w-full">
        <TabsList className="mx-auto flex h-auto w-full max-w-xl flex-wrap justify-center gap-2 rounded-2xl bg-tint p-2">
          {roleTabs.map((t) => (
            <TabsTrigger
              key={t.value}
              value={t.value}
              className="flex-1 gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold data-[state=active]:bg-card data-[state=active]:text-primary data-[state=active]:shadow-soft"
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(roleData).map(([key, features]) => (
          <TabsContent key={key} value={key} className="mt-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
                >
                  <IconBox icon={f.icon} tone={tones[i % tones.length]} />
                  <div>
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. Bulk delivery                                                    */
/* ------------------------------------------------------------------ */

const bulkRows: { icon: LucideIcon; tone: Tone; type: string; help: string }[] = [
  { icon: Building2, tone: "primary", type: "Corporate offices", help: "Standing weekly orders, per-floor drop-offs, and consolidated monthly invoices." },
  { icon: GraduationCap, tone: "secondary", type: "Schools & colleges", help: "Scheduled bulk supply to multiple blocks with approval workflows." },
  { icon: PartyPopper, tone: "accent", type: "Events & venues", help: "One-off high-volume orders with precise delivery windows and returns tracking." },
  { icon: Factory, tone: "amber", type: "Factories & plants", help: "Recurring large-volume drops with dedicated drivers and zone routing." },
  { icon: Warehouse, tone: "primary", type: "Distributors", help: "Wholesale pricing tiers, credit terms, and reorder automation." },
  { icon: Store, tone: "secondary", type: "Retail & restaurants", help: "Reliable daily replenishment with digital proof and easy account billing." },
];

function BulkSection() {
  return (
    <Section tint>
      <SectionHeader
        eyebrow="High-Volume Operations"
        title="Bulk Water Delivery Software"
        intro="Serving offices, schools, and events means bigger orders, more stops, and higher expectations. GulpGo handles high-volume operations so nothing slips through the cracks."
      />
      <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
          <div className="hidden bg-tint px-6 py-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground sm:block">
            Business type
          </div>
          <div className="hidden bg-tint px-6 py-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground sm:block">
            How the software helps
          </div>
          {bulkRows.map((row) => (
            <div key={row.type} className="contents">
              <div className="flex items-center gap-3 bg-card px-6 py-5">
                <IconBox icon={row.icon} tone={row.tone} className="h-10 w-10 rounded-xl" />
                <span className="font-semibold">{row.type}</span>
              </div>
              <div className="flex items-center bg-card px-6 py-5 text-sm leading-relaxed text-muted-foreground">
                {row.help}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* 5. Key features grid                                                */
/* ------------------------------------------------------------------ */

const keyFeatures: RoleFeature[] = [
  { icon: Send, title: "Smart order management", desc: "Accept, edit, and route orders from every channel in one queue." },
  { icon: RouteIcon, title: "Route optimization", desc: "Auto-sequence stops to cut fuel, time, and missed deliveries." },
  { icon: Navigation, title: "Live driver tracking", desc: "See every driver on the map and share ETAs with customers." },
  { icon: Wallet, title: "Wallets & payments", desc: "Prepaid wallets, digital payments, and automatic reconciliation." },
  { icon: Repeat, title: "Subscriptions", desc: "Recurring orders that run themselves and boost retention." },
  { icon: ClipboardCheck, title: "Digital proof of delivery", desc: "Photos and signatures logged against every completed stop." },
  { icon: MessageSquareWarning, title: "Complaint handling", desc: "Structured tickets so no customer issue goes unanswered." },
  { icon: MapPin, title: "Zone-based dispatch", desc: "Assign orders by area to the right driver automatically." },
  { icon: ChartLine, title: "Analytics & reports", desc: "Revenue, retention, and performance insights at a glance." },
  { icon: BadgeCheck, title: "White-label branding", desc: "Your logo, your colors, your app — powered by GulpGo." },
];

function FeaturesSection() {
  return (
    <Section id="features">
      <SectionHeader
        eyebrow="Key Features"
        title="Key Features of Our Water Delivery Software"
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {keyFeatures.map((f, i) => (
          <div
            key={f.title}
            className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
          >
            <IconBox icon={f.icon} tone={tones[i % tones.length]} />
            <div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* 6. How it works                                                    */
/* ------------------------------------------------------------------ */

const steps: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: PhoneCall, title: "Customer places an order", desc: "Through your branded app or website, customers order water in a few taps — one-off or on subscription." },
  { icon: MapPin, title: "Order is assigned by zone", desc: "GulpGo automatically routes the order to the right driver based on delivery area and load." },
  { icon: Truck, title: "Driver delivers with the app", desc: "Drivers follow optimized routes, navigate to each stop, and update status in real time." },
  { icon: ClipboardCheck, title: "Delivery is confirmed digitally", desc: "Proof of delivery — photo, signature, and payment — is captured and synced instantly." },
  { icon: Activity, title: "You track everything live", desc: "Monitor orders, revenue, and performance from one dashboard and act on clear analytics." },
];

function HowItWorks() {
  return (
    <Section tint>
      <SectionHeader eyebrow="The Process" title="How the Water Delivery Software Works" />
      <div className="mt-14 flex flex-col gap-8">
        {steps.map((s, i) => {
          const reversed = i % 2 === 1;
          return (
            <div
              key={s.title}
              className={cn(
                "flex flex-col items-center gap-6 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8 md:flex-row md:gap-10",
                reversed && "md:flex-row-reverse",
              )}
            >
              <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant">
                <s.icon className="h-10 w-10" />
                <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-accent-alt text-sm font-bold text-accent-alt-foreground">
                  {i + 1}
                </span>
              </div>
              <div className={cn("text-center md:text-left", reversed && "md:text-right")}>
                <h3 className="text-xl font-semibold sm:text-2xl">{s.title}</h3>
                <p className="mt-2 max-w-xl text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* 7. Industries                                                       */
/* ------------------------------------------------------------------ */

const industries: { icon: LucideIcon; label: string }[] = [
  { icon: Home, label: "Residential" },
  { icon: Building2, label: "Offices" },
  { icon: Store, label: "Restaurants" },
  { icon: GraduationCap, label: "Schools" },
  { icon: PartyPopper, label: "Events" },
  { icon: Users, label: "Housing societies" },
  { icon: Factory, label: "Industrial" },
  { icon: MapPin, label: "Multi-city" },
];

function IndustriesSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Built to Grow"
        title="Built for Local and Growing Water Delivery Businesses"
        intro="Whether you deliver to a single neighborhood or scale across multiple cities, GulpGo grows with you — the same platform serves your first hundred customers and your next hundred thousand."
      />
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {industries.map((ind, i) => (
          <span
            key={ind.label}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold shadow-soft transition-transform hover:-translate-y-0.5"
          >
            <span className={cn("flex h-7 w-7 items-center justify-center rounded-full", toneBox[tones[i % tones.length]])}>
              <ind.icon className="h-4 w-4" />
            </span>
            {ind.label}
          </span>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button size="lg" className="bg-gradient-primary text-primary-foreground shadow-elegant hover:opacity-90">
          Grow Your Water Delivery Business
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* 8. FAQ                                                              */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    q: "What is water delivery software?",
    a: "Water delivery software is a platform that manages your entire delivery operation — customer orders, driver routes, payments, subscriptions, and proof of delivery — from one place, replacing phone calls, WhatsApp, and paper records.",
  },
  {
    q: "Is GulpGo really white-label?",
    a: "Yes. The customer app, driver app, and dashboard all carry your brand, logo, and colors. Your customers experience your business — GulpGo runs quietly in the background.",
  },
  {
    q: "Can I manage subscriptions and recurring orders?",
    a: "Absolutely. Customers can subscribe to recurring deliveries, and GulpGo automatically generates orders, assigns drivers, and handles billing on schedule.",
  },
  {
    q: "Does it work for bulk and B2B customers?",
    a: "Yes. GulpGo supports high-volume orders, zone-based dispatch, wholesale pricing tiers, credit terms, and consolidated invoicing for offices, schools, factories, and distributors.",
  },
  {
    q: "How do drivers use the platform?",
    a: "Drivers get a dedicated app with optimized routes, turn-by-turn navigation, load lists, payment collection, and digital proof of delivery for every stop.",
  },
  {
    q: "What payment options are supported?",
    a: "You can accept prepaid wallets, digital payments, and cash on delivery, with automatic reconciliation so balances always stay accurate.",
  },
  {
    q: "How long does it take to get started?",
    a: "Most businesses are up and running quickly. After a demo we configure your branding, products, and zones, then onboard your team — no technical setup required on your side.",
  },
];

function FaqSection() {
  return (
    <Section id="faq" tint>
      <SectionHeader eyebrow="FAQs" title="Frequently Asked Questions" />
      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 shadow-soft"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* 9. Final CTA                                                        */
/* ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section className="px-5 py-20 sm:py-24">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-dark px-6 py-16 text-center shadow-elegant sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
            <Droplet className="h-3.5 w-3.5" />
            GulpGo
          </span>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Ready to Upgrade Your Water Delivery Business?
          </h2>
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">
            Join the water delivery businesses running faster orders, smarter routes, and happier
            customers on GulpGo. See it in action or talk to our team today.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="bg-white text-primary shadow-soft hover:bg-white/90">
              Book a Free Demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Talk to Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background px-5 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
            <Droplet className="h-4 w-4" />
          </div>
          <span className="font-bold text-foreground">GulpGo</span>
        </div>
        <p>© {new Date().getFullYear()} GulpGo. White-label water delivery software.</p>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <RolesSection />
        <BulkSection />
        <FeaturesSection />
        <HowItWorks />
        <IndustriesSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
