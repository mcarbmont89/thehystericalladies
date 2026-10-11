import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ReviewCard from '@/components/ReviewCard'
import EventCard from '@/components/EventCard'
import SocialIconBar from '@/components/SocialIconBar'
import StarRating from '@/components/StarRating'
import fr from '@/data/fr'

export const metadata: Metadata = {
  title: fr.meta.title,
  description: fr.meta.description,
}

export default function HomePage() {
  const c = fr
  const upcomingEvents = c.upcoming.events.filter(e => e.status === 'upcoming')

  return (
    <>
      <NavBar links={c.nav} currentLang="fr" currentPath="/" />

      <main id="main">

        {/* S01 — Hero: full red bg, pin-up fills right side, title overlaid */}
        <section aria-label="Présentation du spectacle" className="relative w-full pt-nav bg-accent overflow-hidden">
          <div className="relative w-full min-h-[55vw] md:min-h-[42vw]">
            <div className="absolute inset-0 flex flex-col justify-center z-0 pointer-events-none select-none pl-[3vw]">
              <p aria-hidden="true"
                className="font-display font-black italic uppercase leading-[0.9] text-black/25"
                style={{ fontSize: 'clamp(64px, 11vw, 160px)', width: '60%' }}>
                the catalogue of sexual anxieties
              </p>
              <p aria-hidden="true"
                className="font-display italic text-black/20 mt-3"
                style={{ fontSize: 'clamp(14px, 2vw, 28px)' }}>
                by The Hysterical Ladies
              </p>
            </div>
            <Image
              src="/images/vintage1-YX4bo89J9RcnnKDK.png"
              alt={c.home.heroAlt}
              fill priority
              className="object-contain object-right z-10"
              sizes="100vw"
            />
            <div className="absolute bottom-3 left-0 right-0 flex justify-start items-center gap-4 z-20 px-[3vw] pointer-events-none">
              {[
                { src: '/images/aha-A0xwab5eN0T27gQv.png',            alt: 'Au Haz Art', w: 'w-14' },
                { src: '/images/logospedidam-mxBZaNRo2DC2oVKN.png',    alt: 'Spedidam',   w: 'w-20' },
                { src: '/images/a8c6a51a-1335-4650-a7fa-c187f25e41b8-mxB7NGMq1gfQkx22.JPEG', alt: 'ADAMI', w: 'w-16' },
              ].map(logo => (
                <div key={logo.alt} className={`relative h-7 ${logo.w} opacity-80`}>
                  <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="96px" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* S02 — Taglines */}
        <section aria-label="Le spectacle" className="section-dark section-pad">
          <div className="content-wrap flex flex-col gap-8 items-center text-center">
            {c.home.taglines.map((t, i) => (
              <p key={i}
                className={`font-display italic text-text max-w-3xl
                  ${i === 0 ? 'text-xl md:text-display font-black' : 'text-lg md:text-xl font-bold text-muted'}`}>
                &ldquo;{t}&rdquo;
              </p>
            ))}
            <div className="flex flex-col items-center gap-2 mt-4">
              <StarRating rating={c.home.endorsement.rating} size="lg" />
              {c.home.endorsement.quote && (
                <p className="text-muted text-sm italic">{c.home.endorsement.quote}</p>
              )}
            </div>
          </div>
        </section>

        {/* S03 — Upcoming: pin-up as right-side background */}
        <section id="a-venir" aria-labelledby="upcoming-heading" className="relative section-red section-pad overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none select-none">
            <Image
              src="/images/web-site-the-hysterical-ladies-YZ9EVZWqD1CzJRp6.png"
              alt="" fill className="object-contain object-right"
              sizes="50vw"
            />
          </div>
          <div className="relative z-10 content-wrap">
            <div className="max-w-full md:max-w-[52%] flex flex-col gap-8">
              <h2 id="upcoming-heading" className="text-3xl md:text-display font-black text-on-accent">
                {c.home.sectionTitles.upcoming}
              </h2>
              {upcomingEvents.length > 0 ? (
                <div className="flex flex-col gap-6">
                  {upcomingEvents.map((e, i) => (
                    <EventCard key={i} event={e} ticketLabel={c.upcoming.ticketLabel} />
                  ))}
                </div>
              ) : (
                <p className="text-on-accent/80">{c.upcoming.stayTuned}</p>
              )}
              <Link href="/a-venir"
                className="self-start text-on-accent font-bold font-display italic text-lg
                           border-2 border-on-accent px-6 py-2 rounded-sm hover:bg-on-accent
                           hover:text-accent transition-colors duration-[200ms]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-accent focus-visible:ring-offset-2 focus-visible:ring-offset-accent">
                {c.home.upcomingCta} →
              </Link>
            </div>
          </div>
        </section>

        {/* S04 — Contribute: HelloAsso iframe + pin-up as right-side background */}
        <section aria-labelledby="contribute-heading" className="relative section-red section-pad overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none select-none">
            <Image
              src="/images/about-m5Kb3lQV8lFVQXQ5.png"
              alt="" fill className="object-contain object-right"
              sizes="50vw"
            />
          </div>
          <div className="relative z-10 content-wrap">
            <h2 id="contribute-heading"
              className="text-3xl md:text-display font-black text-on-accent underline decoration-2 underline-offset-4 mb-8 text-center md:text-left">
              {c.home.sectionTitles.contribute}
            </h2>
            <div className="max-w-full md:max-w-[50%] flex flex-col gap-4">
              <p className="text-on-accent/80 leading-relaxed">{c.home.contributeText}</p>
              <iframe
                id="haWidget"
                src="https://www.helloasso.com/associations/au-haz-art/formulaires/3/widget"
                title="Faire un don — HelloAsso"
                className="w-full rounded-sm bg-white"
                style={{ height: '460px', border: 'none' }}
                loading="lazy"
              />
              <a href="https://www.helloasso.com/associations/au-haz-art/formulaires/3"
                target="_blank" rel="noopener noreferrer"
                className="text-on-accent/60 text-xs underline hover:text-on-accent transition-colors">
                Ouvrir dans HelloAsso →
              </a>
            </div>
          </div>
        </section>

        {/* S05 — Overview/Aperçu: pin-up as right-side background */}
        <section aria-labelledby="overview-heading" className="relative section-dark section-pad overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-1/2 pointer-events-none select-none">
            <Image
              src="/images/about-mnl9OXko6lc4vond.png"
              alt="" fill className="object-contain object-right"
              sizes="50vw"
            />
          </div>
          <div className="relative z-10 content-wrap">
            <div className="max-w-full md:max-w-[50%] flex flex-col gap-6">
              <h2 id="overview-heading" className="text-3xl md:text-display font-black text-text">
                {c.home.sectionTitles.overview}
              </h2>
              <p className="text-muted leading-relaxed">
                Un spectacle musical où trois femmes explorent, avec humour et sans tabous, les mystères et les angoisses de la sexualité féminine.
              </p>
              <Link href="/apercu"
                className="self-start text-text font-bold font-display italic text-lg
                           border-2 border-text px-6 py-2 rounded-sm hover:bg-text
                           hover:text-bg transition-colors duration-[200ms]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text">
                Voir les photos →
              </Link>
            </div>
          </div>
        </section>

        {/* S06 — News preview */}
        <section aria-labelledby="news-heading" className="section-dark section-pad">
          <div className="content-wrap">
            <h2 id="news-heading" className="text-3xl md:text-display font-black text-text mb-10">
              {c.home.sectionTitles.news}
            </h2>
            {c.home.newsSubtitle && (
              <p className="text-muted text-sm mb-8 -mt-4">{c.home.newsSubtitle}</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.news.reviews.slice(0, 3).map((r, i) => (
                <ReviewCard key={i} review={r} />
              ))}
            </div>
            <div className="mt-10">
              <Link href="/actualites"
                className="font-bold font-display italic text-lg text-accent hover:opacity-80 transition-opacity">
                Toute la presse →
              </Link>
            </div>
          </div>
        </section>

        {/* S07 — Contact teaser: photo as full-section background */}
        <section aria-labelledby="contact-heading" className="relative section-pad overflow-hidden">
          <div className="absolute inset-0 pointer-events-none select-none">
            <Image
              src="/images/contact-Yyv76eGb06SwQ1PL.png"
              alt="" fill className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-bg/70" />
          </div>
          <div className="relative z-10 content-wrap">
            <div className="flex flex-col gap-6 max-w-lg">
              <h2 id="contact-heading" className="text-3xl md:text-display font-black text-text underline decoration-2 underline-offset-4">
                {c.home.sectionTitles.contact}
              </h2>
              <div className="text-muted space-y-1 text-sm">
                <p>
                  <a href="mailto:manager@hystericalladies.net"
                    className="hover:text-text transition-colors underline underline-offset-2">
                    manager@hystericalladies.net
                  </a>
                </p>
                <p>+44 7737 135135 · +33 6 88 07 88 73</p>
              </div>
              <SocialIconBar />
              <Link href="/contact"
                className="self-start text-text font-bold font-display italic text-lg
                           border-2 border-text px-6 py-2 rounded-sm hover:bg-text
                           hover:text-bg transition-colors duration-[200ms]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text">
                Écrire un message →
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer content={c} />
    </>
  )
}
