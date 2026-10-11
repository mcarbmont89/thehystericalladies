import Image from 'next/image'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import fr from '@/data/fr'

export const metadata: Metadata = {
  title: `À propos — ${fr.meta.title}`,
  description: fr.about.intro,
}

export default function AboutPage() {
  const c = fr
  const a = c.about

  return (
    <>
      <NavBar links={c.nav} currentLang="fr" currentPath="/a-propos" />
      <main id="main" className="pt-nav">

        {/* Show description — dark */}
        <section className="section-dark section-pad">
          <div className="content-wrap grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <h1 className="text-display md:text-hero font-black text-text">{a.heading}</h1>
              {(a.showDescription ?? [a.intro]).map((p, i) => (
                <p key={i} className="text-muted leading-relaxed text-base">{p}</p>
              ))}
            </div>
            <div className="relative h-80 md:h-[480px]">
              <Image
                src="/images/about-YBg4X2DB0PUBPl1W.png"
                alt="Charlotte Szabo, Marion Poli et Aniqa Charania sur scène"
                fill
                className="object-cover object-center rounded-md"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Notre Histoire — red with pin-up background */}
        {a.historyParagraphs && a.historyParagraphs.length > 0 && (
          <section aria-labelledby="history-heading" className="section-red section-pad relative overflow-hidden">
            {/* Background pin-up illustration */}
            <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none z-0 opacity-30">
              <Image
                src="/images/vintage1-YX4bo89J9RcnnKDK.png"
                alt=""
                fill
                className="object-contain object-bottom"
                sizes="100vw"
              />
            </div>
            <div className="content-wrap max-w-3xl relative z-10">
              <h2 id="history-heading" className="text-display font-black text-on-accent mb-10 underline decoration-2 underline-offset-4">
                {a.historyHeading ?? 'Notre Histoire'}
              </h2>
              <div className="flex flex-col gap-6">
                {a.historyParagraphs.map((p, i) => (
                  <p key={i} className="text-on-accent/90 leading-relaxed text-base">{p}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Notre Équipe — dark */}
        <section aria-labelledby="performers-heading" className="section-dark section-pad">
          <div className="content-wrap">
            <h2 id="performers-heading" className="text-display font-black text-text mb-10">
              Notre Équipe
            </h2>

            {/* Performers — 3 cols */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
              {a.performers.map(p => (
                <article key={p.name} className="relative rounded-sm overflow-hidden bg-surface aspect-square">
                  {p.photo ? (
                    <Image src={p.photo} alt={p.name} fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  ) : (
                    <div className="w-full h-full bg-surface" />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-accent px-3 py-2">
                    <p className="font-black text-on-accent text-sm leading-tight">{p.name}</p>
                    <p className="text-on-accent/80 text-xs italic">{p.role}</p>
                  </div>
                </article>
              ))}
            </div>

            {/* Crew — 3 cols */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {a.crew.map(m => (
                <div key={m.name} className="relative rounded-sm overflow-hidden bg-surface aspect-square">
                  {m.photo ? (
                    <Image src={m.photo} alt={m.name} fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                  ) : (
                    <div className="w-full h-full bg-surface" />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-accent px-3 py-2">
                    <p className="font-black text-on-accent text-sm leading-tight">{m.name}</p>
                    <p className="text-on-accent/80 text-xs italic">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer content={c} />
    </>
  )
}
