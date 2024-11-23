# Codebase Inicial v1

Esta es una aplicación web de comercio electrónico simple y no optimizada. La aplicación incluye una página de inicio, una página de productos y una página de carrito. La aplicación está construida utilizando HTML, CSS y JavaScript.

## **Prompt for Optimization: Minimize HTTP Requests**

```markdown
Do the following optimization based on my codebase.

**Objective**: Reduce the number of HTTP requests to improve the performance of the e-commerce web application.

**Areas of Focus**:

1. **Combine CSS and JavaScript Files**:
    - Ensure all CSS is in a single styles.css file.
    - Combine multiple JavaScript files into a single script.js file.
```

## **Prompt for Optimization: Optimize Images**

**Objective**: Improve the performance of the e-commerce web application by optimizing images.

**Areas of Focus**:

1. **Compress Images**:
    - Reduce the file size of images without compromising quality.
2. **Use Modern Formats**:
    - Convert images to modern formats like WebP for better compression and quality.
3. **Implement Lazy Loading**:
    - Load images only when they are about to enter the viewport to reduce initial load time.
4. **Use npm Modules and Tools**:
    - Utilize npm modules like `imagemin`, `imagemin-mozjpeg`, `imagemin-pngquant`, and `imagemin-webp` for image optimization.
5. **Automate with Bash Scripts**:
    - Create bash scripts to automate the image optimization process.

## Estructura de Archivos

- `index.html`: La página de inicio del sitio de comercio electrónico.
- `products.html`: La página de productos donde los usuarios pueden ver y agregar productos al carrito.
- `cart.html`: La página del carrito donde los usuarios pueden ver los artículos en su carrito y proceder al pago.
- `styles.css`: Estilos combinados para la aplicación.
- `script.js`: Archivo JavaScript combinado que maneja la funcionalidad del carrito, actualización del carrito y pago.

## Características

- **Página de Inicio**: Un mensaje de bienvenida y enlaces de navegación a las páginas de productos y carrito.
- **Página de Productos**: Muestra una lista de productos con imágenes, descripciones, precios y un botón "Agregar al Carrito".
- **Página del Carrito**: Muestra los artículos agregados al carrito, la cantidad de cada artículo y el precio total. Incluye un botón "Pagar" (funcionalidad no implementada).

## Cómo Ejecutar

1. Clona el repositorio.
2. Abre `index.html` en un navegador web para ver la página de inicio.
3. Navega a la página de productos para ver y agregar productos al carrito.
4. Navega a la página del carrito para ver los artículos en el carrito.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
