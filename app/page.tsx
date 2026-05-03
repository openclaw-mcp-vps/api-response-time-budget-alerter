export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Alert When APIs Exceed{' '}
          <span className="text-[#58a6ff]">Performance Budgets</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Monitor your API endpoints continuously, define response-time budgets, and get instant email or webhook alerts the moment a threshold is breached.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Monitoring — $19/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[['< 1 min', 'Setup time'], ['99.9%', 'Uptime SLA'], ['Real-time', 'Alerts']].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-bold text-xl">{val}</div>
              <div className="text-[#8b949e] text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            ['⏱', 'Budget Thresholds', 'Set per-endpoint ms budgets. Get alerted the instant a response exceeds your limit.'],
            ['📬', 'Email & Webhooks', 'Receive alerts via email or POST to any webhook — Slack, PagerDuty, Discord.'],
            ['📊', 'Performance Dashboard', 'Visualise p50/p95/p99 response times and spot regressions at a glance.'],
          ].map(([icon, title, desc]) => (
            <div key={title}>
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-[#8b949e] text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-4">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Up to 50 monitored endpoints',
              'Check intervals from 1 minute',
              'Custom response-time budgets',
              'Email + webhook alerts',
              'p50 / p95 / p99 metrics',
              'Alert history & audit log',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            [
              'How does monitoring work?',
              'Our background workers send HTTP requests to your endpoints at your chosen interval (as often as every minute) and record the response time. If the response time exceeds your budget, an alert is fired immediately.',
            ],
            [
              'What alert channels are supported?',
              'You can receive alerts via email and/or HTTP webhooks. Webhooks work with any service that accepts a POST request — Slack, PagerDuty, Discord, or your own systems.',
            ],
            [
              'Can I cancel anytime?',
              'Yes. Cancel your subscription at any time from your billing portal. You keep access until the end of the billing period with no questions asked.',
            ],
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#21262d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-xs">
        © {new Date().getFullYear()} API Response Time Budget Alerter. All rights reserved.
      </footer>
    </main>
  )
}
