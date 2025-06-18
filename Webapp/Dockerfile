# Étape 1 : Construction de l'application
FROM node:18-alpine AS build

WORKDIR /app

# Copier les fichiers de configuration et de dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Construire l'application pour la production
RUN npm run build

# Étape 2 : Servir avec un serveur léger
FROM node:18-alpine AS serve

WORKDIR /app

# Installer un serveur HTTP pour React (serve)
RUN npm install -g serve

# Copier le build depuis l'étape précédente
COPY --from=build /app/dist ./dist

EXPOSE 5173

# Lancer le serveur pour exposer React
CMD ["serve", "-s", "dist", "-l", "5173"]
