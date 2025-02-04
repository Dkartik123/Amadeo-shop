import { useCallback, useState } from 'react';

export function useSet<T>(initialSet = new Set<T>()) {
  const [set, setSet] = useState(initialSet);

  const add = useCallback((item: T) => {
    setSet((prev) => new Set([...prev, item]));
  }, []);

  const toggle = useCallback((item: T) => {
    setSet((prev) => {
      const next = new Set(prev);
      if (next.has(item)) {
        next.delete(item);
      } else {
        next.add(item);
      }
      return next;
    });
  }, []);

  return [set, { add, toggle }] as const;
} 