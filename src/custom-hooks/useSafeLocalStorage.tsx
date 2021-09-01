import { useState } from "react";

export function useSafeLocalStorage(key: string, initialValue: string) {
  const [valueProxy, setValueProxy] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch {
      return initialValue;
    }
  });

  //mejorar para quie el haga los casteos dependiendo de lo que venga
  const setValue = (value: string) => {
    try {
      localStorage.setItem(key, value);
      setValueProxy(value);
    } catch {
      setValueProxy(value);
    }
  };

  return [valueProxy, setValue];
}
