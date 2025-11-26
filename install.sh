#!/bin/bash
set -e

echo "🚀 Instalando dependencias completas..."

# 1. Instalar dependencias npm
echo "📦 Instalando paquetes npm..."
npm install react-hook-form @hookform/resolvers zod framer-motion @prisma/client

npm install -D prisma vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitejs/plugin-react @vitest/coverage-v8 tsx

npm install -D @playwright/test
npx playwright install chromium

# 2. Crear estructura de carpetas
echo "📁 Creando estructura de carpetas..."
mkdir -p src/lib
mkdir -p src/app/api
mkdir -p src/components/sections
mkdir -p src/components/forms
mkdir -p src/components/ui
mkdir -p src/server/services
mkdir -p prisma
mkdir -p e2e

# 3. Inicializar Prisma
echo "🗄️  Inicializando Prisma..."
npx prisma init

# 4. Copiar archivo .env de ejemplo
echo "📝 Creando .env..."
cat > .env <<'EOF'
# Database - Cambia estos valores según tu configuración
DATABASE_URL="postgresql://user:password@localhost:5432/marca_personal?schema=public"

# Next Auth (opcional)
NEXTAUTH_SECRET="change-this-to-random-string"
NEXTAUTH_URL="http://localhost:3000"
EOF

echo ""
echo "✅ Instalación completada!"
echo ""
echo "📋 Próximos pasos:"
echo "1. Configura tu DATABASE_URL en .env"
echo "2. Ejecuta: npx prisma migrate dev --name init"
echo "3. Ejecuta: npm run prisma:seed"
echo "4. Ejecuta: npm run dev"
echo ""
echo "🧪 Para correr tests:"
echo "  - npm test (unit tests)"
echo "  - npm run test:e2e (E2E tests)"
echo ""