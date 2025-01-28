import './globals.css'

export const metadata = {
  title: 'Sulla - Cryptocurrency Education',
  description: 'Learn about cryptocurrency and blockchain technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
