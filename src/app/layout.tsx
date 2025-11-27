import './globals.css'
import { Inter, Oswald } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export const metadata = {
  title: 'Luz Guffanti',
  description: 'Creadora de contenido · Storyteller visual',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${oswald.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
