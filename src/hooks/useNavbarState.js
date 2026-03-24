import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export function useNavbarState() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkBgTop, setIsDarkBgTop] = useState(true);

  // Debounce helper
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const getBgLuminance = (element) => {
    if (!element) return 255; // Default white
    const style = window.getComputedStyle(element);
    const bg = style.backgroundColor;
    const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    
    if (match) {
      // Check for transparent background
      if (bg.includes('rgba')) {
        const alpha = parseFloat(bg.split(',')[3]);
        if (alpha === 0) {
          return getBgLuminance(element.parentElement);
        }
      }
      
      const r = parseInt(match[1]);
      const g = parseInt(match[2]);
      const b = parseInt(match[3]);
      // Standard relative luminance
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    }
    
    // If we can't parse or it's transparent, check parent
    return getBgLuminance(element.parentElement);
  };

  const checkTopBackgroundColor = useCallback(() => {
    // Only check if we are at the top (transparent navbar state)
    if (window.scrollY > 80) return;

    // Use a point slightly below the top of the viewport to hit the first section behind the nav
    const header = document.querySelector('header');
    if (header) header.style.pointerEvents = 'none'; // Temporarily disable pointer events on header to see beneath it
    
    const el = document.elementFromPoint(window.innerWidth / 2, 40);
    
    if (header) header.style.pointerEvents = ''; // Restore

    if (el) {
      const luma = getBgLuminance(el);
      // If luminance is low (dark), text should be white. If luminance is high (light), text should be dark.
      setIsDarkBgTop(luma < 128);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 80;
      setIsScrolled(scrolled);
      if (!scrolled) {
        debouncedCheckBg();
      }
    };

    const debouncedCheckBg = debounce(checkTopBackgroundColor, 50);

    // Initial checks
    handleScroll();
    setTimeout(checkTopBackgroundColor, 100); // Wait for DOM to paint
    setTimeout(checkTopBackgroundColor, 500); // Fallback after images might have loaded

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', debouncedCheckBg, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', debouncedCheckBg);
    };
  }, [location.pathname, checkTopBackgroundColor]);

  // Transparent state applies to all pages when at the top
  const isTransparent = !isScrolled;

  return { isScrolled, isTransparent, isDarkBgTop };
}
