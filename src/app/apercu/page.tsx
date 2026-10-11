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
  { id: 'GJFuTStdB4s', title: 'The Catalogue of Sexual Anxieties — Preparation For Sex' },
  { id: 'TPJbJD22Rl4', title: 'Teaser Paris — le catalogue des anxiétés sexuelles' },
  { id: 'cOFvMe6AwqA', title: 'Sneaky Peek' },
]

export default function GalleryPage() {
  const c = fr
  const g = c.gallery

  return (
    <>
      <NavBar links={c.nav} currentLang="fr" currentPath="/apercu" />
      <main id="main" className="pt-nav">

        {/* Videos + Gallery — red background */}
        <section className="section-red section-pad">
          <div className="content-wrap">
            <h1 className="text-display md:text-hero font-black text-on-accent mb-4 underline decoration-2 underline-offset-4">
              {g.heading}
            </h1>
            {g.subtitle && (
              <p className="text-on-accent/80 text-lg leading-relaxed mb-12">{g.subtitle}</p>
            )}

            {/* YouTube videos */}
            <div className="flex flex-col gap-8 mb-16">
              {VIDEOS.map(v => (
                <div key={v.id}>
                  <div className="relative w-full aspect-video rounded-sm overflow-hidden bg-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                  <p className="text-on-accent/70 text-sm mt-2 italic">{v.title}</p>
                </div>
              ))}
            </div>

            {/* Photo gallery */}
            <div className="flex flex-col gap-12">
              {g.groups.map(group => (
                <div key={`${group.venue}-${group.year}`}>
                  <h2 className="text-lg font-bold text-on-accent mb-4">
                    {group.venue} <span className="text-on-accent/50">·</span> {group.year}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {group.photos.map((photo, i) => (
                      <div key={i} className="relative aspect-square bg-black/20 rounded-sm overflow-hidden">
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
          </div>
        </section>

      </main>
      <Footer content={c} />
    </>
  )
}
