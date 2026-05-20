# Plan Maestro de Infraestructura VPS — Plataforma Self-Hosted Escalable

## Resumen Ejecutivo

Tu infraestructura ya tiene una buena base conceptual:

- segmentación lógica
- naming consistente
- organización por proyectos
- aislamiento funcional

El siguiente paso no es "agregar más containers".
Es transformar la VPS en una **plataforma operativa estandarizada**.

### Objetivo final

Pasar de:
> "una VPS con apps"

A:
> "una plataforma self-hosted multi-proyecto automatizada"

La prioridad correcta **NO** es Kubernetes todavía.

Primero necesitás:

- estandarización
- observabilidad
- automatización declarativa
- aislamiento
- backups
- reproducibilidad

---

## Objetivos del sistema

La infraestructura debe ser:

| Objetivo | Resultado |
|---|---|
| Escalable | agregar proyectos en minutos |
| Reproducible | recrear entornos automáticamente |
| Observable | detectar problemas rápido |
| Segura | minimizar superficie expuesta |
| Automatizable | reducir deploy manual |
| Multi-tenant | soportar muchos clientes |
| Declarativa | configuración centralizada |
| Portable | migrar entre VPS fácilmente |

---

## Arquitectura objetivo

```
Internet
   ↓
Cloudflare
   ↓
Traefik Reverse Proxy
   ↓
Docker Networks
   ↓
Servicios internos
   ↓
Persistencia y observabilidad
```

---

## FASE 1 — Estandarización base

### 1.1 Naming definitivo

**Regla:**
```
{id}-{project}-{env}-{type}
```

**Ejemplos:**

| Tipo | Ejemplo |
|---|---|
| Web | `0007-webshooks-prod-web` |
| API | `0007-webshooks-prod-api` |
| DB | `0007-webshooks-prod-db` |
| Redis | `0007-webshooks-prod-cache` |
| Worker | `0007-webshooks-prod-worker-mail` |

### 1.2 IDs

```
0001 → 9999
```

Nunca usar:
- nombres solos
- IDs variables
- IDs repetidos

### 1.3 Environments obligatorios

Permitidos:
- `dev`
- `staging`
- `production`

### 1.4 Estructura filesystem

```
/infra
├── core/
│   ├── registry/
│   ├── templates/
│   ├── ports/
│   └── networks/
│
├── proxy/
│   ├── traefik/
│   └── nginx/
│
├── monitoring/
│   ├── grafana/
│   ├── loki/
│   ├── prometheus/
│   ├── promtail/
│   └── uptime-kuma/
│
├── backups/
│   ├── postgres/
│   ├── redis/
│   └── snapshots/
│
├── scripts/
│   ├── deploy/
│   ├── backup/
│   ├── restore/
│   ├── monitoring/
│   └── cleanup/
│
└── projects/
    ├── 0001-client/
    ├── 0002-client/
    └── 0007-webshooks/
```

---

## FASE 2 — Reverse Proxy profesional

### 2.1 Implementar Traefik

| Ventaja | Impacto |
|---|---|
| SSL automático | enorme |
| Routing dinámico | enorme |
| Labels Docker | enorme |
| Multi-domain | excelente |
| Auto-discovery | excelente |

### 2.2 Puertos expuestos

**SOLO:**

| Puerto | Uso |
|---|---|
| 22 | SSH |
| 80 | HTTP |
| 443 | HTTPS |

### 2.3 Regla obligatoria

Nunca publicar:
- PostgreSQL
- Redis
- Qdrant
- APIs internas

### 2.4 Redes Docker

| Network | Uso |
|---|---|
| `proxy_net` | Traefik |
| `internal_net` | apps/db |
| `ai_net` | agentes |
| `monitoring_net` | observabilidad |

---

## FASE 3 — Registry declarativo

### 3.1 Archivo central

`/infra/core/registry/projects.yaml`

```yaml
projects:
  - id: 0007
    name: webshooks
    environment: production
    domains:
      - webshooks.com
      - api.webshooks.com
    services:
      - web
      - api
      - db
      - redis
    owner: fede
    monitoring:
      enabled: true
    backups:
      enabled: true
```

### 3.2 Beneficio

TODO sale del registry:
- deploys
- DNS
- Traefik
- backups
- monitoreo
- healthchecks
- dashboards

---

## FASE 4 — Docker estándar empresarial

### 4.1 Template docker-compose

