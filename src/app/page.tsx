'use client';

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { clsx } from "clsx";

const heroVideo =
  "https://cdn.coverr.co/videos/coverr-students-walking-on-campus-3204/1080p.mp4";

const highlights = [
  {
    title: "94%",
    subtitle: "Graduate Employment",
    copy: "Our graduates launch careers at visionary companies and leading research labs worldwide.",
  },
  {
    title: "#3",
    subtitle: "Global Innovation Index",
    copy: "Ranked among the world's most innovative universities for six consecutive years.",
  },
  {
    title: "140+",
    subtitle: "Future-Facing Programs",
    copy: "Curated pathways across quantum computing, climate science, design futures, and more.",
  },
];

const narrative = [
  {
    title: "Reimagined Learning",
    description:
      "Collaborative studios replace lectures. Interdisciplinary squads build solutions that push beyond the hypothetical.",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Research Without Boundaries",
    description:
      "From neural interfaces to sustainable cities, our labs prototype the systems that will define tomorrow.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "A Campus Alive with Energy",
    description:
      "Experience a campus designed for serendipity—immersive galleries, living labs, and night studios open around the clock.",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1400&q=80",
  },
];

const programs = [
  {
    title: "School of Future Systems",
    description:
      "Explore quantum architectures, autonomous systems, and advanced robotics alongside industry pioneers.",
    focus: ["Quantum Engineering", "Synthetic Intelligence", "Adaptive Robotics"],
  },
  {
    title: "College of Planetary Futures",
    description:
      "Design regenerative cities, resilient supply chains, and climate-positive economies rooted in equity.",
    focus: ["Climate Intelligence", "Circular Economies", "GeoDesign"],
  },
  {
    title: "Nova Design Lab",
    description:
      "Where storytelling meets technology. Craft immersive experiences, spatial computing interfaces, and future media.",
    focus: ["Spatial Design", "Immersive Media", "Human Experience Futures"],
  },
];

const experiences = [
  {
    label: "Arrival",
    headline: "Orientation from Above",
    body: "Begin your journey with a sky-level arrival: an immersive widescreen experience that introduces the Nova ethos.",
  },
  {
    label: "Explore",
    headline: "The Discovery Loop",
    body: "Traverse a series of micro-campuses connected by autonomous shuttles, each curated for experimentation.",
  },
  {
    label: "Belong",
    headline: "Communities of Practice",
    body: "Join guilds of makers, strategists, artists, and scientists collaborating on challenges that matter.",
  },
];

function SectionContainer({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={clsx(
        "mx-auto w-full max-w-6xl px-6 py-20 md:px-12 md:py-28",
        className,
      )}
    >
      {children}
    </section>
  );
}

