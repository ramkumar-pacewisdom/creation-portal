# Dockerfile for the player setup
FROM node:current-bookworm-slim
RUN useradd -u 1001 -md /home/sunbird sunbird
WORKDIR /home/sunbird
COPY --chown=sunbird /src/app/app_dist/ /home/sunbird/app_dist/
USER sunbird
WORKDIR /home/sunbird/app_dist
EXPOSE 3000
CMD ["node", "server.js", "&"]
