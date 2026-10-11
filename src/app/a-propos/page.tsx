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

        {/* Show description hero */}
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

        {/* Notre Histoire */}
        {a.historyParagraphs && a.historyParagraphs.length > 0 && (
          <section aria-labelledby="history-heading" className="section-dark section-pad border-t border-border">
            <div className="content-wrap max-w-3xl">
              <h2 id="history-heading" className="text-display font-black text-text mb-10">
                {a.historyHeading ?? 'Notre Histoire'}
              </h2>
              <div className="flex flex-col gap-6">
                {a.historyParagraphs.map((p, i) => (
                  <p key={i} className="text-muted leading-relaxed text-base">{p}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Notre Équipe — Performers */}
        <section aria-labelledby="performers-heading" className="section-red section-pad">
          <div className="content-wrap">
            <h2 id="performers-heading" className="text-display font-black text-on-accent mb-10">
              Notre Équipe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {a.performers.map(p => (
                <article key={p.name} className="flex flex-col gap-3">
                  {p.photo && (
                    <div className="relative w-full aspect-square rounded-sm overflow-hidden">
                      <Image src={p.photo} alt={p.name} fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                  )}
                  <h3 className="text-xl font-black text-on-accent">{p.name}</h3>
                  <p className="text-sm font-semibold text-on-accent/70 uppercase tracking-wide">{p.role}</p>
                  {p.bio && <p className="text-on-accent/80 leading-relaxed text-sm">{p.bio}</p>}
                </article>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {a.crew.map(m => (
                <div key={m.name} className="bg-accent/80 border border-on-accent/20 rounded-sm overflow-hidden">
                  {m.photo && (
                    <div className="relative w-full aspect-video">
                      <Image src={m.photo} alt={m.name} fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    </div>
                  )}
                  <div className="p-4">
                    <p className="font-semibold text-on-accent">{m.name}</p>
                    <p className="text-sm text-on-accent/70 mt-1">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-on-accent/70">
              <span className="font-semibold text-on-accent">{a.associationLabel} :</span>{' '}
              {a.associationPerson}
            </p>
          </div>
        </section>

      </main>
      <Footer content={c} />
    </>
  )
}
