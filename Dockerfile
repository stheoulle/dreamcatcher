#Utiliser une image pour servir les fichiers statiques
FROM nginx:alpine

#Copier les fichiers de build dans le dossier par défaut de Nginx
COPY build/ /usr/share/nginx/html

#Exposer le port 80 pour le service
EXPOSE 80

#Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]