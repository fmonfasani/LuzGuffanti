import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create services
  const services = await Promise.all([
    prisma.service.create({
      data: {
        slug: 'contenido-ugc',
        title: 'Contenido UGC',
        description: 'Creación de contenido user-generated profesional',
        includes: ['Videos nativos', 'Edición básica', 'Guiones'],
        excludes: ['Producción compleja', 'Motion graphics'],
        process: {
          steps: ['Brief', 'Grabación', 'Edición', 'Entrega']
        },
        deliverables: ['3 videos', 'Archivos RAW'],
        priceFrom: 15000,
        category: 'PRODUCCION',
        order: 1,
      },
    }),
    prisma.service.create({
      data: {
        slug: 'edicion-video',
        title: 'Edición de Videos',
        description: 'Postproducción profesional de videos',
        includes: ['Color grading', 'Sonido', 'Subtítulos'],
        excludes: ['Grabación'],
        process: {
          steps: ['Análisis material', 'Edición', 'Revisión', 'Entrega']
        },
        deliverables: ['Video final HD', 'Versiones para RRSS'],
        priceFrom: 25000,
        category: 'EDICION',
        order: 2,
      },
    }),
    prisma.service.create({
      data: {
        slug: 'branding',
        title: 'Branding Visual',
        description: 'Identidad de marca completa',
        includes: ['Logo', 'Paleta de colores', 'Tipografías', 'Manual de marca'],
        excludes: ['Desarrollo web'],
        process: {
          steps: ['Investigación', 'Concepto', 'Diseño', 'Presentación']
        },
        deliverables: ['Manual PDF', 'Assets editables'],
        priceFrom: 45000,
        category: 'BRANDING',
        order: 3,
      },
    }),
  ]);

  console.log(`✅ Created ${services.length} services`);

  // Create portfolio items
  const portfolioItems = await Promise.all([
    prisma.portfolioItem.create({
      data: {
        slug: 'campana-turismo-bariloche',
        title: 'Campaña Turismo Bariloche',
        description: 'Video promocional para campaña de turismo',
        category: 'TURISMO',
        mediaUrl: '/portfolio/bariloche.mp4',
        mediaType: 'VIDEO',
        thumbnailUrl: '/portfolio/bariloche-thumb.jpg',
        tags: ['turismo', 'patagonia', 'travel'],
        metrics: {
          views: 2500000,
          saves: 45000,
          engagement: 8.5
        },
        clientName: 'Secretaría de Turismo',
        order: 1,
      },
    }),
    prisma.portfolioItem.create({
      data: {
        slug: 'reel-producto-tech',
        title: 'Reel Producto Tech',
        description: 'Lanzamiento de producto tecnológico',
        category: 'REELS',
        mediaUrl: '/portfolio/tech-reel.mp4',
        mediaType: 'VIDEO',
        thumbnailUrl: '/portfolio/tech-thumb.jpg',
        tags: ['tech', 'producto', 'innovation'],
        metrics: {
          views: 1800000,
          saves: 32000
        },
        order: 2,
      },
    }),
    prisma.portfolioItem.create({
      data: {
        slug: 'branding-cafe-artesanal',
        title: 'Branding Café Artesanal',
        description: 'Identidad completa para cafetería boutique',
        category: 'BRANDING',
        mediaUrl: '/portfolio/cafe-branding.jpg',
        mediaType: 'IMAGE',
        thumbnailUrl: '/portfolio/cafe-thumb.jpg',
        tags: ['branding', 'food', 'lifestyle'],
        clientName: 'Café Origen',
        order: 3,
      },
    }),
  ]);

  console.log(`✅ Created ${portfolioItems.length} portfolio items`);

  // Create blog posts
  const blogPosts = await Promise.all([
    prisma.blogPost.create({
      data: {
        slug: 'como-crear-reels-que-venden',
        title: 'Cómo crear reels que vendan',
        excerpt: 'Guía completa para crear contenido de video que convierta',
        content: '# Introducción\n\nLos reels son la herramienta...',
        tags: ['reels', 'marketing', 'tutorial'],
        isPublished: true,
        publishedAt: new Date('2024-11-15'),
      },
    }),
    prisma.blogPost.create({
      data: {
        slug: 'tendencias-visuales-2025',
        title: 'Tendencias visuales 2025',
        excerpt: 'Lo que viene en diseño y producción audiovisual',
        content: '# Tendencias\n\nEste año veremos...',
        tags: ['tendencias', 'diseño', '2025'],
        isPublished: true,
        publishedAt: new Date('2024-11-20'),
      },
    }),
  ]);

  console.log(`✅ Created ${blogPosts.length} blog posts`);

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });