# DRKZZ Portfolio

Portafolio bilingüe de Carlos Segundo Sisniegas Arévalo, creado con Astro, TypeScript, Tailwind CSS, GSAP y ScrollTrigger. Sitio estático con páginas independientes en español e inglés y JavaScript acotado a las interacciones.

## Requisitos

- Node.js 22.23.4 o superior
- npm 10 o superior
- Docker Engine y Docker Compose (solo para ejecutar el contenedor)

## Desarrollo local

```bash
npm ci
npm run dev
```

Abre la URL que indique Astro (normalmente `http://localhost:4321`). El inicio `/` dirige al español, salvo que ya exista una preferencia guardada de idioma; las rutas completas son `/es/` y `/en/`.

## Build y comprobaciones

```bash
npm run check
npm run build
npm run preview
```

El sitio compilado se genera en `dist/`. El sitemap se crea durante el build.

## Formulario de contacto

El formulario envía los mensajes a `sisniegaarevalocarlos@gmail.com` mediante el endpoint AJAX de FormSubmit. El proveedor pide confirmar el destinatario por correo la primera vez que se utiliza; después de esa activación puede entregar los mensajes. Los visitantes también ven un enlace directo al correo como alternativa. No se ha enviado un mensaje de prueba.

## Docker local

```bash
docker compose up --build -d
docker compose ps
docker compose logs -f drkzz-portfolio
```

El contenedor se publica solo en loopback en `127.0.0.1:8085`. Para elegir otro puerto sin editar archivos:

```bash
APP_PORT=8090 docker compose up --build -d
```

Verifica que el puerto no esté ocupado antes de iniciar. El healthcheck consulta `/healthz.txt`. Para detener únicamente este servicio:

```bash
docker compose down
```

## Despliegue futuro

La imagen sirve archivos estáticos desde Nginx Alpine, registra access/error logs en stdout/stderr y no contiene dependencias de desarrollo. Compose limita el bind a loopback. Si `cloudflared` corre en el host, configura su servicio existente para apuntar al puerto local elegido. Si corre dentro de Docker, se debe compartir una red Docker explícita y usar el nombre del servicio; no se debe asumir que `localhost` apunta al host. No se modificaron túneles, DNS ni servicios remotos.

Antes de desplegar, revisar la disponibilidad del puerto, la configuración del túnel existente, los textos marcados en `CONTENT_TODO.md` y el acceso a repositorios privados. No incluir credenciales en el sitio ni en el repositorio.

## Estructura

- `src/data/portfolio.ts`: contenido, proyectos, perfil y traducciones.
- `src/pages/`: redirección de idioma y rutas `/es/`, `/en/`.
- `src/components/PortfolioPage.astro`: composición semántica de secciones.
- `src/scripts/`: interacciones accesibles y motion GSAP.
- `src/styles/global.css`: sistema visual Cyber Minimal y responsive.
- `INVESTIGACION_Y_DISENO.md`: síntesis de fuentes y propuesta visual.
- `CONTENT_TODO.md`: información que requiere confirmación editorial.
- `Dockerfile`, `compose.yaml`, `nginx.conf`: paquete estático para despliegue.
