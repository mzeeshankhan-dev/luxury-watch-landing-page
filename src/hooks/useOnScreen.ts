import { useEffect, useRef, useState } from 'react';

export function useOnScreen<T extends HTMLElement>(options?: {
  once?: boolean;
  threshold?: number;
}) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const once = options?.once ?? true;
  const threshold = options?.threshold ?? 0.25;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold]);

  return { ref, isVisible };
}
