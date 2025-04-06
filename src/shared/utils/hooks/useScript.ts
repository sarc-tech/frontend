import { useEffect } from 'react';
export const useScript = (url: string, onLoad?: () => void) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;
    script.onload = function () {
      onLoad?.();
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [onLoad, url]);
};
