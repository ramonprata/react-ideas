import { useEffect, useState } from 'react';

export function useDelayedState<T>(delay: number, initialValue: T) {
  const [localState, setLocalState] = useState<T>(() => initialValue);
  const [delayedState, setDelayedState] = useState<T>();

  useEffect(() => {
    setTimeout(() => {
      setDelayedState(localState);
    }, delay);
  }, [localState, delay]);

  let newValue;
  if (localState === delayedState) {
    newValue = delayedState;
  }

  return [localState, setLocalState, newValue];
}
