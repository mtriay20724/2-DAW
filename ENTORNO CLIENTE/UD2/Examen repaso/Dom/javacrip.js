/*
EXPLORADOR DEL BOM --- "navigator, screen, window.location"
Muestra info del navegador, la URL actual, un botón de redirección
y los datos del objeto screen.
*/

// ---------- INFORMACIÓN DEL NAVEGADOR ----------
// navigator = objeto del BOM con info del navegador y del sistema

// navigator.userAgent -> texto largo que identifica navegador y sistema ("Mozilla/5.0 ...")
document.getElementById("userAgent").textContent = "Navegador: " + navigator.userAgent;

// navigator.language -> idioma del navegador ("es", "es-ES", "en-US")
document.getElementById("idioma").textContent = "Idioma: " + navigator.language;

// navigator.platform -> sistema operativo ("Win32", "MacIntel", "Linux x86_64")
document.getElementById("plataforma").textContent = "Plataforma: " + navigator.platform;

// screen.width / screen.height -> resolución total de la pantalla en píxeles
document.getElementById("resolucion").textContent =
  "Resolución: " + screen.width + " x " + screen.height;

// ---------- NAVEGACIÓN ----------
// window.location = objeto del BOM con la URL actual
// location.href -> la URL completa de la página (aquí "file:///C:/...")
document.getElementById("urlActual").textContent = "URL actual: " + window.location.href;

// ---------- REDIRECCIÓN ----------
// Función que se ejecuta al pulsar el botón (onclick="irAMDN()")
function irAMDN() {
  // Asignar a location.href lleva al usuario a otra página
  window.location.href = "https://developer.mozilla.org";
}

// ---------- INFORMACIÓN DE LA PANTALLA ----------

// Resolución total de la pantalla (width x height)
document.getElementById("resTotal").textContent =
  "Resolución total: " + screen.width + " x " + screen.height;

// availWidth / availHeight -> área disponible: la pantalla SIN la barra de tareas
// (por eso sale 1032 de alto en vez de 1080)
document.getElementById("areaDisponible").textContent =
  "Área disponible: " + screen.availWidth + " x " + screen.availHeight;

// screen.orientation.type -> "landscape-primary" (horizontal) o "portrait-primary" (vertical)
document.getElementById("orientacion").textContent =
  "Orientación: " + screen.orientation.type;

// screen.colorDepth -> bits usados para el color (normalmente 24)
document.getElementById("colorDepth").textContent =
  "Profundidad de color: " + screen.colorDepth + " bits";

// screen.pixelDepth -> bits por píxel (normalmente igual que colorDepth)
document.getElementById("pixelDepth").textContent =
  "Profundidad de píxel: " + screen.pixelDepth + " bits";

/*
CHULETA RÁPIDA DEL BOM:
- navigator.userAgent       -> navegador y sistema (texto largo)
- navigator.language        -> idioma
- navigator.platform        -> sistema operativo
- navigator.onLine          -> true/false si hay conexión
- screen.width / height     -> resolución total
- screen.availWidth / availHeight -> área disponible (sin barra de tareas)
- screen.colorDepth / pixelDepth  -> bits de color
- screen.orientation.type   -> orientación
- window.innerWidth / innerHeight -> tamaño de la ventana del navegador (no de la pantalla)
- location.href             -> URL completa (también sirve para redirigir)
- location.hostname         -> solo el dominio
- location.pathname         -> solo la ruta
- location.reload()         -> recarga la página
- location.assign(url)      -> redirige (se puede volver atrás)
- location.replace(url)     -> redirige SIN poder volver atrás
- window.open(url)          -> abre en otra pestaña
- history.back() / history.forward() -> atrás / adelante
- history.length            -> nº de páginas en el historial
*/