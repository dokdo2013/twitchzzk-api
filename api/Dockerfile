# Install packages and build
FROM node:20-alpine as builder

WORKDIR /app

COPY . /app

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

# Copy build to production image
FROM node:20-alpine

ENV NODE_ENV production

USER node
WORKDIR /app

COPY --from=builder --chown=node:node /app/package*.json ./
COPY --from=builder --chown=node:node /app/pnpm-lock.yaml ./
COPY --from=builder --chown=node:node /app/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /app/dist/ ./dist/

CMD ["node", "dist/main.js"]