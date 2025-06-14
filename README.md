# Bryan Garay - Portafolio Web Accesible

**Autor**: Bryan Garay  
**Diseño Figma**: [Figma Portfolio](https://www.figma.com/design/cRxhBl7KgXhTdnBdrhZfSY/Garay---IPC---Lab-1---Portafolio?t=xObRR1bAQf4k4QQY-0)  
**Despliegue**: [GitHub Pages](https://bryangaray99.github.io/ipc-portfolio-responsive/)

## 📋 Descripción

Portafolio personal web responsivo desarrollado con React, TypeScript y Vite siguiendo los más altos estándares de accesibilidad web (WCAG 2.1 AA) para garantizar una experiencia inclusiva para todos los usuarios.

## ✨ Características Principales

### 🌐 **Características Generales de Accesibilidad Cumplidas**

- **Estructura semántica HTML5**: `header`, `nav`, `main`, `section`, `article`, `footer`
- **Contraste WCAG 2.1 AA**: Ratios de contraste mínimo 4.5:1 para texto normal
- **Navegación por teclado completa**: Tab, Enter, Space, Escape, flechas direccionales
- **Soporte para lectores de pantalla**: ARIA labels, live regions, estructura optimizada
- **Secciones más descriptivas**: Cada sección incluye contexto claro y aria-labelledby
- **Enlaces más claros**: Textos descriptivos específicos con íconos apropiados y descripciones contextuales
- **Imágenes accesibles**: Alt text descriptivos y fallbacks inteligentes
- **Skip links**: Navegación rápida al contenido principal
- **Jerarquía de títulos lógica**: H1 → H2 → H3 en orden semántico correcto

### 🎯 **Características Específicas de Diseño Inclusivo**

#### 1. **📏 Control de Tamaño de Fuente**

- **Tamaños ajustables**: Pequeño (14px), Mediano (16px), Grande (18px), Muy Grande (22px)
- **Persistencia**: Configuración guardada en localStorage
- **Aplicación dinámica**: Cambios en tiempo real sin recargar página
- **Ubicación**: Reemplaza el botón de contacto en desktop para mejor accesibilidad

#### 2. **🌍 Selector de Idioma Bilingüe**

- **Idiomas soportados**: Español (predeterminado) e Inglés
- **Traducción completa**: Interfaz, contenido y ARIA labels
- **Cambio dinámico**: Sin recarga de página
- **Contexto preserved**: Mantiene posición y estado al cambiar idioma

#### 3. **🎨 Selector de Temas Avanzado**

- **Modo Claro**: Colores estándar con alta legibilidad
- **Modo Oscuro**: Paleta oscura optimizada para reducir fatiga visual
- **Aplicación inmediata**: Cambios instantáneos en toda la interfaz

## 🛠️ Tecnologías Utilizadas

- **React 18** + **TypeScript**: Base sólida y tipado estático
- **Vite**: Desarrollo rápido y build optimizado
- **TailwindCSS**: Diseño responsivo y utility-first
- **Radix UI**: Componentes accesibles por defecto
- **Context API**: Gestión de estado global para configuraciones de accesibilidad

## 🚀 Instalación y Uso

```bash
# Clonar repositorio
git clone https://github.com/BryanGaray99/ipc-portfolio-responsive.git
cd ipc-portfolio-responsive

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Build para producción
npm run build
```

## 📜 Comandos Disponibles

| Comando              | Descripción                   |
| -------------------- | ----------------------------- |
| `npm run dev`        | Servidor de desarrollo        |
| `npm run build`      | Build de producción           |
| `npm run test`       | Ejecutar tests                |
| `npm run typecheck`  | Verificar tipos TypeScript    |
| `npm run format.fix` | Formatear código con Prettier |
| `npm run deploy`     | Desplegar a GitHub Pages      |

## ♿ Configuraciones de Accesibilidad

### Cómo Usar las Características Específicas

1. **Cambiar Tamaño de Fuente**:

   - Haz clic en el ícono de configuración (⚙️) en la barra de navegación
   - Selecciona "Tamaño de fuente" → elige entre Pequeño, Mediano, Grande o Muy Grande
   - El cambio se aplica inmediatamente y se guarda automáticamente

2. **Cambiar Idioma**:

   - En el menú de configuración, selecciona "Idioma"
   - Elige entre Español o English
   - Todo el contenido se traduce instantáneamente

3. **Cambiar Tema Visual**:
   - En el menú de configuración, selecciona "Tema"
   - Opciones: Claro (predeterminado), Oscuro, Alto Contraste
   - Ideal para diferentes condiciones de iluminación y necesidades visuales

### Navegación por Teclado

- **Tab/Shift+Tab**: Navegar entre elementos interactivos
- **Enter/Space**: Activar botones y enlaces
- **Escape**: Cerrar menús desplegables
- **Flechas**: Navegar en menús de configuración

## 🧪 Testing de Accesibilidad

Para verificar la accesibilidad:

- **Lighthouse**: Audit de accesibilidad automatizado
- **NVDA/JAWS**: Pruebas con lectores de pantalla
- **Navegación por teclado**: Testing manual sin mouse
- **Tests automatizados**: `npm test` (16 tests de accesibilidad)

## 📁 Estructura de Configuraciones

```
src/
├── hooks/
│   ├── use-accessibility-settings.tsx  # Contexto y configuraciones
│   └── use-accessibility.tsx           # Utilidades de accesibilidad
├── components/
│   └── portfolio/
│       └── AccessibilityMenu.tsx      # Menú de configuraciones
└── index.css                          # Temas y estilos accesibles
```

## 🎨 Temas Disponibles

| Tema               | Descripción                                    | Ideal para                 |
| ------------------ | ---------------------------------------------- | -------------------------- |
| **Claro**          | Colores estándar, fondo blanco, texto oscuro   | Uso general diurno         |
| **Oscuro**         | Fondo oscuro, texto claro, menos fatiga visual | Uso nocturno, sensibilidad |
| **Alto Contraste** | Máximo contraste negro/blanco/amarillo         | Discapacidades visuales    |

## 🌐 Soporte de Idiomas

- **Español** (predeterminado): Interfaz completa y contenido
- **English**: Traducción completa incluyendo ARIA labels

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT.

