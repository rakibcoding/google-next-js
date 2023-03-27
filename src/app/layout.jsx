import './globals.css'

export const metadata = {
  title: 'Google Next-JS',
  description: 'Using Next-JS 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
