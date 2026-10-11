import Image from 'next/image'
import type { Metadata } from 'next'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import SocialIconBar from '@/components/SocialIconBar'
import fr from '@/data/fr'

export const metadata: Metadata = {
  title: `Contact — ${fr.meta.title}`,
  description: 'Contactez Les Hysterical Ladies pour toute demande de programmation ou question sur nos tournées.',
}

export default function ContactPage() {
  const c = fr
  const ct = c.contact

  return (
    <>
      <NavBar links={c.nav} currentLang="fr" currentPath="/contact" />
      <main id="main" className="pt-nav">

        <section className="relative section-pad overflow-hidden">
          <div className="absolute inset-0 pointer-events-none select-none">
            <Image
              src="/images/contact-Yyv76eGb06SwQ1PL.png"
              alt="" fill className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-bg/75" />
          </div>
          <div className="relative z-10 content-wrap grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-8">
              <h1 className="text-display md:text-hero font-black text-text">{ct.heading}</h1>
              <ContactForm content={ct} />
            </div>

            <div className="flex flex-col gap-8 pt-0 md:pt-24">
              <address className="not-italic text-muted space-y-3 text-sm leading-relaxed">
                <p className="font-semibold text-text">{ct.manager}</p>
                <p>{ct.address}</p>
                <p>
                  <a href="tel:+447737135135" className="hover:text-text transition-colors">+44 7737 135135</a>
                  <br />
                  <a href="tel:+33688078873" className="hover:text-text transition-colors">+33 6 88 07 88 73</a>
                </p>
                <p>
                  <a href="mailto:manager@hystericalladies.net"
                    className="underline underline-offset-2 hover:text-text transition-colors">
                    manager@hystericalladies.net
                  </a>
                </p>
                <p className="text-xs text-muted/60">{ct.siret}</p>
              </address>

              <SocialIconBar />
            </div>
          </div>
        </section>

      </main>
      <Footer content={c} />
    </>
  )
}
