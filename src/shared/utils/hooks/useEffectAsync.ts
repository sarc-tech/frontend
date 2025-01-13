import { DependencyList, useEffect } from 'react';

type AsyncEffectCallback = () => Promise<void>;

export const useEffectAsync = (
  effect: AsyncEffectCallback,
  deps?: DependencyList,
  destructor?: () => void,
) => {
  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    effect();
    return destructor;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
