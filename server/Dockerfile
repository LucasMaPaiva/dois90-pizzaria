FROM node:20-bookworm-slim

WORKDIR /app

# better-sqlite3 publica binarios pre-compilados para linux/glibc; o node:*-slim
# (Debian) usa esses prebuilds e evita compilar nativo no build.
COPY package*.json ./
RUN npm install --omit=dev

COPY . .

# Diretorio do banco (montado como volume nomeado no docker-compose)
RUN mkdir -p /data
ENV DB_PATH=/data/content.db
ENV PORT=3001

EXPOSE 3001
CMD ["node", "index.js"]
