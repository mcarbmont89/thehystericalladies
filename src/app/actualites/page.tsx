import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ReviewCard from '@/components/ReviewCard'
import fr from '@/data/fr'

export const metadata: Metadata = {
  title: `Actualités — ${fr.meta.title}`,
  description: 'Revue de presse du Catalogue des Angoisses Sexuelles — critiques et articles.',
}

const INTERVIEW_VIDEOS = [
  { id: 'fQqDxsOr7rU', title: 'Global News Interview' },
  { id: 'jk6OQQ8Br-g', title: 'Media Lunch Interview — 9 août 2023' },
]

// TODO: add Spotify track ID when available
// const SPOTIFY_TRACK_ID = ''

export default function NewsPage() {
  const c = fr
  const n = c.news

  return (
    <>
      <NavBar links={c.nav} currentLang="fr" currentPath="/actualites" />
      <main id="main" className="pt-nav">

        {/* Interview videos — dark */}
        <section className="section-dark section-pad">
          <div className="content-wrap">
            <h1 className="text-display md:text-hero font-black text-text mb-12">{n.heading}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {INTERVIEW_VIDEOS.map(v => (
                <div key={v.id}>
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
                  <p className="text-muted text-sm mt-2 italic">{v.title}</p>
                </div>
              ))}
            </div>

            {/* Press reviews */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {n.reviews.map((r, i) => (
                <ReviewCard key={i} review={r} />
              ))}
            </div>
          </div>
        </section>

        {/* Spotify embed placeholder — add SPOTIFY_TRACK_ID when known */}
        {/* <section className="section-dark pb-16">
          <div className="content-wrap max-w-2xl mx-auto">
            <iframe
              src={`https://open.spotify.com/embed/track/${SPOTIFY_TRACK_ID}?utm_source=generator`}
              title="The Catalogue of Sexual Anxieties — The Hysterical Ladies"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="w-full rounded-xl"
              style={{ height: '352px', border: 'none' }}
            />
          </div>
        </section> */}

      </main>
      <Footer content={c} />
    </>
  )
}
