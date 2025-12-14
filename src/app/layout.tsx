import './globals.css'
import { Cormorant_Garamond, Karla } from 'next/font/google'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display' 
})

const karla = Karla({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body' 
})

export const metadata = {
  title: 'Luz Guffanti',
  description: 'Creadora de contenido · Storyteller visual',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${karla.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}