function ParallaxPanel({
  image,
  headline,
  copy,
  reverse = false,
}: {
  image: string;
  headline: string;
  copy: string;
  reverse?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={ref}
      className={clsx(
        "relative flex flex-col gap-12 overflow-hidden rounded-[32px] bg-white/70 shadow-2xl backdrop-blur-xl transition-all duration-700 md:flex-row",
        reverse && "md:flex-row-reverse",
      )}
    >
      <motion.div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
        }}
        className="relative flex h-72 w-full shrink-0 overflow-hidden md:h-auto md:w-1/2"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent" />
      </motion.div>
      <div className="relative z-10 flex w-full flex-col gap-5 px-10 pb-12 pt-12 md:w-1/2 md:pb-12">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-muted">
          Nova Perspective
        </span>
        <h3 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
          {headline}
        </h3>
        <p className="max-w-xl text-lg leading-relaxed text-muted">{copy}</p>
        <button className="group relative w-fit overflow-hidden rounded-full border border-black/5 bg-white/70 px-7 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-foreground transition-all duration-500 hover:border-transparent hover:bg-foreground hover:text-white">
          <span className="relative z-10">Experience it</span>
          <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-transform duration-500 group-hover:translate-y-0" />
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <header className="fixed inset-x-0 top-0 z-40 flex justify-center pt-7">
        <div className="glass flex w-[calc(100%-3rem)] items-center justify-between rounded-full px-8 py-4">
          <Link
            href="#"
            className="font-display text-lg font-semibold tracking-[0.3em] uppercase text-foreground"
          >
            Nova University
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted md:flex">
            <Link className="transition hover:text-foreground" href="#programs">
              Programs
            </Link>
            <Link className="transition hover:text-foreground" href="#experience">
              Experience
            </Link>
            <Link className="transition hover:text-foreground" href="#research">
              Research
            </Link>
            <Link className="transition hover:text-foreground" href="#visit">
              Visit
            </Link>
          </nav>
          <Link
            href="#apply"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-foreground/85"
          >
            Apply
          </Link>
        </div>
      </header>

      <main className="flex flex-col">
        <section className="relative flex min-h-screen items-end overflow-hidden bg-background">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            playsInline
            loop
            muted
            poster="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1600&q=80"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-background-alt/70 via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent" />
          <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-32 md:px-12 md:pb-40">
            <motion.span
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-sm font-semibold uppercase tracking-[0.6em] text-white/80"
            >
              Where Visionaries Converge
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl leading-[1.05] text-white md:text-7xl"
            >
              Sculpt the future with bold ideas and immersive collaboration.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
              className="max-w-xl text-lg text-white/80 md:text-xl"
            >
              Nova University is a premium institution for next-generation leaders,
              where technology, design, and humanity align to rewrite what&apos;s
              possible.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="#apply"
                className="group relative flex items-center gap-3 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-foreground transition"
              >
                Begin Application
                <span className="h-px w-8 bg-foreground/60 transition-all group-hover:w-12" />
              </Link>
              <Link
                href="#visit"
                className="glass flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white"
              >
                Schedule Immersion
              </Link>
            </motion.div>
          </div>
        </section>

        <SectionContainer className="relative -mt-24">
          <div className="grid gap-6 rounded-[32px] bg-white/70 p-10 shadow-xl backdrop-blur-xl md:grid-cols-3">
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex flex-col gap-4 rounded-3xl border border-white/40 bg-white/40 p-6 shadow-lg"
              >
                <span className="font-display text-5xl text-gradient">
                  {item.title}
                </span>
                <span className="text-sm font-semibold uppercase tracking-[0.4em] text-muted">
                  {item.subtitle}
                </span>
                <p className="text-base leading-relaxed text-muted">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer id="programs" className="space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-xl space-y-4">
              <span className="text-sm font-semibold uppercase tracking-[0.5em] text-muted">
                Programs
              </span>
              <h2 className="font-display text-5xl leading-[1.1] text-foreground">
                Curated pathways designed for the frontiers of tomorrow.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-muted">
              Guided by industry innovators and research luminaries, each program
              blends rigor with experimentation—equipping you to respond to the
              challenges of a rapidly shifting world.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between rounded-[28px] border border-white/40 bg-white/60 p-8 shadow-lg transition-transform duration-700 hover:-translate-y-2"
              >
                <div className="space-y-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.6em] text-muted">
                    Signature School
                  </span>
                  <h3 className="font-display text-3xl text-foreground">
                    {program.title}
                  </h3>
                  <p className="text-base leading-relaxed text-muted">
                    {program.description}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {program.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-accent/20 bg-accent-soft px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer id="experience" className="space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-xl space-y-4">
              <span className="text-sm font-semibold uppercase tracking-[0.5em] text-muted">
                Immersive Story
              </span>
              <h2 className="font-display text-5xl leading-[1.1] text-foreground">
                A choreographed journey from your first step on campus.
              </h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-muted">
              Every detail is intentional. The architecture, the lighting, the
              interactive exhibits—each invites exploration and dialogue.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass flex flex-col gap-4 rounded-[28px] p-8"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.5em] text-muted">
                  {experience.label}
                </span>
                <h3 className="font-display text-2xl text-foreground">
                  {experience.headline}
                </h3>
                <p className="text-base leading-relaxed text-muted">
                  {experience.body}
                </p>
              </motion.article>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer id="research" className="space-y-14">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.5em] text-muted">
              Research Ecosystems
            </span>
            <h2 className="font-display text-5xl leading-[1.1] text-foreground md:max-w-3xl">
              Parallax journeys through our living laboratories.
            </h2>
          </motion.div>
          <div className="space-y-14">
            {narrative.map((item, index) => (
              <ParallaxPanel
                key={item.title}
                image={item.image}
                headline={item.title}
                copy={item.description}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </SectionContainer>

        <div
          id="visit"
          className="relative flex min-h-[65vh] items-center justify-center overflow-hidden bg-background-alt"
        >
          <div
            className="absolute inset-0 bg-fixed bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1900&q=80)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background-alt/80 via-background-alt/65 to-background-alt/30" />
          <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-6 text-center text-white md:px-12">
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-sm font-semibold uppercase tracking-[0.6em] text-white/70"
            >
              Visit Nova
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl leading-tight md:text-5xl"
            >
              Schedule an immersion day and step into the pulse of a future-ready
              campus.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="max-w-2xl text-base leading-relaxed text-white/80"
            >
              Guided explorations include collaborative studio sessions, research
              briefings, and an evening showcase from our student founders at the
              Nova Launchpad.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                href="#apply"
                className="rounded-full bg-white/15 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-white/25"
              >
                Book a Visit
              </Link>
              <Link
                href="#programs"
                className="rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-white/15"
              >
                Explore Pathways
              </Link>
            </motion.div>
          </div>
        </div>

        <SectionContainer id="apply" className="space-y-10">
          <div className="glass relative overflow-hidden rounded-[32px] px-10 py-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
            >
              <div className="max-w-xl space-y-4">
                <span className="text-sm font-semibold uppercase tracking-[0.5em] text-muted">
                  Admissions 2025
                </span>
                <h3 className="font-display text-4xl text-foreground md:text-5xl">
                  Ready to craft the next chapter of possibility?
                </h3>
                <p className="text-base leading-relaxed text-muted">
                  Join a community of creators, scientists, strategists, and
                  storytellers shaping breakthrough impact. Rolling admissions open
                  now for Spring and Fall cohorts.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Link
                  href="https://apply.novauniversity.example"
                  className="rounded-full bg-foreground px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-foreground/85"
                >
                  Start Application
                </Link>
                <span className="text-center text-xs uppercase tracking-[0.4em] text-muted">
                  Scholarships | Global Campuses | Executive Pathways
                </span>
              </div>
            </motion.div>
            <div className="pointer-events-none absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-purple-500/5 blur-3xl" />
          </div>
        </SectionContainer>
      </main>

      <footer className="relative mt-12 border-t border-white/40 bg-white/60 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-12">
          <div>
            <h4 className="font-display text-2xl text-foreground">
              Nova University
            </h4>
            <p className="text-sm uppercase tracking-[0.4em] text-muted">
              Imagining what&apos;s next since 2046
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-muted">
            <Link href="#programs" className="transition hover:text-foreground">
              Academic Pathways
            </Link>
            <Link href="#research" className="transition hover:text-foreground">
              Research Labs
            </Link>
            <Link href="#visit" className="transition hover:text-foreground">
              Global Campuses
            </Link>
            <Link href="#apply" className="transition hover:text-foreground">
              Admissions
            </Link>
          </div>
          <span className="text-xs uppercase tracking-[0.4em] text-muted">
            © {new Date().getFullYear()} Nova University
          </span>
        </div>
      </footer>
    </div>
  );
}
