import { useDarkMode } from "../../../custom-hooks/theme/useDarkMode";
import "./toggle.css";

/**
 * Toggle the theme in the application
 * theme supported Dark & Light.
 * @returns
 */
export const Toggle: React.FC = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <label className="switch">
      <input
        className="checkbox"
        type="checkbox"
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
      />
      <span className="slider round"></span>
    </label>
  );
};
