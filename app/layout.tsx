import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Response Time Budget Alerter',
  description: 'Alert when API responses exceed performance budgets. Monitor endpoints, track response times, and get notified instantly when thresholds are breached.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7e98c9d4-8c5d-403a-bf08-d533035aa2a7"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
