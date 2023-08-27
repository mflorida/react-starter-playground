/**
 * Simulate a delay from an API response???
 */
import { useCallback, useEffect, useState } from 'react';
import useTimeout from './useTimeout.js';

export function useFakeRequest(data, timeout = 2000){

  const [reqCount, setReqCount] = useState(0);
  let timer = null;

  const noop = useCallback(() => null, [data, timeout]);

  useEffect(() => {
    const [_timer, clearTimer] = useTimeout(noop, timeout);
    timer = _timer;
    setReqCount(prev => prev + 1)
    return clearTimer;
  }, [data, timeout]);

  return {
    count: reqCount,
    timer,
    data
  };

}

export default useFakeRequest;
