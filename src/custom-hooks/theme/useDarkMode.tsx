import { useEffect } from "react";
import { usePrefersDarkMode } from "./usePrefersDarkMode";
import { useSafeLocalStorage } from "../useSafeLocalStorage";

// FALTA DOCUMENTACION
export const useDarkMode = () => {
  const prefersDarkMode = usePrefersDarkMode();
  const [isEnabled, setIsEnabled] = useSafeLocalStorage("dark-mode", "");

  const enabled = typeof isEnabled === "boolean" ? isEnabled : prefersDarkMode;

  useEffect(() => {
    if (window === undefined) return;

    const root = document.documentElement;
    root.classList.remove(enabled ? "light" : "dark");
    root.classList.add(enabled ? "dark" : "light");
  }, [enabled]);

  return [enabled, setIsEnabled];
};
