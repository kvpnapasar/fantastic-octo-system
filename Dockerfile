# Stage 1: Build the Next.js static site
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY frontend/package.json frontend/package-lock.json* ./frontend/
RUN npm install --prefix frontend

# Copy source and build
COPY frontend/ ./frontend/

# Build static export (outputs to frontend/out)
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build --prefix frontend

# Stage 2: Serve the static output (for local preview/testing only)
FROM nginx:alpine AS runner

COPY --from=builder /app/frontend/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
