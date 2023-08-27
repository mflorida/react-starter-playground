import { useCallback, useEffect } from 'react';

export function useDebounce(callback, delay = 1000) {

  const debouncedCallback = useCallback((...args) => {
    return callback(...args);
  }, [callback]);

  useEffect(() => {
    let timer = setTimeout(debouncedCallback, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return debouncedCallback;
}

export default useDebounce;
