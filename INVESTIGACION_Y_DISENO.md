# Investigación y dirección visual

## Investigación realizada

Revisión realizada el 11 de noviembre de 2026 mediante el conector GitHub conectado, lectura de metadatos/documentación disponible y navegación de referencia. El acceso autenticado mostró 24 repositorios personales y de las organizaciones indicadas. Los repositorios privados se utilizaron como fuente de contexto, pero sus enlaces, capturas y documentación interna no se publican en el portafolio.

### Perfil y proyectos

| Proyecto                                  | Evidencia consultada                                                                                                                                                                                                                                                           | Criterio de publicación                                                                                                                                                                                                                                         |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DrinkGo                                   | `drkzzzz/LP3-GRUPAL` público, monorepo actualizado el 8 de noviembre de 2026. README describe POS multi-sede y e-commerce; la estructura contiene áreas de administración, storefront y superadmin; el manifiesto React/Vite y `pom.xml` confirman React, Spring Boot y MySQL. | Se presenta como proyecto grupal y en desarrollo. La tarjeta enlaza el repositorio público, no inventa una demo y deja pendiente delimitar el aporte individual.                                                                                                |
| Gestión de estacionamiento (SAT Tarapoto) | `Sat-Tarapoto/CocheraTarapoto` es privado; su descripción lo relaciona con gestión de cochera e integración con cámara. `drkzzzz/deteccion-placas` es un repositorio público distinto con README que describe detección vehicular con YOLOv8/OCR.                              | Se presenta como experiencia en desarrollo de software para gestión operativa, sin capturas, enlace al código, detalles internos ni atribución individual no verificada. El prototipo público de detección de placas no se mezcla con el sistema institucional. |
| Auratech                                  | `JBC-Startup/auratech-frontend` privado; GitHub lo describe como frontend de app móvil y reporta Dart como lenguaje principal. `auratech-backend` es privado y reporta Python; documentación disponible describe FastAPI.                                                      | Se identifica como aplicación móvil colaborativa en desarrollo. Solo se publica el stack de la interfaz confirmado por metadatos (Dart); backend y tecnologías adicionales quedan pendientes de validación para el contenido público.                           |
| API de facturación electrónica            | `JBC-Startup/Sistema-Facturacion-Backend` es privado y reporta Java. El objetivo, PostgreSQL, Docker, Flyway y API Key provienen de la información proporcionada por Carlos.                                                                                                   | Se presenta como proyecto en desarrollo y sin enlace al repositorio. El texto no afirma que el flujo SUNAT esté terminado ni que la API esté en producción.                                                                                                     |
| Chocheras                                 | Sitio público `chocheras.com` revisado: presenta sistemas de citas, reservas, pedidos, ventas e inventario. `JBC-Startup/Frontend-Chocheras` privado; README describe un sitio institucional con PHP, CSS, JavaScript ES Modules y Vite.                                       | Se separa de la marca personal y se describe como iniciativa de software. La participación individual queda pendiente de confirmar.                                                                                                                             |
| Premier League Tracker                    | Repositorio público `drkzzzz/premierleague`; README identifica el repositorio como frontend de HTML/CSS/JavaScript vanilla con vistas para resultados, jornadas, estadísticas y tabla.                                                                                         | Se puede mostrar como proyecto público de interfaz, sin atribuir backend ni estado de producto completo. La contribución personal y una demo activa deben confirmarse.                                                                                          |

Otros repositorios del perfil incluyen apps Flutter relacionadas con SAT y un asistente local de IA. No se incluyen por ahora: sus READMEs no permiten establecer con seguridad la autoría individual y/o el material revisado contiene datos operativos que no corresponden a un portafolio público. Tampoco se emplean como referencia proyectos ajenos que aparecen entre los resultados de búsqueda.

### Otros repositorios accesibles revisados

- `drkzzzz/premierbackend`: Java/Spring Boot, Maven y documentación de una API REST con usuarios/autenticación. `drkzzzz/premierleague` se describe como el frontend vanilla que consume una API REST. Se presenta únicamente como interfaz; se deja la atribución personal, estado integrado y demo como pendientes.
- `drkzzzz/premierleague2.0` y `drkzzzz/LP3-INDIVIDUAL`: contienen carpetas frontend/backend y documentación de requerimientos, pero no un README que permita confirmar funciones terminadas o alcance actual. No se presentan como productos.
- `drkzzzz/Proyectolp2grupal`: contiene documentación y código de frontend/backend, pero su README no identifica de forma útil el producto ni el estado; queda fuera de los destacados.
- `drkzzzz/deteccion-placas`: README público describe detección YOLOv8/OCR y una consulta a SUNARP. Se mantiene separado del sistema institucional de cochera y no se usa para afirmar que la integración institucional esté terminada.
- `drkzzzz/Fiscalizadores-IOS`: Flutter; la revisión encontró configuración sensible en el README público. No se enlaza ni se reutiliza su material hasta limpiar el repositorio y rotar la credencial asociada.
- `drkzzzz/Notificadores-IOS`: Flutter, pero el README disponible es el texto inicial genérico del framework y no permite afirmar funciones del producto.
- `drkzzzz/JarvisAi`: README describe un asistente local de voz y escritorio, pero incluye instrucciones de clonación desde otro repositorio; no se atribuye ese producto a Carlos sin confirmar su contribución.
- `JBC-Startup/turismo-ia-sanmartin`: repositorio público con carpetas de backend, base de datos y motor ML; no tiene documentación raíz suficiente para confirmar funciones o participación individual.

### Referencia visual

`barc.chocheras.com` emplea navegación por anclas, cambio ES/EN, selector de tema, botón de CV y secciones convencionales de presentación, proyectos, trayectoria, habilidades y contacto. La propuesta toma esa claridad de navegación como referencia funcional, sin reutilizar su identidad, fotografía, textos, orden editorial, componentes ni animaciones.

## Propuesta de diseño

- **Dirección:** cyber minimal editorial; base azul tinta, fondos profundos, líneas frías y acento azul eléctrico/cyan muy medido.
- **Composición:** portada de alto impacto dividida entre tipografía a escala editorial y una pieza geométrica original construida con CSS/SVG. Sin fotografía personal, capturas ficticias ni visuales que aparenten ser interfaces reales de proyectos.
- **Ritmo:** encabezados numerados, amplios espacios, separadores finos, alternancia de superficies y una trayectoria vertical compacta. No usar una cuadrícula de tarjetas repetidas.
- **Movimiento:** entrada breve sin porcentaje, reveals discretos con GSAP/ScrollTrigger, progreso de scroll y microinteracciones. Todo se reduce con `prefers-reduced-motion`; el preloader se omite tras la primera visita de sesión.
- **Contenido:** perfil, educación, prácticas, proyectos centralizados y bilingües; proyectos privados sin enlace, y estados claramente indicados.
- **Responsive y acceso:** navegación móvil operable, foco visible, estructura semántica, botones etiquetados y elemento visual simplificado en pantallas pequeñas.

## Pendientes de contenido

Ver `CONTENT_TODO.md` para datos que requieren confirmación antes de presentar atribuciones, estados o enlaces como definitivos.
