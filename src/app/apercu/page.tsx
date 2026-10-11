import Image from 'next/image'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import fr from '@/data/fr'

export const metadata: Metadata = {
  title: `Aperçu — ${fr.meta.title}`,
  description: 'Galerie photos du Catalogue des Angoisses Sexuelles — Essaïon, White Bear, Skirts of Fire, Edmonton.',
}

const VIDEOS = [
  { id: 'cOFvMe6AwqA', title: 'Sneaky Peek' },
  { id: 'TPJbJD22Rl4', title: 'Short Teaser' },
  { id: 'GJFuTStdB4s', title: 'Preparation for Sex' },
]

export default function GalleryPage() {
  const c = fr
  const g = c.gallery

  return (
    <>
      <NavBar links={c.nav} currentLang="fr" currentPath="/apercu" />
      <main id="main" className="pt-nav">

        <section className="section-dark section-pad">
          <div className="content-wrap">
            <h1 className="text-display md:text-hero font-black text-text mb-4">{g.heading}</h1>
            {g.subtitle && (
              <p className="text-muted text-lg leading-relaxed mb-12">{g.subtitle}</p>
            )}

            {/* Photo gallery */}
            <div className="flex flex-col gap-16">
              {g.groups.map(group => (
                <div key={`${group.venue}-${group.year}`}>
                  <h2 className="text-xl font-bold text-muted mb-6 font-sans not-italic">
                    {group.venue} <span className="text-border-input">·</span> {group.year}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {group.photos.map((photo, i) => (
                      <div key={i} className="relative aspect-square bg-surface rounded-sm overflow-hidden">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          loading="lazy"
                          className="object-cover hover:scale-105 transition-transform duration-[350ms]"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Video embeds */}
            <div className="mt-20">
              <h2 className="text-display font-black text-text mb-8">Vidéos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {VIDEOS.map(v => (
                  <div key={v.id} className="flex flex-col gap-3">
                    <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-surface">
                      <iframe
                        src={`https://www.youtube.com/embed/${v.id}`}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                    <p className="text-sm font-semibold text-muted italic">{v.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom illustration */}
            <div className="mt-16 relative h-64 md:h-80">
              <Image
                src="/images/about-d95gkZDa01i4O2q7.png"
                alt="Illustration vintage — aperçu"
                fill
                className="object-contain object-right"
                sizes="100vw"
              />
            </div>
          </div>
        </section>

      </main>
      <Footer content={c} />
    </>
  )
}
