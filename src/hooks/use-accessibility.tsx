import { useCallback } from "react";

/**
 * Hook personalizado para manejar funcionalidades de accesibilidad
 * Proporciona utilidades para anuncios a lectores de pantalla y gestión de foco
 */
export const useAccessibility = () => {
  /**
   * Anuncia un mensaje a los lectores de pantalla usando ARIA live regions
   * @param message - El mensaje a anunciar
   * @param priority - Prioridad del anuncio ('polite' | 'assertive')
   */
  const announce = useCallback(
    (message: string, priority: "polite" | "assertive" = "polite") => {
      const announcer = document.createElement("div");
      announcer.setAttribute("aria-live", priority);
      announcer.setAttribute("aria-atomic", "true");
      announcer.className = "sr-only";
      announcer.textContent = message;

      document.body.appendChild(announcer);

      // Remover el elemento después de que el lector de pantalla lo haya procesado
      setTimeout(() => {
        if (document.body.contains(announcer)) {
          document.body.removeChild(announcer);
        }
      }, 1000);
    },
    [],
  );

  /**
   * Mueve el foco a un elemento específico
   * @param elementId - ID del elemento al cual mover el foco
   * @param preventScroll - Si se debe prevenir el scroll automático
   */
  const focusElement = useCallback(
    (elementId: string, preventScroll: boolean = false) => {
      const element = document.getElementById(elementId);
      if (element) {
        element.focus({ preventScroll });
        return true;
      }
      return false;
    },
    [],
  );

  /**
   * Maneja eventos de teclado estándar para activación (Enter y Space)
   * @param callback - Función a ejecutar cuando se presione Enter o Space
   * @returns Función de manejo de eventos de teclado
   */
  const handleKeyboardActivation = useCallback((callback: () => void) => {
    return (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        callback();
      }
    };
  }, []);

  /**
   * Maneja la navegación por teclado en listas/menús
   * @param items - Array de elementos/opciones
   * @param currentIndex - Índice actual seleccionado
   * @param onIndexChange - Callback cuando cambie el índice
   * @param onSelect - Callback cuando se seleccione un elemento
   */
  const handleListNavigation = useCallback(
    (
      items: any[],
      currentIndex: number,
      onIndexChange: (index: number) => void,
      onSelect?: (item: any, index: number) => void,
    ) => {
      return (event: React.KeyboardEvent) => {
        switch (event.key) {
          case "ArrowDown":
            event.preventDefault();
            onIndexChange((currentIndex + 1) % items.length);
            break;
          case "ArrowUp":
            event.preventDefault();
            onIndexChange(
              currentIndex === 0 ? items.length - 1 : currentIndex - 1,
            );
            break;
          case "Home":
            event.preventDefault();
            onIndexChange(0);
            break;
          case "End":
            event.preventDefault();
            onIndexChange(items.length - 1);
            break;
          case "Enter":
          case " ":
            if (onSelect && items[currentIndex]) {
              event.preventDefault();
              onSelect(items[currentIndex], currentIndex);
            }
            break;
          case "Escape":
            // Permitir que el componente padre maneje el escape
            break;
        }
      };
    },
    [],
  );

  /**
   * Genera un ID único para elementos que necesitan identificación
   * @param prefix - Prefijo para el ID
   * @returns ID único
   */
  const generateId = useCallback((prefix: string = "element") => {
    return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  /**
   * Verifica si el usuario prefiere movimiento reducido
   * @returns boolean indicando si se prefiere movimiento reducido
   */
  const prefersReducedMotion = useCallback(() => {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  /**
   * Crea atributos ARIA comunes para elementos interactivos
   * @param options - Opciones para los atributos ARIA
   * @returns Objeto con atributos ARIA
   */
  const createAriaAttributes = useCallback(
    (options: {
      label?: string;
      describedBy?: string;
      expanded?: boolean;
      controls?: string;
      hasPopup?: boolean | "menu" | "listbox" | "tree" | "grid" | "dialog";
      pressed?: boolean;
      selected?: boolean;
      current?: boolean | "page" | "step" | "location" | "date" | "time";
    }) => {
      const attributes: Record<string, any> = {};

      if (options.label) attributes["aria-label"] = options.label;
      if (options.describedBy)
        attributes["aria-describedby"] = options.describedBy;
      if (options.expanded !== undefined)
        attributes["aria-expanded"] = options.expanded;
      if (options.controls) attributes["aria-controls"] = options.controls;
      if (options.hasPopup !== undefined)
        attributes["aria-haspopup"] = options.hasPopup;
      if (options.pressed !== undefined)
        attributes["aria-pressed"] = options.pressed;
      if (options.selected !== undefined)
        attributes["aria-selected"] = options.selected;
      if (options.current !== undefined)
        attributes["aria-current"] = options.current;

      return attributes;
    },
    [],
  );

  return {
    announce,
    focusElement,
    handleKeyboardActivation,
    handleListNavigation,
    generateId,
    prefersReducedMotion,
    createAriaAttributes,
  };
};

/**
 * Hook específico para manejo de skip links
 * Facilita la implementación de enlaces de salto para navegación rápida
 */
export const useSkipLinks = () => {
  const { announce, focusElement } = useAccessibility();

  const skipTo = useCallback(
    (targetId: string, announcement?: string) => {
      const success = focusElement(targetId, true);
      if (success && announcement) {
        announce(announcement);
      }
      return success;
    },
    [announce, focusElement],
  );

  const skipToMainContent = useCallback(() => {
    return skipTo("main-content", "Navegando al contenido principal");
  }, [skipTo]);

  const skipToNavigation = useCallback(() => {
    return skipTo("main-navigation", "Navegando al menú principal");
  }, [skipTo]);

  return {
    skipTo,
    skipToMainContent,
    skipToNavigation,
  };
};
