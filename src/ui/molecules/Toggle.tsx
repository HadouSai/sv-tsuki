import React from "react";
import { useDarkMode } from "../../custom-hooks/theme/useDarkMode";

interface Props {}

export const Toggle = (props: Props) => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <label>
      <input
        type="checkbox"
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
      />
      Dark
    </label>
  );
};
