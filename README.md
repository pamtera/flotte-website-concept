# Flotte: propuesta de web

Prototipo no oficial publicado como demo pública. Una segunda dirección visual independiente, con más libertad de diseño.

## Ver y editar

Demo pública en GitHub Pages: https://pamtera.github.io/flotte-website-concept/

Abre `index.html` en tu navegador. No requiere instalar paquetes, compilar, claves ni servidores.

- `index.html`: contenido, estructura y CSS de la versión actual, con aviso MIT completo en un comentario.
- `2-style.css`: CSS de la versión anterior, conservado como referencia; la versión actual lleva sus estilos en index.html.
- `3-script.js`: desplegable de notas, accesible por teclado.
- `6-illustration.jpg`: ilustración conceptual original. No es foto de Flotte.

Para trabajar con servidor local opcional: `python3 -m http.server 8000` y abrir `http://localhost:8000`.

## Límites de esta propuesta

No es una web aprobada por el restaurante. La carta es una selección sin precios, basada en la fotografía compartida el 26 de octubre de 2026 que mostraba “Hace 5 días”. Dirección y reservas contrastadas con la ficha pública de Google Maps. No se reutiliza la fotografía, el logo ni reseñas como testimonios.

Fuentes: https://maps.app.goo.gl/GH5ZQCog3CuArL1S9?g_st=ic y https://flotte.myrestoo.net/

Antes de un lanzamiento oficial: validar identidad y textos con el negocio, carta y horarios vigentes, fotos y logo con permiso, responsable legal y requisitos legales aplicables.

Sin analítica, cookies propias, formularios, backend ni pagos. Los enlaces externos abren Maps y el sistema existente de reservas; no envían reservas automáticamente. `noindex,nofollow` es una indicación a buscadores, no una medida de privacidad. El repositorio, su código y la demo de GitHub Pages son públicos.

## Versión Magic UI · 27.10.2026

Diseño editorial renovado, con la misma ilustración `6-illustration.jpg` sin modificar. Efecto de borde luminoso adaptado de [Magic UI ShimmerButton](https://github.com/magicuidesign/magicui/blob/main/apps/www/registry/magicui/shimmer-button.tsx), bajo MIT; aviso íntegro incluido en un comentario de `index.html`. Es una adaptación a HTML/CSS, no una instalación de la biblioteca React. Sin dependencias de ejecución, fuentes remotas ni proceso de compilación. Respeta `prefers-reduced-motion`.

### Volver a la versión anterior

`5-flotte-before-magic-ui-2026-10-27.zip` contiene todos los archivos de la versión anterior, commit `39dbb08dc060448fefcbc12e8ecaa4b7d6d5a864`. Extraer el ZIP y sustituir los archivos de la raíz; el historial Git también conserva esa versión. La ilustración está incluida en el ZIP.
