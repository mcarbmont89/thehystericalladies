import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'The Hysterical Ladies',
  description: 'Un spectacle de cabaret musical — Le Catalogue des Angoisses Sexuelles',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={montserrat.variable}>
      <body>
        <a href="#main" className="skip-link">Aller au contenu</a>
        {children}
      </body>
    </html>
  )
}
