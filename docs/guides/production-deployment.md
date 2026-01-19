---
sidebar_position: 6
title: Production Deployment
description: Deploy SAND servers for real users
---

# Production Deployment

**Deploy Solid pods and SAND services for production use.** From single-user to multi-tenant.

## Deployment Options

| Option | Best For | Complexity |
|--------|----------|------------|
| **Sandymount** | Quick start, small scale | Low |
| **JSS** | Custom configurations | Low-Medium |
| **CSS** | Full Solid compliance | Medium |
| **Docker Compose** | Multi-service setups | Medium |
| **Kubernetes** | Large scale, high availability | High |

## Single-Server: Sandymount

The quickest path to production:

### 1. Server Setup

```bash
# On your server (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Sandymount globally
npm install -g sandymount
```

### 2. Systemd Service

```bash
# Create service file
sudo cat > /etc/systemd/system/sandymount.service << 'EOF'
[Unit]
Description=Sandymount SAND Server
After=network.target

[Service]
Type=simple
User=sandymount
WorkingDirectory=/var/lib/sandymount
ExecStart=/usr/bin/sandymount --port 5420 --root /var/lib/sandymount/data
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

# Create user and directories
sudo useradd -r -s /bin/false sandymount
sudo mkdir -p /var/lib/sandymount/data
sudo chown -R sandymount:sandymount /var/lib/sandymount

# Enable and start
sudo systemctl daemon-reload
sudo systemctl enable sandymount
sudo systemctl start sandymount
```

### 3. Reverse Proxy (nginx)

```nginx
server {
    listen 80;
    server_name pod.example.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name pod.example.com;

    ssl_certificate /etc/letsencrypt/live/pod.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/pod.example.com/privkey.pem;

    # WebSocket support (for Nostr relay)
    location / {
        proxy_pass http://localhost:5420;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### 4. SSL with Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d pod.example.com
```

## Docker Deployment

### docker-compose.yml

```yaml
version: '3.8'

services:
  sandymount:
    image: node:20-alpine
    command: npx sandymount --port 5420 --root /data
    volumes:
      - ./data:/data
    ports:
      - "5420:5420"
    restart: unless-stopped
    environment:
      - NODE_ENV=production

  # Optional: Add nginx for SSL termination
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./certs:/etc/letsencrypt:ro
    depends_on:
      - sandymount
    restart: unless-stopped
```

### Start Services

```bash
docker-compose up -d
```

## Community Solid Server (CSS)

For full Solid Protocol compliance:

### Installation

```bash
npm install -g @solid/community-server
```

### Configuration

Create `config.json`:

```json
{
  "@context": "https://linkedsoftwaredependencies.org/bundles/npm/@solid/community-server/^7.0.0/components/context.jsonld",
  "import": [
    "css:config/app/main/default.json",
    "css:config/app/init/initialize-root.json",
    "css:config/http/handler/default.json",
    "css:config/http/middleware/websockets.json",
    "css:config/identity/handler/default.json",
    "css:config/identity/ownership/token.json",
    "css:config/identity/pod/static.json",
    "css:config/ldp/handler/default.json",
    "css:config/ldp/metadata-parser/default.json",
    "css:config/ldp/metadata-writer/default.json",
    "css:config/ldp/modes/default.json",
    "css:config/storage/backend/file.json",
    "css:config/util/auxiliary/acl.json",
    "css:config/util/identifiers/suffix.json",
    "css:config/util/index/default.json",
    "css:config/util/logging/winston.json",
    "css:config/util/representation-conversion/default.json",
    "css:config/util/resource-locker/file.json",
    "css:config/util/variables/default.json"
  ],
  "@graph": [
    {
      "comment": "Base URL of the server",
      "@id": "urn:solid-server:default:variable:baseUrl",
      "@type": "Variable",
      "default": "https://pod.example.com/"
    }
  ]
}
```

### Run CSS

```bash
community-solid-server -c config.json -f ./data
```

## Multi-Tenant Setup

For hosting multiple users:

### DNS Configuration

```
*.pods.example.com.  IN  A     YOUR_IP
pods.example.com.    IN  A     YOUR_IP
```

### Wildcard SSL

```bash
sudo certbot certonly --manual --preferred-challenges dns \
  -d pods.example.com -d "*.pods.example.com"
```

### nginx for Multi-Tenant

```nginx
server {
    listen 443 ssl http2;
    server_name ~^(?<subdomain>.+)\.pods\.example\.com$;

    ssl_certificate /etc/letsencrypt/live/pods.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/pods.example.com/privkey.pem;

    location / {
        proxy_pass http://localhost:5420;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Monitoring

### Health Checks

```bash
# Basic health check
curl -s -o /dev/null -w "%{http_code}" https://pod.example.com/

# Check Solid functionality
curl -H "Accept: text/turtle" https://pod.example.com/
```

### Prometheus Metrics (if available)

```yaml
# prometheus.yml
scrape_configs:
  - job_name: 'sandymount'
    static_configs:
      - targets: ['localhost:5420']
```

## Backup Strategy

### Data Backup

```bash
#!/bin/bash
# backup.sh
BACKUP_DIR="/backups/sandymount"
DATA_DIR="/var/lib/sandymount/data"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR
tar -czf "$BACKUP_DIR/backup_$DATE.tar.gz" -C $DATA_DIR .

# Keep only last 7 days
find $BACKUP_DIR -name "backup_*.tar.gz" -mtime +7 -delete
```

### Automated Backups

```bash
# Add to crontab
0 3 * * * /opt/scripts/backup.sh
```

## Security Checklist

- [ ] SSL/TLS enabled (HTTPS only)
- [ ] Firewall configured (only 80/443 exposed)
- [ ] Regular backups configured
- [ ] Log rotation set up
- [ ] Fail2ban or similar for brute force protection
- [ ] Keep Node.js and dependencies updated
- [ ] Monitor disk space
- [ ] Set up alerting for downtime

## Scaling Considerations

### Horizontal Scaling

For high traffic:
1. Use a load balancer
2. Shared storage (NFS, S3) for pod data
3. Session affinity for WebSocket connections

### Caching

Add Redis or similar for:
- Session storage
- Frequently accessed resources
- Rate limiting

## See Also

- [Sandymount](/projects/sandymount) — Quick start server
- [JSS](/projects/jss) — JavaScript Solid Server
- [CSS](/projects/css) — Community Solid Server
- [Your First Pod](/guides/your-first-pod) — Getting started
