import React from 'react';

export default function Portfolio() {
  const portfolioItems = [
    { type: 'video', title: 'Campaña París 2024' },
    { type: 'photo', title: 'Serie Tokio' },
    { type: 'video', title: 'Documental Barcelona' },
    { type: 'photo', title: 'Editorial NYC' },
    { type: 'video', title: 'Proyecto Roma' },
    { type: 'photo', title: 'Sesión Londres' },
  ];

  return (
    <div className="min-h-screen py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-light text-center text-gray-900 mb-20">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              className="group relative aspect-[4/5] bg-gradient-to-br from-violet-300 via-rose-300 to-pink-300 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                {item.type === 'video' ? '🎬' : '📷'}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white text-xl font-light">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