Cada proyecto debe tener:
- `docker-compose.yml`
- `docker-compose.prod.yml`
- `docker-compose.dev.yml`
- `.env`

### 4.2 Healthchecks obligatorios

En TODOS los servicios:

```yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
  interval: 30s
  timeout: 10s
  retries: 5
```

### 4.3 Resource limits

```yaml
deploy:
  resources:
    limits:
      cpus: "1.0"
      memory: 512M
```

### 4.4 Logging estándar

```yaml
logging:
  driver: json-file
  options:
    max-size: "10m"
    max-file: "5"
```

---

## FASE 5 — Observabilidad

### Stack recomendado

| Herramienta | Función |
|---|---|
| Grafana | dashboards |
| Prometheus | métricas |
| Loki | logs |
| Promtail | shipping logs |
| Uptime Kuma | uptime |
| Sentry | errores app |

### Métricas mínimas

- CPU
- RAM
- Disk
- Network
- Container restart
- API latency
- Error rate
- Queue size
- DB connections

---

## FASE 6 — Seguridad

### 6.1 Firewall

UFW — Permitir solo:
- `22`
- `80`
- `443`

### 6.2 Fail2ban

Obligatorio.

### 6.3 Secrets management

NO usar:
- passwords en .env
- tokens hardcodeados

Usar:
- Vaultwarden
- Infisical

### 6.4 SSH

- deshabilitar password auth
- usar SSH keys
- root login disabled

---

## FASE 7 — Backups

### 7.1 Backups obligatorios

- PostgreSQL
- Redis
- Volúmenes Docker
- Registry
- `.env`
- Config proxy

### 7.2 Estrategia

| Frecuencia | Retención |
|---|---|
| Diario | 14 días |
| Semanal | 8 semanas |
| Mensual | 12 meses |

### 7.3 Destino

NO guardar solo en la VPS.

Usar:
- Backblaze B2
- Cloudflare R2

---

## FASE 8 — CI/CD

### Pipeline recomendado

```
Git Push
   ↓
CI
   ↓
Build
   ↓
Test
   ↓
Docker Build
   ↓
Registry
   ↓
Deploy
   ↓
Healthcheck
```

### Herramientas

| Función | Herramienta |
|---|---|
| Git | GitLab |
| CI/CD | GitLab CI |
| Registry | GitLab Registry |
| Deploy | SSH Runner |

---

## FASE 9 — Plataforma propia (Devoops)

### 9.1 Panel central

| Feature |
|---|
| Crear proyecto |
| Asignar dominio |
| Generar compose |
| Crear SSL |
| Deploy |
| Restart |
| Logs |
| Metrics |
| Backups |
| Restore |
| Healthchecks |

### 9.2 Arquitectura

```
Devoops UI
   ↓
Devoops API
   ↓
Docker Engine API
   ↓
Traefik API
   ↓
Registry YAML
```

---

## Roadmap realista

| Fase | Tiempo |
|---|---|
| Estandarización | 2 días |
| Traefik + networks | 1 día |
| Monitoring | 2 días |
| Backups | 1 día |
| CI/CD | 2 días |
| Registry YAML | 1 día |
| Devoops MVP | 2-3 semanas |

---

## Riesgos actuales

| Riesgo | Impacto |
|---|---|
| Puertos expuestos | crítico |
| Sin observabilidad | crítico |
| SQLite | medio |
| Secrets en env | alto |
| Sin backups reales | crítico |
| Sin healthchecks | alto |
| Sin limits | alto |

---

## Checklist prioritario

### PRIORIDAD MÁXIMA
- [ ] instalar Traefik
- [ ] cerrar puertos
- [ ] crear networks
- [ ] implementar healthchecks
- [ ] implementar backups

### PRIORIDAD ALTA
- [ ] registry YAML
- [ ] monitoring stack
- [ ] logging centralizado
- [ ] resource limits
- [ ] CI/CD

### PRIORIDAD MEDIA
- [ ] panel Devoops
- [ ] auto-discovery
- [ ] deploy declarativo
- [ ] generación automática de compose

---

## Recomendación final

NO migres todavía a:
- Kubernetes
- Swarm
- Nomad

Primero:
- orden
- estandarización
- automatización
- observabilidad

Cuando tengas:
- 30+ proyectos
- múltiples VPS
- HA
- multi-node

recién ahí考虑 orquestación.
