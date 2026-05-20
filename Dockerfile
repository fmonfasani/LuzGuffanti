FROM node:20-alpine

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npx prisma generate
ENV DATABASE_URL=file:/app/prisma/template.db
RUN npx prisma db push --skip-generate
RUN npm run build

ENV NODE_ENV=production

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "start"]
