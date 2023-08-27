import { useCallback, useEffect } from 'react';

/**
 * Very basic hook to possibly help prevent memory leaks from uncleared timers.
 * @param fn - Callback function to call after delay
 * @param [delay] - optional delay in ms
 * @returns [number, Function] - returns timer reference and clear function
 */
export function useTimeout(fn, delay = 1000){

  let timer = null;

  const clearTimer = useCallback(() => {
    if (timer != null) clearTimeout(timer);
  }, [timer])

  useEffect(() => {
    timer = setTimeout(fn, delay);
    return () => {
      clearTimer();
    };
  }, []);

  return [timer, clearTimer];

}

export default useTimeout;
