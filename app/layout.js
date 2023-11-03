import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WordpressReacts ',
  description: 'This is my first wordpress and reactjs project. I am using Nextjs 13, reatsjs, tailwind css and wordpress as my backend i.e. CMS and api',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
