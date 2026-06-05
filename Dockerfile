# Multi-stage optimized Docker build including python dependencies
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM python:3.11-alpine
RUN apk add --no-cache nodejs npm g++ make libffi-dev
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
RUN pip install --no-cache-dir numpy pandas
EXPOSE 4004
CMD ["node", "server.js"]