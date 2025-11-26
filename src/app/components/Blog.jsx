import React from 'react';

export default function Blog() {
  const posts = [
    { title: 'Cómo construir tu marca personal en 2025', date: '15 Oct 2025', image: '📸' },
    { title: 'Las mejores locaciones para contenido', date: '22 Oct 2025', image: '🌍' },
    { title: 'Tendencias visuales que dominan', date: '30 Oct 2025', image: '✨' },
    { title: 'Mi viaje creativo por Europa', date: '5 Nov 2025', image: '🎬' },
  ];

  return (
    <div className="min-h-screen py-24 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-light text-center text-gray-900 mb-20">Blog</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {posts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-rose-200 to-violet-200 rounded-2xl mb-6 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform">
                {post.image}
              </div>
              <p className="text-sm text-gray-500 mb-2 font-light">{post.date}</p>
              <h3 className="text-2xl font-light text-gray-900 group-hover:text-rose-500 transition-colors">{post.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
