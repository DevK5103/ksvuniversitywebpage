import React from 'react';

const marchNews = [
  { date: 'March 19, 2026', content: 'News details coming soon.' },
  { date: 'March 18, 2026', content: 'News details coming soon.' },
  { date: 'March 17, 2026', content: 'News details coming soon.' },
  { date: 'March 15, 2026', content: 'News details coming soon.' },
  { date: 'March 11, 2026', content: 'News details coming soon.' },
  { date: 'March 9, 2026', content: 'News details coming soon.' },
  { date: 'March 5, 2026', content: 'News details coming soon.' },
];

export default function PubNewsSection() {
  return (
    <section className="py-24 bg-ksv-light min-h-[400px]">
      <div className="max-w-[900px] mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-ksv-primary mb-6 text-center">March 2026 News</h2>
        <div className="w-20 h-1 bg-ksv-secondary mx-auto rounded-full mb-8"></div>
        <ul className="space-y-6">
          {marchNews.map((item, idx) => (
            <li key={idx} className="bg-ksv-white rounded-radius-md border border-ksv-border p-6 shadow-card">
              <div className="font-heading font-bold text-lg text-ksv-primary mb-2">{item.date}</div>
              <div className="font-body text-ksv-dark/80 text-base">{item.content}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
