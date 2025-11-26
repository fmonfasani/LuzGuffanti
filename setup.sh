#!/bin/bash
echo "🏋️  Creando proyecto Personal Trainer Website..."

# 1️⃣ Crear proyecto Next.js
npx create-next-app@latest personal-trainer --typescript --turbopack --app --use-npm

cd personal-trainer

# 2️⃣ Instalar Tailwind 4 (nuevo formato)
npm install -D @tailwindcss/postcss

# 3️⃣ Crear estructura de carpetas
mkdir -p src/app/components

# 4️⃣ Configurar PostCSS
cat > postcss.config.js <<'EOF'
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
EOF

# 5️⃣ Crear globals.css
cat > src/app/globals.css <<'EOF'
@import "tailwindcss";

html, body {
  background-color: #0a0a0a;
  color: #f5f5f5;
  font-family: system-ui, sans-serif;
  margin: 0;
  padding: 0;
}

button {
  cursor: pointer;
}
EOF

# 6️⃣ Crear layout.jsx
cat > src/app/layout.jsx <<'EOF'
export const metadata = {
  title: "Personal Trainer - Lucas Fernández",
  description: "Entrenamiento personalizado, nutrición y coaching online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
EOF

# 7️⃣ Crear page.jsx
cat > src/app/page.jsx <<'EOF'
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <main className="bg-gray-900 text-white">
      <Hero />
      <About />
      <Services />
      <Plans />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
EOF

# 8️⃣ Crear componentes
cat > src/app/components/Hero.jsx <<'EOF'
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <img
        src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1920&h=1080&fit=crop"
        alt="Entrenamiento"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-6xl font-bold mb-4 text-yellow-400">
          TRANSFORMÁ TU CUERPO
        </h1>
        <p className="text-xl mb-8 text-gray-200">
          Entrenamientos personalizados, motivación real, resultados garantizados.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-4 rounded-full font-bold transition-all">
          EMPEZÁ HOY
        </button>
      </div>
    </section>
  );
}
EOF

cat > src/app/components/About.jsx <<'EOF'
export default function About() {
  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <img
          src="https://images.unsplash.com/photo-1579758629939-037fdd6ab669?w=800&h=800&fit=crop"
          alt="Personal Trainer"
          className="rounded-3xl shadow-xl object-cover"
        />
        <div>
          <h2 className="text-5xl font-bold mb-6 text-yellow-400">Sobre Mí</h2>
          <p className="text-lg text-gray-300 mb-4">
            Soy <span className="font-bold text-white">Lucas Fernández</span>,
            entrenador personal con más de 10 años ayudando a personas a
            transformar su cuerpo y mente mediante rutinas personalizadas.
          </p>
          <p className="text-lg text-gray-400">
            Mi misión es guiarte hacia tu mejor versión, sin importar tu nivel.
          </p>
        </div>
      </div>
    </section>
  );
}
EOF

cat > src/app/components/Services.jsx <<'EOF'
const services = [
  { title: "Entrenamiento Personalizado", desc: "Planes adaptados a tu nivel y objetivos.", icon: "🏋️‍♂️" },
  { title: "Nutrición", desc: "Guías alimenticias equilibradas para maximizar resultados.", icon: "🥗" },
  { title: "Online Coaching", desc: "Entrená desde cualquier lugar con seguimiento digital.", icon: "💻" },
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-yellow-400 mb-16">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div key={i} className="bg-gray-900 p-10 rounded-3xl hover:scale-105 transition-all">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF

cat > src/app/components/Plans.jsx <<'EOF'
const plans = [
  { name: "Básico", price: "$25.000", features: ["3 clases semanales", "Plan de alimentación", "Soporte por chat"] },
  { name: "Premium", price: "$45.000", features: ["5 clases semanales", "Plan personalizado", "Consultas ilimitadas"], highlight: true },
  { name: "Elite", price: "$70.000", features: ["Entrenamiento diario", "Plan 100% personalizado", "Acceso a comunidad VIP"] },
];

export default function Plans() {
  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-yellow-400 mb-16">Planes</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`p-10 rounded-3xl shadow-xl transition-all hover:scale-105 ${
                p.highlight
                  ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-gray-900"
                  : "bg-gray-800 text-white"
              }`}
            >
              <h3 className="text-3xl font-bold mb-4">{p.name}</h3>
              <p className="text-5xl font-light mb-8">{p.price}</p>
              <ul className="space-y-4 mb-8">
                {p.features.map((f, j) => (
                  <li key={j}>✓ {f}</li>
                ))}
              </ul>
              <button className="w-full py-4 bg-gray-900 hover:bg-gray-800 text-yellow-400 font-bold rounded-full transition-all">
                Elegir Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
EOF

cat > src/app/components/Testimonials.jsx <<'EOF'
export default function Testimonials() {
  const testimonials = [
    { name: "Ana", text: "Nunca me sentí tan bien. Lucas me ayudó a cambiar mi cuerpo y mi energía." },
    { name: "Federico", text: "Excelente profesional, muy motivador y atento al progreso." },
  ];

  return (
    <section className="py-24 px-6 bg-gray-800 text-center">
      <h2 className="text-5xl font-bold text-yellow-400 mb-16">Testimonios</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-900 p-8 rounded-3xl shadow-lg">
            <p className="text-gray-300 italic mb-6">“{t.text}”</p>
            <p className="font-bold text-yellow-400">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
EOF

cat > src/app/components/Contact.jsx <<'EOF'
export default function Contact() {
  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-yellow-400 mb-10">Contacto</h2>
        <form className="space-y-6">
          <input type="text" placeholder="Tu nombre" className="w-full px-6 py-4 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <input type="email" placeholder="Tu email" className="w-full px-6 py-4 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <textarea placeholder="Mensaje" rows="6" className="w-full px-6 py-4 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <button className="w-full py-4 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-all">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
EOF

cat > src/app/components/Footer.jsx <<'EOF'
export default function Footer() {
  return (
    <footer className="bg-black py-10 text-center text-gray-400 text-sm">
      <p>© 2025 Lucas Fernández | Personal Trainer. Todos los derechos reservados.</p>
    </footer>
  );
}
EOF

# ✅ Mensaje final
echo "✅ Proyecto creado correctamente."
echo "👉 Para iniciar:"
echo "   cd personal-trainer"
echo "   npm run dev"
echo "   Luego abrí http://localhost:3000"
